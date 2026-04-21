'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import Image from 'next/image';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, color-mix(in srgb, var(--accent) 12%, transparent), transparent)',
        }}
      />

      <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center gap-8 relative z-10">
        {/* Avatar */}
        <motion.div {...fadeUp(0.1)} className="relative">
          <div
            className="w-32 h-32 rounded-full overflow-hidden"
            style={{ outline: '2px solid var(--accent)', outlineOffset: '4px' }}
          >
            <Image
              src="/avatar.jpeg"
              alt="Daman Singh Batra"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          {/* Status dot */}
          <span
            className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 bg-emerald-400"
            style={{ borderColor: 'var(--background)' }}
            title="Open to opportunities"
          />
        </motion.div>

        {/* Greeting */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-sm font-mono tracking-widest uppercase"
          style={{ color: 'var(--accent)' }}
        >
          Hey, I&apos;m Daman 👋
        </motion.p>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.3)}
          className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight"
          style={{ color: 'var(--foreground)' }}
        >
          Building systems that{' '}
          <span
            className="relative inline-block"
            style={{ color: 'var(--accent)' }}
          >
            scale
          </span>
          ,<br className="hidden sm:block" /> data that{' '}
          <span style={{ color: 'var(--accent)' }}>speaks</span>.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-lg max-w-xl leading-relaxed"
          style={{ color: 'var(--muted)' }}
        >
          Software Engineer at UAlberta (CS) · AWS Certified · Previously at{' '}
          <strong style={{ color: 'var(--foreground)' }}>TD Securities</strong>,{' '}
          <strong style={{ color: 'var(--foreground)' }}>OMERS</strong> &amp;{' '}
          <strong style={{ color: 'var(--foreground)' }}>Credwise</strong>. Incoming at{' '}
          <strong style={{ color: 'var(--foreground)' }}>AltaML</strong>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 justify-center">
          <a
            href="#contact"
            className="px-6 py-3 rounded-full text-sm font-medium text-white transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: 'var(--accent)' }}
          >
            Get in touch
          </a>
          <a
            href="/Daman_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-sm font-medium border transition-all hover:scale-105 active:scale-95"
            style={{
              borderColor: 'var(--card-border)',
              color: 'var(--foreground)',
            }}
          >
            View Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.6)} className="flex gap-5">
          {[
            { href: 'https://github.com/damansin', icon: GithubIcon, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/daman-singh-8575a8238/', icon: LinkedinIcon, label: 'LinkedIn' },
            { href: 'mailto:damanbatra15@gmail.com', icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full border transition-all hover:scale-110 hover:border-current"
              style={{
                borderColor: 'var(--card-border)',
                color: 'var(--muted)',
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 flex flex-col items-center gap-1"
        style={{ color: 'var(--muted)' }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
