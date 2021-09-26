import { RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<any>,
  handler: (event: MouseEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const key = ref?.current;

      if (!key || key.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener(`mousedown`, listener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
    };
  }, [ref, handler]);
};
