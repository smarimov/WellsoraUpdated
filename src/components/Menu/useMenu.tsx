import { autoUpdate, flip, offset, Placement, shift, size, useClick, useDismiss, useFloating, useInteractions, useRole } from "@floating-ui/react"
import { useState } from "react"

export const useMenu = ({ placement = "bottom-end" }: { placement: Placement }) => {
  const [open, setOpen] = useState(false)
  const { refs, floatingStyles, context } = useFloating({
    open: open,
    placement,
    onOpenChange: setOpen,
    middleware: [
      offset(6),
      shift({ padding: 8 }),
      flip({ padding: 8 }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`
          })
        },
        padding: 10
      })
    ],
    whileElementsMounted: autoUpdate
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context)
  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role])

  return {
    targetProps: { ref: refs.setReference, ...getReferenceProps() },
    menuProps: { open, ref: refs.setFloating, style: floatingStyles, ...getFloatingProps() },
    setOpen,
    open,
    context
  }
}
