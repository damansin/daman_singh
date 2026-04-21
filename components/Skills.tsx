'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C/C++', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Angular', 'Node.js', 'Django', 'Express', 'FastAPI'],
  },
  {
    category: 'Data & Cloud',
    skills: ['Databricks', 'Apache Spark', 'Kafka', 'Delta Lake', 'AWS', 'Azure', 'Docker', 'Kubernetes'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firestore', 'pgvector', 'ADLS'],
  },
  {
    category: 'AI / ML',
    skills: ['LangChain', 'RAG', 'LLMs', 'OpenAI API', 'TensorFlow', 'Scikit-Learn', 'pandas', 'NumPy'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Git', 'GitHub Actions', 'Linux', 'CI/CD', 'XLR Pipelines', 'ServiceNow'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
            04 / Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            What I work with
          </h2>
          <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>
            Technologies I&apos;ve used in production or built meaningful projects with.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.07}>
              <div
                className="rounded-2xl border p-5 h-full"
                style={{ backgroundColor: 'var(--card)', borderColor: 'var(--card-border)' }}
              >
                <p
                  className="text-xs font-mono tracking-widest uppercase mb-4"
                  style={{ color: 'var(--accent)' }}
                >
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full border transition-colors hover:border-current cursor-default"
                      style={{
                        borderColor: 'var(--card-border)',
                        color: 'var(--foreground)',
                        backgroundColor: 'var(--background)',
                      }}
                    >
                      {skill}
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
