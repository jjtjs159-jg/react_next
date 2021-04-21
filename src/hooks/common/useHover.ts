import { useEffect, useState, useRef, RefObject } from 'react';

const useHover = <T extends HTMLElement>(): [RefObject<T>, boolean] => {
  const ref = useRef<T>(null);

  const [value, setValue] = useState(false);

  const handleMouseOver = () => {
    setValue(true);
  };

  const handleMouseOut = () => {
    setValue(false);
  };

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      currentRef.addEventListener('mouseover', handleMouseOver);
      currentRef.addEventListener('mouseout', handleMouseOut);

      return () => {
        currentRef.removeEventListener('mouseover', handleMouseOver);
        currentRef.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, []);

  return [ref, value];
};

export default useHover;
