import { useEffect, useRef } from "react";

type CloseProp = () => void;
type EventProp = boolean | undefined;
type eventIdType = string;

export function useOutsideClick(
  close: CloseProp,
  eventPhase: EventProp = true
) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(this: Document, e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (
        ref?.current &&
        !ref.current.contains(target as Node) &&
        target.id !== "nav-btn"
      ) {
        close();
      }
    }
    document.addEventListener("click", handleClick, eventPhase);
    return () => document.removeEventListener("click", handleClick, eventPhase);
  }, [close, eventPhase]);

  return ref;
}
