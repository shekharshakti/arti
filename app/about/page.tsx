"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Code, Database, Layout, Wrench, Heart, Star, Sparkles } from "lucide-react"
import SkillsModel from "@/components/skills-model"

export default function About() {
  const skills = {
    languages: ["C++", "Java", "Python", "HTML", "CSS", "JavaScript", "C", "PHP"],
    frameworks: ["Bootstrap", "ReactJS", "NodeJS"],
    databases: ["MongoDB", "MySQL"],
    tools: ["VS Code", "Canva"],
    soft: ["Communication", "Problem-Solving", "Team Player", "Adaptability"],
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 text-pink-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">
              About Me
            </h1>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="text-pink-400" size={28} />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg text-pink-800 mb-6">
                I'm Arti Thakur, a passionate Full Stack Developer with expertise in modern web technologies. I
                specialize in creating responsive, user-friendly applications using React.js, Node.js, and various other
                frameworks and languages.
              </p>
              <p className="text-lg text-pink-800 mb-6">
                Currently pursuing my Bachelor of Technology in Computer Science and Engineering at Lovely Professional
                University, I'm constantly expanding my knowledge and skills in software development.
              </p>
              <p className="text-lg text-pink-800 mb-8">
                I enjoy solving complex problems and building applications that provide value to users. My goal is to
                create clean, efficient, and scalable code that delivers exceptional user experiences.
              </p>
              <Link href="/portfolio">
                <Button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-all">
                  View My Work
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
            <div className="h-[400px] md:h-auto">
              <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} color="#ff80bf" />
                <SkillsModel />
                <Environment preset="sunset" />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              </Canvas>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Star className="text-pink-400" fill="currentColor" />
            My Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-white/70 backdrop-blur-sm border-pink-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="text-pink-500" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <Badge key={skill} className="bg-pink-100 hover:bg-pink-200 text-pink-700 border-pink-300">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-purple-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Layout className="text-purple-500" />
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <Badge key={skill} className="bg-purple-100 hover:bg-purple-200 text-purple-700 border-purple-300">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-pink-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Database className="text-pink-500" />
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <Badge key={skill} className="bg-pink-100 hover:bg-pink-200 text-pink-700 border-pink-300">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-purple-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Wrench className="text-purple-500" />
                Tools & Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.tools.map((skill) => (
                  <Badge key={skill} className="bg-purple-100 hover:bg-purple-200 text-purple-700 border-purple-300">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <Badge key={skill} className="bg-pink-100 hover:bg-pink-200 text-pink-700 border-pink-300">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Heart className="text-pink-500" fill="currentColor" />
              Education
            </h2>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-pink-400 py-2">
                <div className="absolute w-4 h-4 bg-pink-400 rounded-full -left-[9px] top-4"></div>
                <h3 className="text-xl font-semibold">Bachelor of Technology - Computer Science and Engineering</h3>
                <p className="text-pink-700">Lovely Professional University, Phagwara, Punjab</p>
                <p className="text-pink-700">August 2022 - Present</p>
                <p className="text-pink-800 mt-2">CGPA: 7.31</p>
              </div>

              <div className="relative pl-8 border-l-2 border-purple-400 py-2">
                <div className="absolute w-4 h-4 bg-purple-400 rounded-full -left-[9px] top-4"></div>
                <h3 className="text-xl font-semibold">Intermediate</h3>
                <p className="text-pink-700">City Central High School, Samastipur, Bihar</p>
                <p className="text-pink-700">April 2020 - March 2022</p>
                <p className="text-pink-800 mt-2">Percentage: 75%</p>
              </div>

              <div className="relative pl-8 border-l-2 border-pink-400 py-2">
                <div className="absolute w-4 h-4 bg-pink-400 rounded-full -left-[9px] top-4"></div>
                <h3 className="text-xl font-semibold">Matriculation</h3>
                <p className="text-pink-700">St. Xavier's High School, Samastipur, Bihar</p>
                <p className="text-pink-700">April 2016 - March 2018</p>
                <p className="text-pink-800 mt-2">Percentage: 93.4%</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Star className="text-purple-500" fill="currentColor" />
              Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/70 backdrop-blur-sm border-pink-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold mb-2">Ranked under 1500</h3>
                <p className="text-pink-800">In C++ (HackerRank) coding contest</p>
                <p className="text-pink-600 mt-2">January 2025</p>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-purple-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold mb-2">C++ 5-star Badge</h3>
                <p className="text-pink-800">HackerRank</p>
                <p className="text-purple-600 mt-2">September 2024</p>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-pink-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold mb-2">NGO Volunteer</h3>
                <p className="text-pink-800">For Women Empowerment</p>
                <p className="text-pink-600 mt-2">June 2024</p>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
