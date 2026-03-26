import { useRef, useState, useEffect } from "react";

export function useOverflow(maxHeight: number, deps: unknown[]) {
  const ref = useRef<HTMLDivElement>(null);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setOverflows(el.scrollHeight > maxHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxHeight, ...deps]);

  return { ref, overflows };
}