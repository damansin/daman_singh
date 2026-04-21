'use client';

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun, Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md border-b'
          : ''
      }`}
      style={{
        backgroundColor: scrolled ? 'color-mix(in srgb, var(--background) 85%, transparent)' : 'transparent',
        borderColor: scrolled ? 'var(--card-border)' : 'transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-widest uppercase opacity-80 hover:opacity-100 transition-opacity"
          style={{ color: 'var(--accent)' }}
        >
          DS
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors hover:opacity-100 opacity-70"
              style={{ color: 'var(--foreground)' }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="p-2 rounded-full transition-colors hover:opacity-80"
            style={{ color: 'var(--foreground)' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggle} className="p-2" style={{ color: 'var(--foreground)' }}>
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button onClick={() => setMenuOpen(o => !o)} style={{ color: 'var(--foreground)' }}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ backgroundColor: 'var(--background)', borderColor: 'var(--card-border)' }}
        >
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              style={{ color: 'var(--foreground)' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
