import { useState, useLayoutEffect, useRef } from 'react'

export const useMeasure = (deps: (string | null)[]) => {
    const ref = useRef<HTMLParagraphElement>(null)
    const [rect, setRect] = useState({} as DOMRect | undefined)

    useLayoutEffect(() => {
        setRect(ref.current?.getBoundingClientRect())
    }, deps)

    return {rect, ref}
}
