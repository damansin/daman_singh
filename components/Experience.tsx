
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

const jobs = [
  {
    company: 'AltaML',
    role: 'Software Engineer Intern',
    period: 'Summer 2026',
    location: 'Toronto, ON',
    current: true,
    bullets: [
      'Building AI agents and applied ML solutions at one of Canada\'s leading AI companies.',
    ],
    tags: ['ML', 'AI', 'Agents', 'Python'],
  },
  {
    company: 'TD Securities',
    role: 'Software Engineer Intern',
    period: 'Jan 2026 – Apr 2026',
    location: 'Toronto, ON',
    current: false,
    bullets: [
      'Migrated analytics pipelines from Apache Druid to Databricks Delta Lake across 50+ Kafka topics, cutting extraction time by 70% via distributed Spark workers replacing sequential ZIP processing.',
      'Engineered ADLS-integrated Python extraction pipelines with parameterized Databricks Jobs, enabling parallel ingestion that scales horizontally as new Kafka topics and data sources are added.',
      'Transitioned streaming workloads from Spark Structured Streaming to Declarative Pipelines, reducing pipeline complexity by 30% and improving production reliability.',
      'Delivered 20+ deployments across multi-environment releases via XLR pipelines and configured inbound/outbound networking rules across Databricks, Kafka, and AKS.',
    ],
    tags: ['Databricks', 'Spark', 'Kafka', 'Delta Lake', 'Python', 'AKS', 'Druid', 'ADLS'],
  },
  {
    company: 'OMERS',
    role: 'Software Engineer Intern – ServiceNow',
    period: 'May 2025 – Dec 2025',
    location: 'Toronto, ON',
    current: false,
    bullets: [
      'Automated 30+ enterprise workflows using Business Rules, UI Policies, and JavaScript, reducing manual operations and increasing system throughput.',
      'Migrated 1,000+ monthly alerts from Basic Auth to OAuth 2.0, eliminating credential exposure and securing REST API integrations.',
      'Improved request fulfillment time by 30% by engineering 5+ dynamic catalog forms with REST APIs and adaptive form logic.',
      'Built Azure Forms and Microsoft Fabric integrations to streamline data intake, validation, and transformation workflows.',
    ],
    tags: ['ServiceNow', 'OAuth 2.0', 'REST APIs', 'Azure', 'Microsoft Fabric', 'JavaScript'],
  },
  {
    company: 'Credwise Financial',
    role: 'Software Engineer Intern',
    period: 'Aug 2024 – Dec 2024',
    location: 'Edmonton, AB',
    current: false,
    bullets: [
      'Resolved 25+ production issues across backend data flows and Angular UI rendering, improving platform responsiveness.',
      'Designed and implemented a CI/CD pipeline using GitHub Actions + Firebase Hosting for automated testing and reliable deployments.',
      'Reduced asset retrieval latency from 3s to 1.5s by migrating images to Firestore Storage and restructuring data models, decreasing code complexity by 20%.',
    ],
    tags: ['Angular', 'Firebase', 'CI/CD', 'GitHub Actions', 'TypeScript'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
            02 / Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16" style={{ color: 'var(--foreground)' }}>
            Where I&apos;ve worked
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-px hidden md:block"
            style={{ backgroundColor: 'var(--timeline-line)' }}
          />

          <div className="space-y-14">
            {jobs.map((job, i) => (
              <FadeIn key={job.company} delay={i * 0.1}>
                <div className="md:pl-10 relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-1.5 w-2 h-2 rounded-full -translate-x-[3.5px] hidden md:block"
                    style={{ backgroundColor: job.current ? 'var(--accent)' : 'var(--card-border)' }}
                  />

                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>
                          {job.role}
                        </h3>
                        {job.current && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{ backgroundColor: 'var(--accent-subtle)', color: 'var(--accent)' }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--accent)' }}>
                        {job.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-mono" style={{ color: 'var(--muted)' }}>{job.period}</p>
                      <p className="text-xs" style={{ color: 'var(--muted)' }}>{job.location}</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full border"
                        style={{
                          borderColor: 'var(--card-border)',
                          color: 'var(--muted)',
                          backgroundColor: 'var(--card)',
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
      </div>
    </section>
  );
}
