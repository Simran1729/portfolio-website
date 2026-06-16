"use client"

import { Download } from "lucide-react"
import { useHotkeys } from "react-hotkeys-hook"

import { useClickSound } from "@/hooks/soundcn/use-click-sound"

import { Tooltip, TooltipContent, TooltipTrigger } from "./base/ui/tooltip"
import { Button } from "./ui/button"
import { Kbd } from "./ui/kbd"

export function ResumeDownload() {
  const [click] = useClickSound()

  const handleDownload = () => {
    click()
  }

  useHotkeys("r", () => {
    click()
    const link = document.createElement("a")
    link.href = "/resume/Simran-Resume.pdf"
    link.download = "Simran-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  })

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            className="relative touch-manipulation border-none"
            variant="ghost"
            size="icon-sm"
            aria-label="Download Resume"
            onClick={handleDownload}
            asChild
          >
            <a href="/resume/Simran-Resume.pdf" download="Simran-Resume.pdf">
              <span
                className="absolute size-12 pointer-fine:hidden"
                aria-hidden
              />
              <Download className="size-4" aria-hidden />
            </a>
          </Button>
        }
      />
      <TooltipContent className="pr-2 pl-3">
        <div className="flex items-center gap-3">
          Download Resume
          <Kbd>R</Kbd>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}
