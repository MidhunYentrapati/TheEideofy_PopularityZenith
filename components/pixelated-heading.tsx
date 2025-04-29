import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface PixelatedHeadingProps {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: ReactNode
  className?: string
}

export default function PixelatedHeading({ level, children, className }: PixelatedHeadingProps) {
  const HeadingTag = level as keyof JSX.IntrinsicElements

  return <HeadingTag className={cn("pixel-font", className)}>{children}</HeadingTag>
}
