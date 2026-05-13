'use client';

import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

import {
  useCameraRig,
  useHeroScenePointer,
  usePointsRef,
  useSnowAnimation,
  useStableThreeObject,
  useStarsAnimation,
  type MouseRef,
} from './hooks/use-hero-scene-state';

import './hero-scene.scss';

const STAR_COUNT = 1800;
const SNOW_COUNT = 900;

function softCircleTexture(size: number, rgb: string) {
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const g = c.getContext('2d');
  if (!g) return new THREE.CanvasTexture(c);
  const grd = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grd.addColorStop(0.0, `rgba(${rgb},1)`);
  grd.addColorStop(0.4, `rgba(${rgb},0.5)`);
  grd.addColorStop(1.0, `rgba(${rgb},0)`);
  g.fillStyle = grd;
  g.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

function makeStars() {
  const geom = new THREE.BufferGeometry();
  const pos = new Float32Array(STAR_COUNT * 3);
  const col = new Float32Array(STAR_COUNT * 3);
  const sz = new Float32Array(STAR_COUNT);
  for (let i = 0; i < STAR_COUNT; i++) {
    const r = 200 + Math.random() * 600;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    pos[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = -Math.abs(r * Math.cos(phi)) * 0.6;

    const roll = Math.random();
    let c: THREE.Color;
    if (roll < 0.06) c = new THREE.Color(0xffd2a8);
    else if (roll < 0.15) c = new THREE.Color(0xaee6ff);
    else c = new THREE.Color(0xffffff);
    const tint = 0.65 + Math.random() * 0.35;
    col[i * 3 + 0] = c.r * tint;
    col[i * 3 + 1] = c.g * tint;
    col[i * 3 + 2] = c.b * tint;

    sz[i] = Math.random() < 0.06 ? 4 + Math.random() * 3 : 1 + Math.random() * 2.2;
  }
  geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geom.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geom.setAttribute('aSize', new THREE.BufferAttribute(sz, 1));

  const tex = softCircleTexture(64, '255,255,255');
  const mat = new THREE.PointsMaterial({
    size: 2.4,
    map: tex,
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  return new THREE.Points(geom, mat);
}

function makeSnow() {
  const geom = new THREE.BufferGeometry();
  const pos = new Float32Array(SNOW_COUNT * 3);
  const vel = new Float32Array(SNOW_COUNT * 3);
  for (let i = 0; i < SNOW_COUNT; i++) {
    pos[i * 3 + 0] = (Math.random() - 0.5) * 900;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 600;
    pos[i * 3 + 2] = -Math.random() * 600;
    vel[i * 3 + 0] = (Math.random() - 0.5) * 0.15;
    vel[i * 3 + 1] = -(0.25 + Math.random() * 0.8);
    vel[i * 3 + 2] = Math.random() * Math.PI * 2;
  }
  geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geom.userData.vel = vel;

  const tex = softCircleTexture(64, '180,196,224');
  const mat = new THREE.PointsMaterial({
    size: 5,
    map: tex,
    color: 0x9bb2d4,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
    blending: THREE.NormalBlending,
    sizeAttenuation: true,
  });
  return new THREE.Points(geom, mat);
}

function makeGlow() {
  const tex = softCircleTexture(256, '120,170,255');
  const glow = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: tex,
      color: 0x6aa8ff,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  glow.scale.set(800, 800, 1);
  glow.position.set(0, -120, -200);
  return glow;
}

function CameraRig({ mouse }: { mouse: MouseRef }) {
  useCameraRig(mouse);
  return null;
}

function StarsParticles({ visible }: { visible: boolean }) {
  const ref = usePointsRef();
  const obj = useStableThreeObject(makeStars);
  useStarsAnimation(ref);

  return <primitive ref={ref} object={obj} visible={visible} />;
}

function SnowParticles({ visible, mouse }: { visible: boolean; mouse: MouseRef }) {
  const ref = usePointsRef();
  const obj = useStableThreeObject(makeSnow);
  useSnowAnimation(ref, mouse, SNOW_COUNT);

  return <primitive ref={ref} object={obj} visible={visible} />;
}

function GlowSprite({ visible }: { visible: boolean }) {
  const obj = useStableThreeObject(makeGlow);
  return <primitive object={obj} visible={visible} />;
}

function SceneInner({ mode, mouse }: { mode: 'stars' | 'snow'; mouse: MouseRef }) {
  const dark = mode === 'stars';
  return (
    <>
      <CameraRig mouse={mouse} />
      <StarsParticles visible={dark} />
      <GlowSprite visible={dark} />
      <SnowParticles visible={!dark} mouse={mouse} />
    </>
  );
}

export function HeroScene({ mode }: { mode: 'stars' | 'snow' }) {
  const { mouse, onMove } = useHeroScenePointer();

  return (
    <div
      id="hero-scene"
      aria-hidden
      style={{ position: 'absolute', inset: 0 }}
      onPointerMove={onMove}
    >
      <Canvas
        camera={{ fov: 70, position: [0, 0, 240], near: 0.1, far: 2000 }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100%', height: '100%' }}
        dpr={[1, 2]}
      >
        <SceneInner mode={mode} mouse={mouse} />
      </Canvas>
    </div>
  );
}
