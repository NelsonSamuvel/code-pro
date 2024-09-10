import { useEffect, useRef } from "react";

type CloseProp = () => void;
type EventProp = boolean | undefined;

type RefType = {
  current: HTMLDivElement  | null;
};

export function useOutsideClick(
  close: CloseProp,
  eventPhase: EventProp = true
) {
  const ref: RefType = useRef(null);

  useEffect(() => {
    function handleClick(this: Document, e: MouseEvent) {
      const target = e.target as HTMLElement;
      console.log(target);
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
