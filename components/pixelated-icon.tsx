import { cn } from "@/lib/utils"

interface PixelatedIconProps {
  name: string
  className?: string
}

export default function PixelatedIcon({ name, className }: PixelatedIconProps) {
  // Different icon patterns based on name
  const getIconPattern = () => {
    switch (name) {
      case "visibility":
        return (
          <>
            <rect x="4" y="4" width="4" height="4" className="fill-current" />
            <rect x="8" y="4" width="4" height="4" className="fill-current" />
            <rect x="12" y="4" width="4" height="4" className="fill-current" />
            <rect x="16" y="4" width="4" height="4" className="fill-current" />
            <rect x="4" y="8" width="4" height="4" className="fill-current" />
            <rect x="16" y="8" width="4" height="4" className="fill-current" />
            <rect x="4" y="12" width="4" height="4" className="fill-current" />
            <rect x="8" y="12" width="4" height="4" className="fill-current" />
            <rect x="12" y="12" width="4" height="4" className="fill-current" />
            <rect x="16" y="12" width="4" height="4" className="fill-current" />
            <rect x="4" y="16" width="4" height="4" className="fill-current" />
            <rect x="16" y="16" width="4" height="4" className="fill-current" />
          </>
        )
      case "unique":
        return (
          <>
            <rect x="4" y="4" width="4" height="4" className="fill-current" />
            <rect x="16" y="4" width="4" height="4" className="fill-current" />
            <rect x="4" y="8" width="4" height="4" className="fill-current" />
            <rect x="16" y="8" width="4" height="4" className="fill-current" />
            <rect x="4" y="12" width="4" height="4" className="fill-current" />
            <rect x="8" y="12" width="4" height="4" className="fill-current" />
            <rect x="12" y="12" width="4" height="4" className="fill-current" />
            <rect x="16" y="12" width="4" height="4" className="fill-current" />
            <rect x="8" y="16" width="4" height="4" className="fill-current" />
            <rect x="12" y="16" width="4" height="4" className="fill-current" />
          </>
        )
      case "growth":
        return (
          <>
            <rect x="4" y="16" width="4" height="4" className="fill-current" />
            <rect x="8" y="12" width="4" height="4" className="fill-current" />
            <rect x="8" y="16" width="4" height="4" className="fill-current" />
            <rect x="12" y="8" width="4" height="4" className="fill-current" />
            <rect x="12" y="12" width="4" height="4" className="fill-current" />
            <rect x="12" y="16" width="4" height="4" className="fill-current" />
            <rect x="16" y="4" width="4" height="4" className="fill-current" />
            <rect x="16" y="8" width="4" height="4" className="fill-current" />
            <rect x="16" y="12" width="4" height="4" className="fill-current" />
            <rect x="16" y="16" width="4" height="4" className="fill-current" />
          </>
        )
      case "roadmap":
        return (
          <>
            <rect x="4" y="4" width="4" height="4" className="fill-current" />
            <rect x="8" y="4" width="4" height="4" className="fill-current" />
            <rect x="12" y="4" width="4" height="4" className="fill-current" />
            <rect x="16" y="4" width="4" height="4" className="fill-current" />
            <rect x="16" y="8" width="4" height="4" className="fill-current" />
            <rect x="4" y="12" width="4" height="4" className="fill-current" />
            <rect x="8" y="12" width="4" height="4" className="fill-current" />
            <rect x="12" y="12" width="4" height="4" className="fill-current" />
            <rect x="16" y="12" width="4" height="4" className="fill-current" />
            <rect x="4" y="16" width="4" height="4" className="fill-current" />
          </>
        )
      case "content":
        return (
          <>
            <rect x="4" y="4" width="4" height="4" className="fill-current" />
            <rect x="8" y="4" width="4" height="4" className="fill-current" />
            <rect x="12" y="4" width="4" height="4" className="fill-current" />
            <rect x="4" y="8" width="4" height="4" className="fill-current" />
            <rect x="4" y="12" width="4" height="4" className="fill-current" />
            <rect x="8" y="12" width="4" height="4" className="fill-current" />
            <rect x="12" y="12" width="4" height="4" className="fill-current" />
            <rect x="4" y="16" width="4" height="4" className="fill-current" />
            <rect x="8" y="16" width="4" height="4" className="fill-current" />
            <rect x="12" y="16" width="4" height="4" className="fill-current" />
          </>
        )
      case "calendar":
        return (
          <>
            <rect x="4" y="4" width="4" height="4" className="fill-current" />
            <rect x="8" y="4" width="4" height="4" className="fill-current" />
            <rect x="12" y="4" width="4" height="4" className="fill-current" />
            <rect x="16" y="4" width="4" height="4" className="fill-current" />
            <rect x="4" y="8" width="4" height="4" className="fill-current" />
            <rect x="16" y="8" width="4" height="4" className="fill-current" />
            <rect x="4" y="12" width="4" height="4" className="fill-current" />
            <rect x="8" y="12" width="4" height="4" className="fill-current" />
            <rect x="16" y="12" width="4" height="4" className="fill-current" />
            <rect x="4" y="16" width="4" height="4" className="fill-current" />
            <rect x="8" y="16" width="4" height="4" className="fill-current" />
            <rect x="12" y="16" width="4" height="4" className="fill-current" />
            <rect x="16" y="16" width="4" height="4" className="fill-current" />
          </>
        )
      case "content-creation":
        return (
          <>
            <rect x="4" y="4" width="4" height="4" className="fill-current" />
            <rect x="8" y="4" width="4" height="4" className="fill-current" />
            <rect x="12" y="4" width="4" height="4" className="fill-current" />
            <rect x="16" y="4" width="4" height="4" className="fill-current" />
            <rect x="4" y="8" width="4" height="4" className="fill-current" />
            <rect x="4" y="12" width="4" height="4" className="fill-current" />
            <rect x="8" y="12" width="4" height="4" className="fill-current" />
            <rect x="12" y="12" width="4" height="4" className="fill-current" />
            <rect x="16" y="12" width="4" height="4" className="fill-current" />
            <rect x="4" y="16" width="4" height="4" className="fill-current" />
          </>
        )
      case "analytics":
        return (
          <>
            <rect x="4" y="16" width="4" height="4" className="fill-current" />
            <rect x="8" y="12" width="4" height="4" className="fill-current" />
            <rect x="8" y="16" width="4" height="4" className="fill-current" />
            <rect x="12" y="8" width="4" height="4" className="fill-current" />
            <rect x="12" y="12" width="4" height="4" className="fill-current" />
            <rect x="12" y="16" width="4" height="4" className="fill-current" />
            <rect x="16" y="4" width="4" height="4" className="fill-current" />
            <rect x="16" y="8" width="4" height="4" className="fill-current" />
            <rect x="16" y="12" width="4" height="4" className="fill-current" />
            <rect x="16" y="12" width="4" height="4" className="fill-current" />
            <rect x="16" y="16" width="4" height="4" className="fill-current" />
          </>
        )
      case "community":
        return (
          <>
            <rect x="4" y="8" width="4" height="4" className="fill-current" />
            <rect x="8" y="4" width="4" height="4" className="fill-current" />
            <rect x="12" y="4" width="4" height="4" className="fill-current" />
            <rect x="16" y="8" width="4" height="4" className="fill-current" />
            <rect x="4" y="12" width="4" height="4" className="fill-current" />
            <rect x="8" y="16" width="4" height="4" className="fill-current" />
            <rect x="12" y="16" width="4" height="4" className="fill-current" />
            <rect x="16" y="12" width="4" height="4" className="fill-current" />
          </>
        )
      case "seo":
        return (
          <>
            <rect x="4" y="4" width="4" height="4" className="fill-current" />
            <rect x="8" y="4" width="4" height="4" className="fill-current" />
            <rect x="12" y="4" width="4" height="4" className="fill-current" />
            <rect x="4" y="8" width="4" height="4" className="fill-current" />
            <rect x="4" y="12" width="4" height="4" className="fill-current" />
            <rect x="8" y="12" width="4" height="4" className="fill-current" />
            <rect x="12" y="12" width="4" height="4" className="fill-current" />
            <rect x="4" y="16" width="4" height="4" className="fill-current" />
            <rect x="8" y="16" width="4" height="4" className="fill-current" />
            <rect x="12" y="16" width="4" height="4" className="fill-current" />
            <rect x="16" y="16" width="4" height="4" className="fill-current" />
          </>
        )
      case "instagram":
        return (
          <>
            <rect x="4" y="4" width="4" height="4" className="fill-current" />
            <rect x="8" y="4" width="4" height="4" className="fill-current" />
            <rect x="12" y="4" width="4" height="4" className="fill-current" />
            <rect x="16" y="4" width="4" height="4" className="fill-current" />
            <rect x="4" y="8" width="4" height="4" className="fill-current" />
            <rect x="16" y="8" width="4" height="4" className="fill-current" />
            <rect x="4" y="12" width="4" height="4" className="fill-current" />
            <rect x="12" y="8" width="4" height="4" className="fill-current" />
            <rect x="16" y="12" width="4" height="4" className="fill-current" />
            <rect x="4" y="16" width="4" height="4" className="fill-current" />
            <rect x="8" y="16" width="4" height="4" className="fill-current" />
            <rect x="12" y="16" width="4" height="4" className="fill-current" />
            <rect x="16" y="16" width="4" height="4" className="fill-current" />
          </>
        )
      case "facebook":
        return (
          <>
            <rect x="4" y="4" width="4" height="4" className="fill-current" />
            <rect x="8" y="4" width="4" height="4" className="fill-current" />
            <rect x="12" y="4" width="4" height="4" className="fill-current" />
            <rect x="4" y="8" width="4" height="4" className="fill-current" />
            <rect x="4" y="12" width="4" height="4" className="fill-current" />
            <rect x="8" y="12" width="4" height="4" className="fill-current" />
            <rect x="12" y="12" width="4" height="4" className="fill-current" />
            <rect x="4" y="16" width="4" height="4" className="fill-current" />
          </>
        )
      case "youtube":
        return (
          <>
            <rect x="4" y="4" width="4" height="4" className="fill-current" />
            <rect x="16" y="4" width="4" height="4" className="fill-current" />
            <rect x="4" y="8" width="4" height="4" className="fill-current" />
            <rect x="8" y="8" width="4" height="4" className="fill-current" />
            <rect x="12" y="8" width="4" height="4" className="fill-current" />
            <rect x="16" y="8" width="4" height="4" className="fill-current" />
            <rect x="4" y="12" width="4" height="4" className="fill-current" />
            <rect x="16" y="12" width="4" height="4" className="fill-current" />
            <rect x="4" y="16" width="4" height="4" className="fill-current" />
            <rect x="8" y="16" width="4" height="4" className="fill-current" />
            <rect x="12" y="16" width="4" height="4" className="fill-current" />
            <rect x="16" y="16" width="4" height="4" className="fill-current" />
          </>
        )
      case "twitter":
        return (
          <>
            <rect x="8" y="4" width="4" height="4" className="fill-current" />
            <rect x="12" y="4" width="4" height="4" className="fill-current" />
            <rect x="8" y="8" width="4" height="4" className="fill-current" />
            <rect x="12" y="8" width="4" height="4" className="fill-current" />
            <rect x="4" y="12" width="4" height="4" className="fill-current" />
            <rect x="8" y="12" width="4" height="4" className="fill-current" />
            <rect x="12" y="12" width="4" height="4" className="fill-current" />
            <rect x="16" y="12" width="4" height="4" className="fill-current" />
            <rect x="8" y="16" width="4" height="4" className="fill-current" />
            <rect x="12" y="16" width="4" height="4" className="fill-current" />
          </>
        )
      case "linkedin":
        return (
          <>
            <rect x="4" y="4" width="4" height="4" className="fill-current" />
            <rect x="4" y="8" width="4" height="4" className="fill-current" />
            <rect x="4" y="12" width="4" height="4" className="fill-current" />
            <rect x="4" y="16" width="4" height="4" className="fill-current" />
            <rect x="8" y="16" width="4" height="4" className="fill-current" />
            <rect x="12" y="16" width="4" height="4" className="fill-current" />
            <rect x="16" y="16" width="4" height="4" className="fill-current" />
            <rect x="16" y="4" width="4" height="4" className="fill-current" />
            <rect x="16" y="8" width="4" height="4" className="fill-current" />
            <rect x="16" y="12" width="4" height="4" className="fill-current" />
          </>
        )
      case "telegram":
        return (
          <>
            <rect x="4" y="4" width="4" height="4" className="fill-current" />
            <rect x="8" y="4" width="4" height="4" className="fill-current" />
            <rect x="12" y="4" width="4" height="4" className="fill-current" />
            <rect x="16" y="4" width="4" height="4" className="fill-current" />
            <rect x="4" y="8" width="4" height="4" className="fill-current" />
            <rect x="16" y="8" width="4" height="4" className="fill-current" />
            <rect x="8" y="12" width="4" height="4" className="fill-current" />
            <rect x="12" y="12" width="4" height="4" className="fill-current" />
            <rect x="12" y="16" width="4" height="4" className="fill-current" />
          </>
        )
      case "whatsapp":
        return (
          <>
            <rect x="4" y="4" width="4" height="4" className="fill-current" />
            <rect x="8" y="4" width="4" height="4" className="fill-current" />
            <rect x="12" y="4" width="4" height="4" className="fill-current" />
            <rect x="16" y="4" width="4" height="4" className="fill-current" />
            <rect x="4" y="8" width="4" height="4" className="fill-current" />
            <rect x="16" y="8" width="4" height="4" className="fill-current" />
            <rect x="4" y="12" width="4" height="4" className="fill-current" />
            <rect x="8" y="12" width="4" height="4" className="fill-current" />
            <rect x="12" y="12" width="4" height="4" className="fill-current" />
            <rect x="16" y="12" width="4" height="4" className="fill-current" />
            <rect x="8" y="16" width="4" height="4" className="fill-current" />
            <rect x="12" y="16" width="4" height="4" className="fill-current" />
          </>
        )
      default:
        return (
          <>
            <rect x="4" y="4" width="4" height="4" className="fill-current" />
            <rect x="8" y="4" width="4" height="4" className="fill-current" />
            <rect x="12" y="4" width="4" height="4" className="fill-current" />
            <rect x="16" y="4" width="4" height="4" className="fill-current" />
            <rect x="4" y="8" width="4" height="4" className="fill-current" />
            <rect x="16" y="8" width="4" height="4" className="fill-current" />
            <rect x="4" y="12" width="4" height="4" className="fill-current" />
            <rect x="16" y="12" width="4" height="4" className="fill-current" />
            <rect x="4" y="16" width="4" height="4" className="fill-current" />
            <rect x="8" y="16" width="4" height="4" className="fill-current" />
            <rect x="12" y="16" width="4" height="4" className="fill-current" />
            <rect x="16" y="16" width="4" height="4" className="fill-current" />
          </>
        )
    }
  }

  return (
    <div className={cn("pixelated-icon", className)}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="pixelated">
        {getIconPattern()}
      </svg>
    </div>
  )
}
