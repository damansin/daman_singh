
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
    company: 'University of Alberta',
    role: 'Research Assistant',
    period: 'Sept 2026 – Present',
    location: 'Edmonton, AB',
    current: true,
    bullets: [
      'Developing drift-robust anomaly detection for enterprise security logs using GNNs on provenance graphs, with game-theoretic adversarial modeling and MITRE ATT&CK-fine-tuned LLMs.',
    ],
    tags: ['GNNs', 'LLMs', 'Security', 'Research'],
  },
  {
    company: 'AltaML',
    role: 'Software Engineer Intern',
    period: 'May 2026 – Aug 2026',
    location: 'Toronto, ON',
    current: false,
    bullets: [
      'Built organization-level multi-tenancy for a production Azure OpenAI RAG assistant serving government clients, isolating SQL, blob storage, and Azure AI Search indexes per tenant with cross-tenant IDOR protection to cut client provisioning from days to under an hour and per-client infrastructure cost by 30%.',
      'Shipped GraphRAG as a third production retrieval mode in a LangGraph workflow: schema-guided LLM entity/relation extraction over a 268-document policy corpus into a Neo4j graph of 22K entities, 37K relations and 6.1K chunks with chunk-level provenance.',
      'Ran LLM-as-judge evals in Arize (correctness, faithfulness, retrieval relevance) comparing GraphRAG vs. vector vs. agentic on a 194-question set; a systematic tuning sweep with semantic reranker raised answer-correctness 58.8% to 75.3%.',
      'Diagnosed p95 latency of 73.5s from 4,889 answer traces: isolated a post-RAG LLM judge discarding completed answers and re-running agentic search on 57% of queries; cut the agent\'s iteration cap 50 to 20 via a 6-config eval sweep, dropping agentic latency 28%.',
    ],
    tags: ['LangGraph', 'RAG', 'Azure OpenAI', 'Neo4j', 'Arize', 'Python'],
  },
  {
    company: 'TD Securities',
    role: 'Software Engineer Intern',
    period: 'Jan 2026 – Apr 2026',
    location: 'Toronto, ON',
    current: false,
    bullets: [
      'Built real-time streaming infrastructure across 50+ Kafka topics: migrated workloads from Spark Structured Streaming to Spark Declarative Pipelines, eliminating manual state and partition management.',
      'Spearheaded migration of analytics pipelines from Apache Druid to Databricks Delta Lake, cutting segment extraction time by 70% by replacing sequential ZIP processing with distributed Spark jobs.',
      'Engineered parameterized, ADLS-integrated Databricks Jobs for parallel ingestion across high-volume tables; shipped 20+ multi-environment releases via XLR and configured networking across Databricks, Kafka, and AKS.',
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
      'Strengthened platform security by migrating 1,000+ monthly alert integrations from Basic Auth to OAuth 2.0, eliminating credential exposure across REST API integrations.',
      'Automated 20+ enterprise workflows on ServiceNow (Business Rules, UI Policies, JavaScript) and built 5+ dynamic catalog forms with REST integrations and adaptive logic, improving request fulfillment time by 30%.',
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
