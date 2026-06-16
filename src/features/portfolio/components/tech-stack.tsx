import Image from "next/image"

import { TECH_STACK } from "../data/tech-stack"

export function TechStack() {
  return (
    <div>
      <h3 className="sr-only">Tech Stack</h3>

      <div className="p-4">
        <ul className="flex flex-wrap gap-2">
          {TECH_STACK.map((tech) => {
            return (
              <li key={tech.key} className="flex">
                <a
                  href={tech.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={tech.title}
                  className="flex items-center gap-1.5 rounded-full bg-zinc-50 px-1.5 py-0.5 text-xs tracking-wide text-foreground ring-1 ring-border/80 select-none dark:bg-zinc-900 [&_img]:size-3.5"
                >
                  {tech.iconUrl ? (
                    <Image
                      src={tech.iconUrl}
                      alt={`${tech.title} icon`}
                      width={14}
                      height={14}
                      unoptimized
                    />
                  ) : tech.theme ? (
                    <>
                      <Image
                        className="hidden [html.light_&]:block"
                        src={`https://cdn.simpleicons.org/${tech.key}/000000`}
                        alt={`${tech.title} light icon`}
                        width={14}
                        height={14}
                        unoptimized
                      />
                      <Image
                        className="hidden [html.dark_&]:block"
                        src={`https://cdn.simpleicons.org/${tech.key}/ffffff`}
                        alt={`${tech.title} dark icon`}
                        width={14}
                        height={14}
                        unoptimized
                      />
                    </>
                  ) : (
                    <Image
                      src={`https://cdn.simpleicons.org/${tech.key}`}
                      alt={`${tech.title} icon`}
                      width={14}
                      height={14}
                      unoptimized
                    />
                  )}
                  {tech.title}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="flex h-px" />
    </div>
  )
}
