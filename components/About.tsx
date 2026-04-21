'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Award } from 'lucide-react';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  { label: 'Years of Experience', value: '3+' },
  { label: 'Internships', value: '4' },
  { label: 'AWS Certified', value: '✓' },
  { label: 'Dean\'s Honor Roll', value: '✓' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
            01 / About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12" style={{ color: 'var(--foreground)' }}>
            The story so far
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <FadeIn delay={0.1}>
              <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                I&apos;m a 4th year Computing Science student at the University of Alberta.
                I like building things that work at scale and hold up in production.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                That obsession has pulled me toward distributed systems, data engineering, cloud infrastructure, and applied ML —
                the intersection where the hardest problems live. I want to build things that move millions
                of events reliably, models that reason over messy real-world data, and infrastructure
                that scales without someone manually babysitting it.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                This summer I&apos;m joining{' '}
                <span style={{ color: 'var(--foreground)', fontWeight: 500 }}>AltaML as a Software Engineer Intern </span> to go deeper on applied AI.
                On the side, I&apos;m building{' '}
                <span style={{ color: 'var(--foreground)', fontWeight: 500 }}>FinSight Auditor</span> —
                because I got curious about what happens when you point an LLM at a balance sheet and actually make it useful.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-6">
            <FadeIn delay={0.15}>
              <div
                className="rounded-2xl p-6 border space-y-4"
                style={{ backgroundColor: 'var(--card)', borderColor: 'var(--card-border)' }}
              >
                <div className="flex items-center gap-3" style={{ color: 'var(--foreground)' }}>
                  <GraduationCap size={18} style={{ color: 'var(--accent)' }} />
                  <div>
                    <p className="text-sm font-medium">University of Alberta</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>BSc Computing Science · Jan 2023 – May 2027</p>
                  </div>
                </div>
                <div className="flex items-center gap-3" style={{ color: 'var(--foreground)' }}>
                  <Award size={18} style={{ color: 'var(--accent)' }} />
                  <div>
                    <p className="text-sm font-medium">AWS Certified Solutions Architect</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>Associate · Issued Apr 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3" style={{ color: 'var(--foreground)' }}>
                  <MapPin size={18} style={{ color: 'var(--accent)' }} />
                  <div>
                    <p className="text-sm font-medium">Toronto, ON</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>Open to remote &amp; on-site opportunities</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="grid grid-cols-2 gap-3">
                {stats.map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-xl p-4 border text-center"
                    style={{ backgroundColor: 'var(--card)', borderColor: 'var(--card-border)' }}
                  >
                    <p className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>{value}</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>{label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
