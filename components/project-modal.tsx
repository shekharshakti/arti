"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Github, ExternalLink, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo?: string
  date: string
  details: string
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pink-200/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 20 }}
          className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-auto shadow-lg"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-pink-400 hover:text-pink-600 bg-white/50 hover:bg-white/80 rounded-full"
            onClick={onClose}
          >
            <X size={20} />
          </Button>

          <div className="relative h-64 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover rounded-t-2xl"
            />
          </div>

          <div className="p-6">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div className="flex items-center gap-2">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">
                  {project.title}
                </h2>
                <Heart className="text-pink-400" size={20} fill="currentColor" />
              </div>
              <p className="text-pink-600">{project.date}</p>
            </div>

            <div className="flex gap-3 mb-6">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button className="flex items-center gap-2 bg-pink-400 hover:bg-pink-500 text-white rounded-full">
                  <Github size={18} />
                  GitHub
                </Button>
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Button className="flex items-center gap-2 bg-purple-400 hover:bg-purple-500 text-white rounded-full">
                    <ExternalLink size={18} />
                    Live Demo
                  </Button>
                </a>
              )}
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-pink-700">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} className="bg-purple-100 text-purple-700 border-purple-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-pink-700">Project Details</h3>
              <p className="text-pink-800 leading-relaxed">{project.details}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
