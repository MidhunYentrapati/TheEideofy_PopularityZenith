import { cn } from "@/lib/utils"

interface PixelatedLogoProps {
  className?: string
}

export default function PixelatedLogo({ className }: PixelatedLogoProps) {
  return (
    <div className={cn("pixelated-logo", className)}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="pixelated">
        <rect x="2" y="2" width="4" height="4" className="fill-current" />
        <rect x="6" y="2" width="4" height="4" className="fill-current" />
        <rect x="10" y="2" width="4" height="4" className="fill-current" />
        <rect x="14" y="2" width="4" height="4" className="fill-current" />
        <rect x="18" y="2" width="4" height="4" className="fill-current" />
        <rect x="2" y="6" width="4" height="4" className="fill-current" />
        <rect x="18" y="6" width="4" height="4" className="fill-current" />
        <rect x="2" y="10" width="4" height="4" className="fill-current" />
        <rect x="6" y="10" width="4" height="4" className="fill-current" />
        <rect x="10" y="10" width="4" height="4" className="fill-current" />
        <rect x="14" y="10" width="4" height="4" className="fill-current" />
        <rect x="18" y="10" width="4" height="4" className="fill-current" />
        <rect x="2" y="14" width="4" height="4" className="fill-current" />
        <rect x="18" y="14" width="4" height="4" className="fill-current" />
        <rect x="2" y="18" width="4" height="4" className="fill-current" />
        <rect x="6" y="18" width="4" height="4" className="fill-current" />
        <rect x="10" y="18" width="4" height="4" className="fill-current" />
        <rect x="14" y="18" width="4" height="4" className="fill-current" />
        <rect x="18" y="18" width="4" height="4" className="fill-current" />
      </svg>
    </div>
  )
}
