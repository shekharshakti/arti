"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Heart } from "lucide-react"
import ProjectModal from "@/components/project-modal"

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

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Bookstore",
      description:
        "A responsive bookstore website featuring book listings, search functionality, filters, and shopping cart.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React.js", "React Hooks"],
      github: "https://github.com/thakurarti01/Bookstore",
      date: "August 2024",
      details:
        "Built a responsive bookstore website featuring book listings, search functionality, filters, and shopping cart. Implemented state management with React Hooks to ensure dynamic user interactions and optimized UI for a seamless experience across devices.",
    },
    {
      id: 2,
      title: "Tic Tac Toe",
      description: "A Tic Tac Toe game in C++ utilizing Data Structures and Algorithms (DSA).",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["C++", "DSA"],
      github: "https://github.com/thakurarti01/Tic_Tac_Toe",
      date: "May 2024",
      details:
        "Created a Tic Tac Toe game in C++ utilizing Data Structures and Algorithms (DSA). Developed efficient game logic, board management, and win-checking mechanisms using arrays and algorithms.",
    },
    {
      id: 3,
      title: "Travel Website",
      description:
        "A budget-friendly travel website enabling users to search affordable destinations, compare prices, and plan trips.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Node.js", "MongoDB", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/thakurarti01/WanderWallet-Public",
      date: "January 2024",
      details:
        "Developed a budget-friendly travel website enabling users to search affordable destinations, compare prices, and plan trips. Designed an intuitive user interface and deployed backend services for seamless data management and performance.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 text-pink-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">
              My Portfolio
            </h1>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Heart className="text-pink-400" size={28} fill="currentColor" />
            </motion.div>
          </div>
          <p className="text-lg text-pink-800 max-w-3xl">
            Explore my projects showcasing my skills in web development, programming, and problem-solving. Each project
            represents my passion for creating efficient and user-friendly applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="bg-white/70 backdrop-blur-sm border-pink-200 overflow-hidden h-full flex flex-col hover:border-pink-400 transition-all duration-300 rounded-2xl shadow-sm hover:shadow-md">
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/40 z-10" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{project.title}</span>
                    <Badge variant="outline" className="bg-pink-100/80 text-pink-700 border-pink-300">
                      {project.date}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-pink-800 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} className="bg-purple-100 text-purple-700 border-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    className="border-pink-300 text-pink-600 hover:text-pink-700 hover:bg-pink-50 rounded-full"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </Button>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="ghost" className="text-pink-400 hover:text-pink-600 rounded-full">
                        <Github size={20} />
                      </Button>
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="text-purple-400 hover:text-purple-600 rounded-full"
                        >
                          <ExternalLink size={20} />
                        </Button>
                      </a>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </main>
  )
}
