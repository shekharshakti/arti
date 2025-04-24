"use client"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function Contact() {
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
              Get In Touch
            </h1>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Heart className="text-pink-400" size={28} fill="currentColor" />
            </motion.div>
          </div>
          <p className="text-lg text-pink-800 max-w-3xl">
            I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out
            through the form below or via my contact details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-white/70 backdrop-blur-sm border-pink-200 p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-pink-700">Send Me a Message</h2>
              <ContactForm />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="bg-white/70 backdrop-blur-sm border-pink-200 p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-pink-700">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Mail className="text-pink-500 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-pink-700">Email</h3>
                    <a
                      href="mailto:artithakur3105@gmail.com"
                      className="text-pink-800 hover:text-pink-600 transition-colors"
                    >
                      artithakur3105@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Phone className="text-purple-500 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-pink-700">Phone</h3>
                    <a href="tel:+917209227051" className="text-pink-800 hover:text-purple-600 transition-colors">
                      +91 7209227051
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <MapPin className="text-pink-500 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-pink-700">Location</h3>
                    <p className="text-pink-800">Phagwara, Punjab, India</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-pink-200 p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-pink-700">Connect With Me</h2>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/thakurarti01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-pink-200 rounded-lg hover:border-pink-400 transition-all duration-300 bg-white/50"
                >
                  <Github className="text-pink-500 h-6 w-6" />
                  <span className="text-pink-800">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/artithakur01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-purple-200 rounded-lg hover:border-purple-400 transition-all duration-300 bg-white/50"
                >
                  <Linkedin className="text-purple-500 h-6 w-6" />
                  <span className="text-pink-800">LinkedIn</span>
                </a>
              </div>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-pink-200 p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-pink-700">Availability</h2>
              <p className="text-pink-800 mb-4">
                I'm currently available for freelance work, internships, and full-time positions. Feel free to reach out
                to discuss potential opportunities.
              </p>
              <p className="text-pink-800">
                Response time: <span className="text-green-600">Within 24 hours</span>
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
