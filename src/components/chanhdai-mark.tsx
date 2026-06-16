export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 450 250"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M50 0 h150 v50 h-150 Z M0 50 h50 v50 h-50 Z M50 100 h100 v50 h-100 Z M150 150 h50 v50 h-50 Z M0 200 h150 v50 h-150 Z M250 0 h50 v250 h-50 Z M300 0 h100 v50 h-100 Z M400 50 h50 v50 h-50 Z M300 100 h100 v50 h-100 Z M400 150 h50 v50 h-50 Z M300 200 h100 v50 h-100 Z"
      />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 450 250"><path fill="currentColor" d="M50 0 h150 v50 h-150 Z M0 50 h50 v50 h-50 Z M50 100 h100 v50 h-100 Z M150 150 h50 v50 h-50 Z M0 200 h150 v50 h-150 Z M250 0 h50 v250 h-50 Z M300 0 h100 v50 h-100 Z M400 50 h50 v50 h-50 Z M300 100 h100 v50 h-100 Z M400 150 h50 v50 h-50 Z M300 200 h100 v50 h-100 Z"/></svg>`
}
