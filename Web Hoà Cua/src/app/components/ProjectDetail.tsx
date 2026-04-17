import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { projects } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft } from "lucide-react";

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 600
            }}
          >
            Project not found
          </h2>
          <Link
            to="/"
            className="inline-flex items-center gap-2 hover:text-accent transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1800px] mx-auto px-6 md:px-12 pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-12 group hover:text-accent transition-colors"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8">
            <motion.h1
              className="mb-4 tracking-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1.1
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="opacity-60 mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.25rem',
                lineHeight: 1.6
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {project.category}
            </motion.p>
          </div>

          <motion.div
            className="lg:col-span-4 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <h4
                className="mb-2 opacity-40 uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}
              >
                Year
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem' }}>
                {project.year}
              </p>
            </div>

            <div>
              <h4
                className="mb-2 opacity-40 uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}
              >
                Role
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem' }}>
                {project.role}
              </p>
            </div>

            <div>
              <h4
                className="mb-3 opacity-40 uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}
              >
                Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary rounded-full"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p
            className="opacity-80 leading-relaxed"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              lineHeight: 1.8
            }}
          >
            {project.description}
          </p>
        </motion.div>

        <div className="space-y-8">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              className="relative w-full overflow-hidden bg-secondary"
              style={{
                aspectRatio: index === 0 ? '16/9' : index % 3 === 1 ? '4/5' : '3/2'
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
            >
              <ImageWithFallback
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-24 pt-12 border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3
            className="mb-8"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem',
              fontWeight: 600
            }}
          >
            More projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/project/${relatedProject.id}`}
                  className="group"
                >
                  <div className="relative aspect-[4/5] mb-4 overflow-hidden bg-secondary">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageWithFallback
                        src={relatedProject.images[0]}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                  <h4
                    className="group-hover:text-accent transition-colors"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 600
                    }}
                  >
                    {relatedProject.title}
                  </h4>
                  <p
                    className="opacity-60 mt-1"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                  >
                    {relatedProject.category}
                  </p>
                </Link>
              ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
