import { useState, useCallback, useEffect, useRef } from "react";

const FEEDBACK_DURATION_MS = 2000;

export function useCopy() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const copy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), FEEDBACK_DURATION_MS);
    });
  }, []);

  return { copied, copy };
}