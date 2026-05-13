'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef, type MutableRefObject, type PointerEvent, type RefObject } from 'react';
import * as THREE from 'three';

export type MouseRef = MutableRefObject<{ x: number; y: number; tx: number; ty: number }>;

export function useHeroScenePointer() {
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    mouse.current.tx = (px - 0.5) * 2;
    mouse.current.ty = (py - 0.5) * 2;
  };

  return { mouse, onMove };
}

export function useCameraRig(mouse: MouseRef) {
  const { camera } = useThree();

  useFrame(() => {
    mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.04;
    mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.04;
    camera.position.x = mouse.current.x * 30;
    camera.position.y = -mouse.current.y * 18;
    camera.lookAt(0, 0, 0);
  });
}

export function useStableThreeObject<T>(factory: () => T) {
  return useMemo(factory, [factory]);
}

export function usePointsRef() {
  return useRef<THREE.Points>(null);
}

export function useStarsAnimation(ref: RefObject<THREE.Points | null>) {
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const mesh = ref.current;
    if (!mesh?.visible) return;
    mesh.rotation.z = time * 0.01;
    mesh.rotation.y = time * 0.02;
    const mat = mesh.material as THREE.PointsMaterial;
    mat.opacity = 0.85 + Math.sin(time * 0.8) * 0.08;
    mat.transparent = true;
  });
}

export function useSnowAnimation(
  ref: RefObject<THREE.Points | null>,
  mouse: MouseRef,
  snowCount: number,
) {
  useFrame((state) => {
    const mesh = ref.current;
    if (!mesh?.visible) return;
    const attr = mesh.geometry.attributes.position;
    if (!attr) return;
    const pos = attr.array as Float32Array;
    const vel = mesh.geometry.userData.vel as Float32Array | undefined;
    if (!vel) return;
    const time = state.clock.elapsedTime;
    const dx = mouse.current.x * 0.3;
    for (let i = 0; i < snowCount; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;
      const phase = vel[iz]! + time;
      pos[ix]! += Math.sin(phase) * 0.25 + vel[ix]! + dx;
      pos[iy]! += vel[iy]!;
      if (pos[iy]! < -320) {
        pos[ix]! = (Math.random() - 0.5) * 900;
        pos[iy]! = 320 + Math.random() * 100;
      }
      if (pos[ix]! > 480) pos[ix]! = -480;
      if (pos[ix]! < -480) pos[ix]! = 480;
    }
    attr.needsUpdate = true;
  });
}
