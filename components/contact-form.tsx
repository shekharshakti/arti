"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send, Loader2, Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-pink-700">
            Your Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="bg-white/50 border-pink-200 text-pink-900 focus:ring-pink-400 focus:border-pink-400 rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-pink-700">
            Your Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="bg-white/50 border-pink-200 text-pink-900 focus:ring-pink-400 focus:border-pink-400 rounded-lg"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-pink-700">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="How can I help you?"
          required
          className="bg-white/50 border-pink-200 text-pink-900 focus:ring-pink-400 focus:border-pink-400 rounded-lg"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-pink-700">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here..."
          required
          className="min-h-[150px] bg-white/50 border-pink-200 text-pink-900 focus:ring-pink-400 focus:border-pink-400 rounded-lg"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white py-3 rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message <Heart className="h-4 w-4 ml-1" fill="currentColor" />
          </>
        )}
      </Button>
    </form>
  )
}
