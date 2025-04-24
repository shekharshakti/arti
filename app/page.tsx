"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 text-pink-900 overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {i % 3 === 0 ? (
              <Sparkles size={i % 2 === 0 ? 16 : 24} />
            ) : (
              <div className={`w-2 h-2 rounded-full bg-${i % 2 === 0 ? "pink" : "purple"}-200`} />
            )}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side content */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">
                Arti Thakur
              </h1>
              <motion.div
                className="absolute -right-10 -top-10 text-pink-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles size={32} />
              </motion.div>
            </div>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-purple-700">Full Stack Developer</h2>
            <p className="text-lg md:text-xl mb-10 text-pink-800 max-w-2xl">
              Creating innovative web experiences with modern technologies. Specialized in React, Node.js, and
              interactive web applications.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/about">
                <Button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-6 py-3 rounded-full flex items-center gap-2 text-lg shadow-md hover:shadow-lg transition-all">
                  Explore My Work
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-pink-300 text-pink-600 hover:text-pink-700 hover:bg-pink-50 px-6 py-3 rounded-full text-lg"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/thakurarti01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/artithakur01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a href="mailto:artithakur3105@gmail.com" className="text-pink-400 hover:text-pink-600 transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:+917209227051" className="text-purple-400 hover:text-purple-600 transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </motion.div>

          {/* Right side profile picture
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Arti Thakur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-full shadow-md">
                <Sparkles className="text-pink-400" size={24} />
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </main>
  )
}
