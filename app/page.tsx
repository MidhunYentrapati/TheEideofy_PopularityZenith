"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Facebook, Instagram, Moon, Sun, Twitter, Youtube } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
          isScrolled ? "bg-background shadow-md py-2" : "bg-transparent py-4",
        )}
      >
        <div className="container flex items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#B22222]">EIDEOFY</span>

          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="#what-we-do" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              What we do
            </Link>
            <Link href="#platforms" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Platforms
            </Link>
            <Link href="#why-us" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Why us
            </Link>
            <div className="relative">
              <button
                className="flex items-center gap-1 text-sm font-medium hover:text-muted-foreground transition-colors"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                About <ChevronDown className="h-4 w-4" />
              </button>
              {isAboutOpen && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-background shadow-lg rounded-md overflow-hidden border">
                  <Link href="/blogs" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                    Blogs
                  </Link>
                  <Link href="/careers" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                    Careers
                  </Link>
                  <Link href="/about-us" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                    About us
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contact" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Contact us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 border-b border-border">
          <div className="container px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-[#B22222]">EIDEOFY</h1>
              <p className="text-xl md:text-2xl text-muted-foreground">A Popularity Zenith Dominion</p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Amplify Your Digital Presence</h2>
                <p className="text-muted-foreground text-lg">
                  Eideofy is a next-generation social media strategy and growth agency, designed to elevate influencers
                  and creators to new heights in the digital realm. We transform ordinary content into extraordinary
                  experiences that captivate audiences and drive meaningful engagement.
                </p>
                <p className="text-muted-foreground">
                  In a world where digital noise is constant, we help you cut through the clutter with precision-crafted
                  strategies that amplify your unique voice and vision. Our data-driven approach ensures every post,
                  every campaign, and every interaction works toward building your digital empire.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Link href="#book-session">
                    <Button size="lg" className="px-8">
                      Book a Session
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#what-we-do">
                    <Button size="lg" variant="outline" className="px-8">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="what-we-do" className="w-full py-16 md:py-24 border-b border-border">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What We Do</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We transform your digital presence through strategic planning and execution, turning followers into
                  fans and engagement into empire-building.
                </p>
              </div>
            </div>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                          fill="currentColor"
                        />
                        <path
                          d="M12 5C12.5523 5 13 5.44772 13 6V8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8V6C11 5.44772 11.4477 5 12 5Z"
                          fill="currentColor"
                        />
                        <path
                          d="M12 15C12.5523 15 13 15.4477 13 16V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V16C11 15.4477 11.4477 15 12 15Z"
                          fill="currentColor"
                        />
                        <path
                          d="M19 12C19 12.5523 18.5523 13 18 13H16C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11H18C18.5523 11 19 11.4477 19 12Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9 12C9 12.5523 8.55228 13 8 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H8C8.55228 11 9 11.4477 9 12Z"
                          fill="currentColor"
                        />
                        <path
                          d="M16.9497 7.05025C17.3403 7.44077 17.3403 8.07394 16.9497 8.46446L15.5355 9.87868C15.145 10.2692 14.5118 10.2692 14.1213 9.87868C13.7308 9.48816 13.7308 8.85499 14.1213 8.46447L15.5355 7.05025C15.926 6.65973 16.5592 6.65973 16.9497 7.05025Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.87868 14.1213C10.2692 14.5118 10.2692 15.145 9.87868 15.5355L8.46446 16.9497C8.07394 17.3403 7.44077 17.3403 7.05025 16.9497C6.65973 16.5592 6.65973 15.926 7.05025 15.5355L8.46447 14.1213C8.85499 13.7308 9.48816 13.7308 9.87868 14.1213Z"
                          fill="currentColor"
                        />
                        <path
                          d="M16.9497 16.9497C16.5592 17.3403 15.926 17.3403 15.5355 16.9497L14.1213 15.5355C13.7308 15.145 13.7308 14.5118 14.1213 14.1213C14.5118 13.7308 15.145 13.7308 15.5355 14.1213L16.9497 15.5355C17.3403 15.926 17.3403 16.5592 16.9497 16.9497Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.87868 9.87868C9.48816 10.2692 8.85499 10.2692 8.46447 9.87868L7.05025 8.46446C6.65973 8.07394 6.65973 7.44077 7.05025 7.05025C7.44077 6.65973 8.07394 6.65973 8.46446 7.05025L9.87868 8.46447C10.2692 8.85499 10.2692 9.48816 9.87868 9.87868Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Visibility Amplification</h3>
                      <p className="text-muted-foreground">
                        We implement cutting-edge strategies to dramatically increase your visibility across platforms,
                        utilizing algorithm-optimized content scheduling, strategic hashtag research, and engagement
                        pattern analysis to ensure your content reaches the maximum relevant audience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16 4H8C7.44772 4 7 4.44772 7 5V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V5C17 4.44772 16.5523 4 16 4Z"
                          fill="currentColor"
                        />
                        <path
                          d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Brand Uniqueness Development</h3>
                      <p className="text-muted-foreground">
                        We craft distinctive brand identities that stand out in saturated markets. Through comprehensive
                        competitor analysis, audience psychographic profiling, and creative direction, we identify and
                        amplify your unique value proposition, ensuring your digital presence is unmistakably yours.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16 4L8 12L16 20"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Growth Acceleration Systems</h3>
                      <p className="text-muted-foreground">
                        Our proprietary growth frameworks combine proven tactics with innovative approaches to rapidly
                        scale your digital presence. We implement multi-channel amplification strategies, cross-platform
                        content optimization, and strategic collaboration networks to create exponential rather than
                        linear growth patterns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 6L20 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.5 6H5.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.5 12H5.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.5 18H5.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 12L20 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 18L20 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Personalized Roadmapping</h3>
                      <p className="text-muted-foreground">
                        We develop custom strategic roadmaps tailored to your specific goals, audience, and platform
                        focus. These comprehensive plans include milestone targeting, content calendars, growth
                        projections, and adaptable strategies that evolve with your changing needs and platform
                        algorithm updates.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4 7H20"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 12H20"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 17H20"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Content Curation Excellence</h3>
                      <p className="text-muted-foreground">
                        Our content specialists craft platform-optimized material that resonates with your target
                        audience while maintaining your authentic voice. We analyze engagement metrics, audience
                        response patterns, and trending formats to create content that drives meaningful interaction and
                        community building.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 2V6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 2V6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 10H21"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Strategic Calendar Management</h3>
                      <p className="text-muted-foreground">
                        We implement data-driven posting schedules optimized for maximum engagement across all your
                        platforms. Our calendar management includes trend forecasting, seasonal content planning,
                        platform-specific timing optimization, and coordinated multi-platform campaigns to maintain
                        consistent presence while avoiding content fatigue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-16 md:py-24 border-b border-border bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A comprehensive ecosystem for influencers and creators aiming to dominate the social space.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row border rounded-lg overflow-hidden"
              >
                <div className="md:w-1/3 p-6 flex flex-col justify-center items-center bg-primary text-primary-foreground">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-4"
                  >
                    <path
                      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15V3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="text-xl font-bold text-center">Content Creation</h3>
                </div>
                <div className="md:w-2/3 p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Our content creation service goes beyond just producing material—we craft strategic narratives that
                    build your brand story across platforms. Our approach includes:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">■</span>
                      <span>Platform-specific content optimization for maximum engagement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">■</span>
                      <span>Trend analysis and implementation to keep your content relevant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">■</span>
                      <span>Brand voice consistency across all materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">■</span>
                      <span>Engagement-optimized formats based on audience response data</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row border rounded-lg overflow-hidden"
              >
                <div className="md:w-1/3 p-6 flex flex-col justify-center items-center bg-primary text-primary-foreground">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-4"
                  >
                    <path
                      d="M18 20V10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 20V4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 20V14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="text-xl font-bold text-center">Analytics & Strategy</h3>
                </div>
                <div className="md:w-2/3 p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Our data-driven approach transforms raw metrics into actionable growth strategies. We provide:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">■</span>
                      <span>Comprehensive performance analytics across all platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">■</span>
                      <span>Audience segmentation and behavior analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">■</span>
                      <span>Competitor benchmarking and opportunity identification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">■</span>
                      <span>ROI tracking for sponsored content and partnerships</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row border rounded-lg overflow-hidden"
              >
                <div className="md:w-1/3 p-6 flex flex-col justify-center items-center bg-primary text-primary-foreground">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-4"
                  >
                    <path
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="text-xl font-bold text-center">Community Engagement</h3>
                </div>
                <div className="md:w-2/3 p-6 space-y-4">
                  <p className="text-muted-foreground">
                    We build vibrant, loyal communities around your brand through strategic engagement:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">■</span>
                      <span>Proactive community management and moderation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">■</span>
                      <span>Engagement-driving content formats and interactive campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">■</span>
                      <span>Community-building events and exclusive content strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">■</span>
                      <span>Audience feedback collection and implementation systems</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row border rounded-lg overflow-hidden"
              >
                <div className="md:w-1/3 p-6 flex flex-col justify-center items-center bg-primary text-primary-foreground">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-4"
                  >
                    <path
                      d="M22 12H18L15 21L9 3L6 12H2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="text-xl font-bold text-center">SEO Optimization</h3>
                </div>
                <div className="md:w-2/3 p-6 space-y-4">
                  <p className="text-muted-foreground">
                    We enhance your discoverability through comprehensive SEO strategies:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">■</span>
                      <span>Platform-specific keyword research and implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">■</span>
                      <span>Metadata optimization for all content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">■</span>
                      <span>Cross-platform searchability enhancement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">■</span>
                      <span>Trending topic integration for maximum visibility</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section id="platforms" className="w-full py-16 md:py-24 border-b border-border">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Platforms We Master</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We specialize in optimizing your presence across these key platforms, each with its unique algorithm,
                  audience behavior, and content requirements.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <motion.div
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 bg-background border rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-16 h-16 mb-4 text-primary">
                  <Instagram className="w-full h-full" />
                </div>
                <h3 className="text-lg font-bold mb-2">Instagram</h3>
                <p className="text-sm text-muted-foreground">Visual storytelling and community building</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 bg-background border rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-16 h-16 mb-4 text-primary">
                  <Facebook className="w-full h-full" />
                </div>
                <h3 className="text-lg font-bold mb-2">Facebook</h3>
                <p className="text-sm text-muted-foreground">Broad audience reach and engagement</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 bg-background border rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-16 h-16 mb-4 text-primary">
                  <Youtube className="w-full h-full" />
                </div>
                <h3 className="text-lg font-bold mb-2">YouTube</h3>
                <p className="text-sm text-muted-foreground">Long-form video content and monetization</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 bg-background border rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-16 h-16 mb-4 text-primary">
                  <Twitter className="w-full h-full" />
                </div>
                <h3 className="text-lg font-bold mb-2">X (Twitter)</h3>
                <p className="text-sm text-muted-foreground">Real-time engagement and trending topics</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 bg-background border rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-16 h-16 mb-4 text-primary">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 9H2V21H6V9Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">Professional networking and thought leadership</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 bg-background border rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-16 h-16 mb-4 text-primary">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 2L11 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Telegram</h3>
                <p className="text-sm text-muted-foreground">Community building and direct communication</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 bg-background border rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-16 h-16 mb-4 text-primary">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 21L3 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 14L3 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 10L3 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 18L13 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 6L13 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">TikTok</h3>
                <p className="text-sm text-muted-foreground">Short-form video and viral content</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 bg-background border rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-16 h-16 mb-4 text-primary">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Direct messaging and exclusive content</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="w-full py-16 md:py-24 border-b border-border bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Why Choose Eideofy</h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-primary pl-6 text-left"
                >
                  <h3 className="text-xl font-bold">Expertise & Experience</h3>
                  <p className="text-muted-foreground mt-2">
                    Our team brings years of specialized experience in social media growth and strategy across multiple
                    platforms. We've worked with creators at every level, from emerging talents to established
                    influencers with millions of followers, giving us unparalleled insight into what works at each stage
                    of growth.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-primary pl-6 text-left"
                >
                  <h3 className="text-xl font-bold">Data-Driven Approach</h3>
                  <p className="text-muted-foreground mt-2">
                    We base all our strategies on comprehensive analytics and industry insights, ensuring measurable
                    results. Our proprietary tracking systems monitor over 150 different metrics across platforms to
                    identify patterns, opportunities, and optimization points that others miss, allowing for
                    precision-targeted growth strategies.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-primary pl-6 text-left"
                >
                  <h3 className="text-xl font-bold">Tailored Solutions</h3>
                  <p className="text-muted-foreground mt-2">
                    Every strategy is custom-built for your unique brand, audience, and goals—no cookie-cutter
                    approaches. We begin with comprehensive brand analysis, audience profiling, and competitive
                    landscape mapping to create strategies that are as unique as your content, ensuring authentic growth
                    that aligns with your vision.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-primary pl-6 text-left"
                >
                  <h3 className="text-xl font-bold">Holistic Ecosystem</h3>
                  <p className="text-muted-foreground mt-2">
                    We provide end-to-end solutions that cover every aspect of your digital presence, creating a
                    cohesive strategy. From content creation to community management, analytics to monetization
                    strategies, we ensure all elements of your digital presence work together harmoniously to amplify
                    your impact and streamline your workflow.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-primary pl-6 text-left"
                >
                  <h3 className="text-xl font-bold">Proven Results</h3>
                  <p className="text-muted-foreground mt-2">
                    Our track record speaks for itself—we've helped creators achieve significant growth and
                    monetization. Our clients have seen average follower growth rates 3-5x industry standards,
                    engagement increases of up to 400%, and monetization opportunities that have transformed passion
                    projects into thriving businesses.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Book a Session Section */}
        <section id="book-session" className="w-full py-16 md:py-24 border-b border-border">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Amplify Your Influence?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Book a consultation with our team to discuss how Eideofy can help you reach new heights in your
                    digital journey. Our strategy sessions are designed to provide immediate value, whether you decide
                    to work with us or not.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    During your session, we'll analyze your current digital presence, identify key growth opportunities,
                    and outline a customized strategy framework tailored to your specific goals and audience. You'll
                    walk away with actionable insights and a clear vision of what's possible for your digital future.
                  </p>
                  <p className="text-muted-foreground">
                    Whether you're just starting out or looking to scale your existing presence, our tailored strategies
                    can help you achieve your goals with precision and authenticity.
                  </p>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto w-full max-w-md">
                <form className="grid gap-4 sm:gap-6 p-6 border rounded-lg bg-background shadow-sm">
                  <h3 className="text-xl font-bold">Schedule Your Strategy Session</h3>
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="platform"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Primary Platform
                    </label>
                    <select
                      id="platform"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select your primary platform</option>
                      <option value="instagram">Instagram</option>
                      <option value="facebook">Facebook</option>
                      <option value="youtube">YouTube</option>
                      <option value="twitter">X (Twitter)</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your goals and challenges"
                    />
                  </div>
                  <Button type="submit" size="lg">
                    Book Your Session
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-primary text-primary-foreground">
        <div className="container flex flex-col gap-8 py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">EIDEOFY</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Next-generation social media strategy and growth agency for influencers and creators.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about-us"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/editors-community"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Join Editors Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Subscribe</h3>
              <p className="text-sm text-primary-foreground/80">
                Join our newsletter to get the latest insights and trends in social media strategy.
              </p>
              <div className="space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="flex h-10 w-full rounded-md border border-primary-foreground/20 bg-transparent px-3 py-2 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button type="submit" className="shrink-0">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} Eideofy. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/terms"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
