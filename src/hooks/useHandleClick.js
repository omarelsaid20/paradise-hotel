import { useEffect, useRef } from "react";

export function useHandleClick(handler) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) handler();
      }
      // Bind the event listener
      document.addEventListener("click", handleClickOutside, true);

      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("click", handleClickOutside, true);
      };
    },
    [handler]
  );

  return ref;
}
