"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Briefcase, GraduationCap, Award, Code, Heart, Star } from "lucide-react"

export default function Resume() {
  const handleDownload = () => {
    // In a real implementation, this would download the actual CV
    alert("In a real implementation, this would download the actual CV file.")
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 text-pink-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">
              My Resume
            </h1>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Star className="text-pink-400" size={28} fill="currentColor" />
            </motion.div>
          </div>
          <Button
            onClick={handleDownload}
            className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <Download size={18} />
            Download CV
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/70 backdrop-blur-sm border-pink-200 p-6 mb-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="text-pink-500" />
                Education
              </h2>

              <div className="space-y-6">
                <div className="border-l-2 border-pink-400 pl-4 py-2">
                  <h3 className="text-xl font-semibold">Bachelor of Technology - Computer Science and Engineering</h3>
                  <p className="text-pink-700">Lovely Professional University, Phagwara, Punjab</p>
                  <p className="text-pink-700">August 2022 - Present</p>
                  <p className="text-pink-800 mt-2">CGPA: 7.31</p>
                </div>

                <div className="border-l-2 border-purple-400 pl-4 py-2">
                  <h3 className="text-xl font-semibold">Intermediate</h3>
                  <p className="text-pink-700">City Central High School, Samastipur, Bihar</p>
                  <p className="text-pink-700">April 2020 - March 2022</p>
                  <p className="text-pink-800 mt-2">Percentage: 75%</p>
                </div>

                <div className="border-l-2 border-pink-400 pl-4 py-2">
                  <h3 className="text-xl font-semibold">Matriculation</h3>
                  <p className="text-pink-700">St. Xavier's High School, Samastipur, Bihar</p>
                  <p className="text-pink-700">April 2016 - March 2018</p>
                  <p className="text-pink-800 mt-2">Percentage: 93.4%</p>
                </div>
              </div>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-pink-200 p-6 mb-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="text-purple-500" />
                Projects
              </h2>

              <div className="space-y-6">
                <div className="border-l-2 border-pink-400 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">Bookstore</h3>
                    <Badge className="bg-pink-100 text-pink-700 border-pink-300">August 2024</Badge>
                  </div>
                  <p className="text-pink-800 mt-2">
                    Built a responsive bookstore website featuring book listings, search functionality, filters, and
                    shopping cart. Implemented state management with React Hooks to ensure dynamic user interactions and
                    optimized UI for a seamless experience across devices.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="outline" className="border-pink-300 text-pink-700">
                      React.js
                    </Badge>
                    <Badge variant="outline" className="border-pink-300 text-pink-700">
                      React Hooks
                    </Badge>
                  </div>
                </div>

                <div className="border-l-2 border-purple-400 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">Tic Tac Toe</h3>
                    <Badge className="bg-purple-100 text-purple-700 border-purple-300">May 2024</Badge>
                  </div>
                  <p className="text-pink-800 mt-2">
                    Created a Tic Tac Toe game in C++ utilizing Data Structures and Algorithms (DSA). Developed
                    efficient game logic, board management, and win-checking mechanisms using arrays and algorithms.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="outline" className="border-purple-300 text-purple-700">
                      C++
                    </Badge>
                    <Badge variant="outline" className="border-purple-300 text-purple-700">
                      DSA
                    </Badge>
                  </div>
                </div>

                <div className="border-l-2 border-pink-400 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">Travel Website</h3>
                    <Badge className="bg-pink-100 text-pink-700 border-pink-300">January 2024</Badge>
                  </div>
                  <p className="text-pink-800 mt-2">
                    Developed a budget-friendly travel website enabling users to search affordable destinations, compare
                    prices, and plan trips. Designed an intuitive user interface and deployed backend services for
                    seamless data management and performance.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="outline" className="border-purple-300 text-purple-700">
                      Node.js
                    </Badge>
                    <Badge variant="outline" className="border-purple-300 text-purple-700">
                      MongoDB
                    </Badge>
                    <Badge variant="outline" className="border-pink-300 text-pink-700">
                      HTML
                    </Badge>
                    <Badge variant="outline" className="border-pink-300 text-pink-700">
                      CSS
                    </Badge>
                    <Badge variant="outline" className="border-pink-300 text-pink-700">
                      JavaScript
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-pink-200 p-6 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-pink-500" />
                Achievements
              </h2>

              <div className="space-y-6">
                <div className="border-l-2 border-pink-400 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">Ranked under 1500 in coding contest</h3>
                    <Badge className="bg-pink-100 text-pink-700 border-pink-300">January 2025</Badge>
                  </div>
                  <p className="text-pink-800 mt-2">In C++ (HackerRank)</p>
                </div>

                <div className="border-l-2 border-purple-400 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">C++ 5-star Badge</h3>
                    <Badge className="bg-purple-100 text-purple-700 border-purple-300">September 2024</Badge>
                  </div>
                  <p className="text-pink-800 mt-2">HackerRank</p>
                </div>

                <div className="border-l-2 border-pink-400 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">NGO Volunteer</h3>
                    <Badge className="bg-pink-100 text-pink-700 border-pink-300">June 2024</Badge>
                  </div>
                  <p className="text-pink-800 mt-2">For Women Empowerment</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white/70 backdrop-blur-sm border-pink-200 p-6 mb-8 rounded-2xl shadow-sm sticky top-24">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Code className="text-pink-500" />
                Skills
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-pink-600">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-pink-100 text-pink-700 border-pink-300">C++</Badge>
                    <Badge className="bg-pink-100 text-pink-700 border-pink-300">Java</Badge>
                    <Badge className="bg-pink-100 text-pink-700 border-pink-300">Python</Badge>
                    <Badge className="bg-pink-100 text-pink-700 border-pink-300">HTML</Badge>
                    <Badge className="bg-pink-100 text-pink-700 border-pink-300">CSS</Badge>
                    <Badge className="bg-pink-100 text-pink-700 border-pink-300">JavaScript</Badge>
                    <Badge className="bg-pink-100 text-pink-700 border-pink-300">C</Badge>
                    <Badge className="bg-pink-100 text-pink-700 border-pink-300">PHP</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-600">Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-100 text-purple-700 border-purple-300">Bootstrap</Badge>
                    <Badge className="bg-purple-100 text-purple-700 border-purple-300">ReactJS</Badge>
                    <Badge className="bg-purple-100 text-purple-700 border-purple-300">NodeJS</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-pink-600">Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-pink-100 text-pink-700 border-pink-300">MongoDB</Badge>
                    <Badge className="bg-pink-100 text-pink-700 border-pink-300">MySQL</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-600">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-100 text-purple-700 border-purple-300">VS Code</Badge>
                    <Badge className="bg-purple-100 text-purple-700 border-purple-300">Canva</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-pink-600">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-pink-100 text-pink-700 border-pink-300">Communication</Badge>
                    <Badge className="bg-pink-100 text-pink-700 border-pink-300">Problem-Solving</Badge>
                    <Badge className="bg-pink-100 text-pink-700 border-pink-300">Team Player</Badge>
                    <Badge className="bg-pink-100 text-pink-700 border-pink-300">Adaptability</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-pink-200 p-6 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Heart className="text-pink-500" fill="currentColor" />
                Certificates
              </h2>

              <div className="space-y-4">
                <div className="p-4 border border-pink-200 rounded-lg hover:border-pink-400 transition-all duration-300 bg-white/50">
                  <h3 className="font-semibold">Building Web Applications in PHP</h3>
                  <p className="text-pink-700 text-sm">Coursera</p>
                  <p className="text-pink-700 text-sm">October 2024</p>
                  <a
                    href="https://www.coursera.org/account/accomplishments/certificate/6PINY2B44L4N"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600 text-sm mt-2 inline-block"
                  >
                    View Certificate
                  </a>
                </div>

                <div className="p-4 border border-purple-200 rounded-lg hover:border-purple-400 transition-all duration-300 bg-white/50">
                  <h3 className="font-semibold">Data Structures and Algorithms - Self-Paced (C++)</h3>
                  <p className="text-purple-700 text-sm">GeeksforGeeks</p>
                  <p className="text-purple-700 text-sm">June 2024</p>
                  <a
                    href="https://tinyurl.com/p66bkcj2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-purple-600 text-sm mt-2 inline-block"
                  >
                    View Certificate
                  </a>
                </div>

                <div className="p-4 border border-pink-200 rounded-lg hover:border-pink-400 transition-all duration-300 bg-white/50">
                  <h3 className="font-semibold">HTML, CSS, and JavaScript for Web Developers</h3>
                  <p className="text-pink-700 text-sm">Coursera</p>
                  <p className="text-pink-700 text-sm">March 2024</p>
                  <a
                    href="https://www.coursera.org/account/accomplishments/verify/CWFM5TMRWPN9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600 text-sm mt-2 inline-block"
                  >
                    View Certificate
                  </a>
                </div>

                <div className="p-4 border border-purple-200 rounded-lg hover:border-purple-400 transition-all duration-300 bg-white/50">
                  <h3 className="font-semibold">Programming In C++: A Hands-on Introduction</h3>
                  <p className="text-purple-700 text-sm">Coursera</p>
                  <p className="text-purple-700 text-sm">January 2024</p>
                  <a
                    href="https://www.coursera.org/account/accomplishments/specialization/GN63FEV7YZXM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-purple-600 text-sm mt-2 inline-block"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
