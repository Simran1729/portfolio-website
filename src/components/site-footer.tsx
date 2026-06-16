import { RssIcon } from "lucide-react"

import { SITE_INFO } from "@/config/site"
import { cn } from "@/lib/utils"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-top mx-auto border-x border-line pt-4 group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <p className="px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Credits to{" "}
          <a
            className="font-medium text-foreground link-underline"
            href="https://chanhdai.com"
            target="_blank"
            rel="noopener"
          >
            chanhdai.com
          </a>{" "}
          for the website template.
        </p>

        <div className="screen-line-top screen-line-bottom mt-4 flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-line bg-background px-4">
            <span className="font-mono text-xs font-medium text-muted-foreground">
              &copy; {new Date().getFullYear()} {SITE_INFO.name}
            </span>
          </div>
        </div>
      </div>

      {/* <SiteFooterInteractiveLogotype /> */}

      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-24" />
      </div>
    </footer>
  )
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-line", className)} {...props} />
}
