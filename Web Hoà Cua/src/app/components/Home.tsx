import { motion } from "motion/react";
import { Link } from "react-router";
import { projects } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

export function Home() {
  return (
    <div className="max-w-[1800px] mx-auto px-6 md:px-12">
      <motion.section
        className="mb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl">
          <motion.h2
            className="mb-6 tracking-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.1
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Visual storyteller crafting memorable brand experiences
          </motion.h2>
          <motion.p
            className="opacity-70 max-w-2xl"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              lineHeight: 1.7
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Multidisciplinary designer specializing in branding, editorial design, and art direction.
            Based between Paris and London.
          </motion.p>
        </div>
      </motion.section>

      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/project/${project.id}`} className="group block">
        <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-secondary">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <ImageWithFallback
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500"
          />

          <motion.div
            className="absolute top-6 right-6 w-12 h-12 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-5 h-5" />
          </motion.div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3
              className="tracking-tight group-hover:text-accent transition-colors duration-300"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 600
              }}
            >
              {project.title}
            </h3>
            <span
              className="opacity-40"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
            >
              {project.year}
            </span>
          </div>

          <p
            className="opacity-60"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {project.category}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary/50 rounded-full"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
