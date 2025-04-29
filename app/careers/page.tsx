import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Youtube } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">EIDEOFY</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/#what-we-do" className="text-sm font-medium hover:text-gray-600 transition-colors">
              What we do
            </Link>
            <Link href="/#platforms" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Platforms
            </Link>
            <Link href="/#why-us" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Why us
            </Link>
            <Link href="/about-us" className="text-sm font-medium hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Contact us
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Team</h1>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be part of a dynamic team shaping the future of digital influence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-12 mt-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Why Work With Us</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col space-y-3 border p-6 rounded-lg">
                    <h3 className="text-xl font-bold">Innovation-Driven</h3>
                    <p className="text-gray-600">
                      Work at the cutting edge of social media strategy and digital marketing, constantly exploring new
                      approaches and technologies.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-3 border p-6 rounded-lg">
                    <h3 className="text-xl font-bold">Growth Opportunities</h3>
                    <p className="text-gray-600">
                      Develop your skills and advance your career in a supportive environment that values continuous
                      learning and professional development.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-3 border p-6 rounded-lg">
                    <h3 className="text-xl font-bold">Collaborative Culture</h3>
                    <p className="text-gray-600">
                      Join a diverse team of creative thinkers and strategic minds working together to deliver
                      exceptional results for our clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Open Positions</h2>
                <div className="grid gap-6">
                  <div className="border rounded-lg p-6 space-y-4">
                    <h3 className="text-xl font-bold">Social Media Strategist</h3>
                    <p className="text-gray-600">
                      Develop and implement comprehensive social media strategies for our clients, analyzing performance
                      metrics and optimizing campaigns for maximum impact.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Full-time
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Remote
                      </span>
                    </div>
                    <Button className="bg-black text-white hover:bg-gray-800">Apply Now</Button>
                  </div>
                  <div className="border rounded-lg p-6 space-y-4">
                    <h3 className="text-xl font-bold">Content Creator</h3>
                    <p className="text-gray-600">
                      Produce high-quality, engaging content across various platforms, collaborating with our strategy
                      team to align content with client objectives and audience preferences.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Full-time
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Hybrid
                      </span>
                    </div>
                    <Button className="bg-black text-white hover:bg-gray-800">Apply Now</Button>
                  </div>
                  <div className="border rounded-lg p-6 space-y-4">
                    <h3 className="text-xl font-bold">Data Analyst</h3>
                    <p className="text-gray-600">
                      Analyze social media performance data, identify trends and insights, and develop actionable
                      recommendations to optimize client strategies and campaigns.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Full-time
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Remote
                      </span>
                    </div>
                    <Button className="bg-black text-white hover:bg-gray-800">Apply Now</Button>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Application Process</h2>
                <div className="grid gap-6 md:grid-cols-4">
                  <div className="flex flex-col items-center space-y-3 p-6 border rounded-lg relative">
                    <div className="absolute -top-5 -left-5 rounded-full bg-black text-white w-10 h-10 flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <h3 className="font-bold text-center">Submit Application</h3>
                    <p className="text-sm text-center text-gray-600">
                      Complete our online application form with your resume and portfolio.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-3 p-6 border rounded-lg relative">
                    <div className="absolute -top-5 -left-5 rounded-full bg-black text-white w-10 h-10 flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <h3 className="font-bold text-center">Initial Screening</h3>
                    <p className="text-sm text-center text-gray-600">
                      Our team reviews applications and conducts initial phone interviews.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-3 p-6 border rounded-lg relative">
                    <div className="absolute -top-5 -left-5 rounded-full bg-black text-white w-10 h-10 flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <h3 className="font-bold text-center">Skills Assessment</h3>
                    <p className="text-sm text-center text-gray-600">
                      Complete a practical assignment relevant to the role you're applying for.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-3 p-6 border rounded-lg relative">
                    <div className="absolute -top-5 -left-5 rounded-full bg-black text-white w-10 h-10 flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <h3 className="font-bold text-center">Final Interview</h3>
                    <p className="text-sm text-center text-gray-600">
                      Meet with our team to discuss your experience, skills, and fit with our culture.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 text-center">
                <h2 className="text-2xl font-bold">Don't See a Perfect Fit?</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  We're always looking for talented individuals to join our team. Send us your resume and tell us how
                  you can contribute to Eideofy's mission.
                </p>
                <Button className="bg-black text-white hover:bg-gray-800">Send Open Application</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-black text-white">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">EIDEOFY</span>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link href="/#what-we-do" className="text-sm font-medium hover:text-gray-300 transition-colors">
                What we do
              </Link>
              <Link href="/#platforms" className="text-sm font-medium hover:text-gray-300 transition-colors">
                Platforms
              </Link>
              <Link href="/#why-us" className="text-sm font-medium hover:text-gray-300 transition-colors">
                Why us
              </Link>
              <Link href="/about-us" className="text-sm font-medium hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-gray-300 transition-colors">
                Contact us
              </Link>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Eideofy. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
