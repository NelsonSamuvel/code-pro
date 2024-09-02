import { useEffect, useRef } from "react";

type CloseProp = () => void;
type EventProp = boolean | undefined;

export function useOutsideClick(
  close: CloseProp,
  eventPhase: EventProp = true
) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref?.current && !ref.current.contains(e.target as Node)) {
        close();
      }
    }
    document.addEventListener("click", handleClick, eventPhase);
    return () => document.removeEventListener("click", handleClick, eventPhase);
  }, [close, eventPhase]);

  return ref;
}
