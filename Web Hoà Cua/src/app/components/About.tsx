import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <div className="max-w-[1800px] mx-auto px-6 md:px-12 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="mb-8 tracking-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.1
            }}
          >
            Bridging creativity and strategy
          </h1>

          <div
            className="space-y-6 opacity-80"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              lineHeight: 1.8
            }}
          >
            <p>
              I'm Johan Papin, a multidisciplinary designer with over a decade of experience
              crafting visual identities, editorial designs, and brand experiences that resonate
              with audiences and stand the test of time.
            </p>

            <p>
              My work spans branding, art direction, photography, and motion design. I believe
              great design is invisible—it solves problems elegantly while creating emotional
              connections that feel natural and inevitable.
            </p>

            <p>
              Based between Paris and London, I collaborate with brands, studios, and creative
              agencies worldwide. My approach combines rigorous strategic thinking with bold
              creative experimentation.
            </p>

            <p>
              When I'm not designing, you'll find me exploring contemporary art galleries,
              experimenting with analog photography, or seeking inspiration in architecture
              and urban spaces.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3
              className="mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 600
              }}
            >
              Select Clients
            </h3>

            <div
              className="grid grid-cols-2 gap-x-8 gap-y-3"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <p className="opacity-60">Hermès</p>
              <p className="opacity-60">Apple</p>
              <p className="opacity-60">Nike</p>
              <p className="opacity-60">The New York Times</p>
              <p className="opacity-60">Spotify</p>
              <p className="opacity-60">Airbnb</p>
              <p className="opacity-60">Vogue</p>
              <p className="opacity-60">Google</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3
              className="mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 600
              }}
            >
              Recognition
            </h3>

            <div className="space-y-4" style={{ fontFamily: 'var(--font-body)' }}>
              <div className="flex justify-between items-baseline">
                <p>D&AD Award – Graphic Design</p>
                <p className="opacity-40">2024</p>
              </div>
              <div className="flex justify-between items-baseline">
                <p>Communication Arts Excellence</p>
                <p className="opacity-40">2024</p>
              </div>
              <div className="flex justify-between items-baseline">
                <p>Type Directors Club Certificate</p>
                <p className="opacity-40">2023</p>
              </div>
              <div className="flex justify-between items-baseline">
                <p>ADC Young Guns</p>
                <p className="opacity-40">2023</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="sticky top-32">
            <div className="aspect-[3/4] bg-secondary overflow-hidden mb-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Johan Papin"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h4
                  className="mb-3 opacity-40 uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}
                >
                  Get in touch
                </h4>
                <a
                  href="mailto:hello@johanpapin.com"
                  className="hover:text-accent transition-colors"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem' }}
                >
                  hello@johanpapin.com
                </a>
              </div>

              <div>
                <h4
                  className="mb-3 opacity-40 uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}
                >
                  Follow
                </h4>
                <div className="flex flex-col gap-2" style={{ fontFamily: 'var(--font-body)' }}>
                  <a href="#" className="hover:text-accent transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-accent transition-colors">
                    Behance
                  </a>
                  <a href="#" className="hover:text-accent transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-accent transition-colors">
                    Dribbble
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p
                  className="opacity-60"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                >
                  Currently based in Paris & London
                  <br />
                  Available for select projects
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
