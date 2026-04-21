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
    title: 'FinSight Auditor',
    status: 'in-progress',
    description:
      'An AI-powered financial audit platform that processes GL exports, payroll, and bank statements to surface anomalies and compliance risks. Combines LLM reasoning, rule-based checks, and statistical outlier analysis to generate high-precision risk scores.',
    detail:
      'Built end-to-end data pipelines for ingestion, S3 storage, cleaning, and vector embedding generation — enabling fast semantic search via pgvector.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'LangChain', 'Next.js', 'AWS', 'OpenAI'],
    github: 'https://github.com/damansin',
    demo: null,
    highlight: true,
  },
  {
    title: 'LP Prospect Engine',
    status: 'complete',
    description:
      'A data-driven pipeline for identifying and qualifying limited partner prospects. Automates sourcing, scoring, and enrichment of investor profiles for targeted outreach.',
    detail:
      'Built intelligent filtering and ranking logic to surface high-signal prospects from large datasets, reducing manual research time significantly.',
    tags: ['Python', 'Data Pipelines', 'NLP', 'Automation'],
    github: 'https://github.com/damansin',
    demo: null,
    highlight: false,
  },
  {
    title: 'Athena',
    status: 'complete',
    description:
      'An Android event organizer app featuring attendee selection via a lottery system. Built with a full Firebase backend and comprehensive unit-test coverage for reliability.',
    detail:
      'Forked from CMPUT301F24 project. Designed for scalable event management with real-time Firestore sync and Firestorage for media handling.',
    tags: ['Java', 'Android', 'Firestore', 'Firebase', 'JUnit'],
    github: 'https://github.com/damansin/Athena',
    demo: null,
    highlight: false,
  },
  {
    title: 'Movie Recommender System',
    status: 'complete',
    description:
      'A content-based and collaborative filtering recommender system that suggests movies based on user preferences and viewing history.',
    detail:
      'Implemented TF-IDF vectorization for content similarity and matrix factorization for collaborative filtering, served via a lightweight Python API.',
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'ML', 'Recommender Systems'],
    github: 'https://github.com/damansin',
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
