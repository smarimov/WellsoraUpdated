import { useEffect } from "react"

export const useHotkey = (data: Record<string, (() => void) | undefined>) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (data[event.key]) {
      data[event.key]?.()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
