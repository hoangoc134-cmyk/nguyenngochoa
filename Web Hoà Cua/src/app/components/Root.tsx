import { Outlet, Link, useLocation } from "react-router";
import { motion } from "motion/react";

export function Root() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-[1800px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <Link to="/" className="group">
            <h1
              className="tracking-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 700
              }}
            >
              Johan Papin
            </h1>
          </Link>

          <div className="flex gap-8 items-center">
            <Link
              to="/"
              className="relative overflow-hidden group"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-accent">
                Work
              </span>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-[1px] bg-accent origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link
              to="/about"
              className="relative overflow-hidden group"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-accent">
                About
              </span>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-[1px] bg-accent origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        <Outlet />
      </main>

      <footer className="mt-32 border-t border-border">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <p
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 600
                }}
              >
                Let's create something together
              </p>
              <p className="text-muted-foreground" style={{ fontFamily: 'var(--font-body)' }}>
                Available for select projects
              </p>
            </div>

            <div className="flex gap-12">
              <div>
                <h4 className="mb-3 opacity-60" style={{ fontFamily: 'var(--font-body)' }}>Connect</h4>
                <div className="flex flex-col gap-2" style={{ fontFamily: 'var(--font-body)' }}>
                  <a href="#" className="hover:text-accent transition-colors">Instagram</a>
                  <a href="#" className="hover:text-accent transition-colors">Behance</a>
                  <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
                </div>
              </div>
              <div>
                <h4 className="mb-3 opacity-60" style={{ fontFamily: 'var(--font-body)' }}>Contact</h4>
                <div className="flex flex-col gap-2" style={{ fontFamily: 'var(--font-body)' }}>
                  <a href="mailto:hello@johanpapin.com" className="hover:text-accent transition-colors">
                    hello@johanpapin.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
            <p className="opacity-40" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}>
              © 2026 Johan Papin
            </p>
            <p className="opacity-40" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}>
              Design & Creative Direction
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
