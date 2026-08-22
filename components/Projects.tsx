'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Construction } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

const projects = [
  {
    title: 'Tearsheet',
    status: 'in-progress',
    description:
      'Multi-agent due-diligence system on LangGraph: a stateful, cyclic graph orchestrating retriever, analyst, verifier, and synthesis agents with conditional routing and automated re-retrieval when claims fail validation.',
    detail:
      'Implements RAG over SEC filings, earnings data, and news with pgvector semantic search, grounding every generated claim against source documents for citation-level traceability. Tracing and evaluating agent runs with LangSmith.',
    tags: ['Python', 'LangGraph', 'LangSmith', 'RAG', 'Claude API', 'pgvector', 'FastAPI'],
    github: 'https://github.com/damansin',
    demo: null,
    highlight: true,
  },
  {
    title: 'NEXUS',
    status: 'complete',
    description:
      'Distributed, federated social platform enabling real-time messaging and content exchange across 5+ independently hosted nodes — designed from the ground up for decentralization.',
    detail:
      'Achieved 99% message delivery reliability under simulated network partitions via resilient routing and inbox delivery logic. Built a modular React frontend with structured state management, improving session synchronization accuracy by 40% across devices.',
    tags: ['Python', 'Django', 'Docker', 'React', 'Distributed Systems', 'Federation'],
    github: 'https://github.com/damansin',
    demo: null,
    highlight: false,
  },
  {
    title: 'LP Prospect Engine',
    status: 'complete',
    description:
      'Automated pipeline for sourcing, scoring, and enriching limited partner prospect profiles — cutting manual investor research time by eliminating unstructured data bottlenecks.',
    detail:
      'Built intelligent filtering and ranking logic to surface high-signal prospects from large unstructured datasets, enabling targeted outreach at scale.',
    tags: ['Python', 'Data Pipelines', 'NLP', 'Automation'],
    github: 'https://github.com/damansin',
    demo: null,
    highlight: false,
  },
  {
    title: 'Athena',
    status: 'complete',
    description:
      'Android event organizer app with attendee selection via a lottery system, serving multi-organizer workflows with real-time Firestore sync across all participants.',
    detail:
      'Full Firebase backend with Firestorage for media handling and a comprehensive JUnit test suite ensuring reliability across edge cases in the lottery logic.',
    tags: ['Java', 'Android', 'Firestore', 'Firebase', 'JUnit'],
    github: 'https://github.com/damansin/Athena',
    demo: null,
    highlight: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
            03 / Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Things I&apos;ve built
          </h2>
          <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>
            Side projects where I explore ideas outside of work constraints.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <div
                className={`rounded-2xl border p-6 flex flex-col h-full transition-all hover:-translate-y-1 hover:shadow-lg group ${
                  project.highlight ? 'md:col-span-2' : ''
                }`}
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: project.highlight ? 'var(--accent)' : 'var(--card-border)',
                  boxShadow: project.highlight
                    ? '0 0 0 1px color-mix(in srgb, var(--accent) 20%, transparent)'
                    : undefined,
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-semibold" style={{ color: 'var(--foreground)' }}>
                      {project.title}
                    </h3>
                    {project.status === 'in-progress' && (
                      <span
                        className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: 'var(--accent-subtle)', color: 'var(--accent)' }}
                      >
                        <Construction size={10} /> In Progress
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-40 hover:opacity-100 transition-opacity"
                        style={{ color: 'var(--foreground)' }}
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-40 hover:opacity-100 transition-opacity"
                        style={{ color: 'var(--foreground)' }}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--muted)' }}>
                  {project.description}
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)', opacity: 0.8 }}>
                  {project.detail}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full border"
                      style={{
                        borderColor: 'var(--card-border)',
                        color: 'var(--muted)',
                        backgroundColor: 'var(--background)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
