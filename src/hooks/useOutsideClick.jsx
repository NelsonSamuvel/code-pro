import { useEffect, useRef } from "react";

export function useOutsideClick(close, eventPhase = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      console.log(ref);
      console.log(e.target);
      console.log(ref?.current.contains(e.target));
      if (ref?.current && !ref.current.contains(e.target)) {
  
        close();
      }
    }
    document.addEventListener("click", handleClick, eventPhase);
    return () => document.removeEventListener("click", handleClick, eventPhase);
  }, [close, eventPhase]);

  return ref;
}
