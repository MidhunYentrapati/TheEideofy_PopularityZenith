"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your newsletter service
    setIsSubmitted(true)
  }

  return (
    <div className="space-y-2">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex h-10 w-full rounded-md border border-primary-foreground/20 bg-transparent px-3 py-2 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 pixelated-input"
          />
          <Button type="submit" className="pixelated-button-inverse">
            Subscribe
          </Button>
        </form>
      ) : (
        <p className="text-sm pixel-text">Thanks for subscribing! We'll be in touch soon.</p>
      )}
    </div>
  )
}
