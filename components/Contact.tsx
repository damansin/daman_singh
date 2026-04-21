'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

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

const links = [
  {
    icon: Mail,
    label: 'damanbatra15@gmail.com',
    href: 'mailto:damanbatra15@gmail.com',
    description: 'Best for opportunities & collabs',
  },
  {
    icon: LinkedinIcon,
    label: 'linkedin.com/in/daman-singh',
    href: 'https://www.linkedin.com/in/daman-singh-8575a8238/',
    description: 'Let\'s connect professionally',
  },
  {
    icon: GithubIcon,
    label: 'github.com/damansin',
    href: 'https://github.com/damansin',
    description: 'See what I\'m building',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
            05 / Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Let&apos;s build something
          </h2>
          <p className="text-base leading-relaxed max-w-xl mx-auto mb-12" style={{ color: 'var(--muted)' }}>
            I&apos;m actively looking for SWE intern roles in ML, AI, distributed systems, and data engineering.
            Whether you have an opportunity, a question, or just want to talk tech — my inbox is open.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="space-y-3 mb-12">
            {links.map(({ icon: Icon, label, href, description }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border group transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: 'var(--card)', borderColor: 'var(--card-border)' }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: 'var(--accent-subtle)' }}
                  >
                    <Icon size={16} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{label}</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{description}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--accent)' }}
                />
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <a
            href="mailto:damanbatra15@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-white transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: 'var(--accent)' }}
          >
            <Mail size={16} />
            Say hello
          </a>
        </FadeIn>
      </div>

      {/* Footer */}
      <div
        className="mt-24 pt-8 border-t text-center"
        style={{ borderColor: 'var(--card-border)' }}
      >
        <p className="text-xs" style={{ color: 'var(--muted)' }}>
          Designed &amp; built by Daman Singh Batra · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
