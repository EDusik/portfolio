import type { Project } from '@/lib/github';

function esc(s: string) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r?\n/g, ' ');
}

export function ProjectCard({ project, desc, openLabel }: { project: Project; desc: string; openLabel: string }) {
  const d = esc(desc);
  const urlShort = project.url.replace(/^https:\/\//, '');

  return (
    <article className="proj" data-tag={project.tag}>
      <header className="proj-head">
        <div className="left">
          <span className="lang-dot" style={{ background: project.langColor }} />
          <span>{project.name}.ts</span>
        </div>
        <div className="meta">
          <span>★ {project.stars}</span>
          <span>⑂ {project.forks}</span>
        </div>
      </header>
      <div className="proj-body">
        <span className="ln">
          <span className="kw">const</span> <span className="va">project</span> <span className="pu">=</span>{' '}
          <span className="pu">{'{'}</span>
        </span>
        <span className="ln indent">
          <span className="va">name</span>
          <span className="pu">:</span> <span className="st">&quot;{esc(project.name)}&quot;</span>
          <span className="pu">,</span>
        </span>
        <span className="ln indent">
          <span className="va">desc</span>
          <span className="pu">:</span> <span className="st">&quot;{d}&quot;</span>
          <span className="pu">,</span>
        </span>
        <span className="ln indent">
          <span className="va">stack</span>
          <span className="pu">:</span> <span className="pu">[</span>
          {project.stack.map((s, i) => (
            <span key={`${s}-${i}`}>
              {i > 0 ? <span className="pu">, </span> : null}
              <span className="st">&quot;{esc(String(s))}&quot;</span>
            </span>
          ))}
          <span className="pu">]</span>
          <span className="pu">,</span>
        </span>
        <span className="ln indent">
          <span className="va">lang</span>
          <span className="pu">:</span> <span className="st">&quot;{esc(project.lang)}&quot;</span>
          <span className="pu">,</span>
        </span>
        <span className="ln indent">
          <span className="va">url</span>
          <span className="pu">:</span> <span className="st">&quot;{esc(urlShort)}&quot;</span>
        </span>
        <span className="ln">
          <span className="pu">{'}'}</span>
          <span className="pu">;</span>
        </span>
      </div>
      <footer className="proj-foot">
        <span>{project.lang}</span>
        <a className="open" href={project.url} target="_blank" rel="noopener noreferrer">
          <span>{openLabel}</span>
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>
      </footer>
    </article>
  );
}
