import { useEffect, useRef } from "react";

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
export const useDimensions = ref => {
  const dimensions = useRef({ width: 0, height: 0, left: 0, right: 0 });

  useEffect(() => {
    const box = ref.current.getBoundingClientRect()
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
    dimensions.current.left = box.left;
    dimensions.current.right = box.right;
    console.log(dimensions.current)
  }, []);

  return dimensions.current;
};