import {
  LegacyRef,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export const useElementPosition = <T extends HTMLElement>(): [
  RefObject<T>,
  Position
] => {
  const ref = useRef<T>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setPosition({
          x: ref.current.offsetLeft,
          y: ref.current.offsetTop,
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return [ref, position];
};

interface Position {
  x: number;
  y: number;
}

export const useWindowPosition = (): Position => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);
  return position;
};

export const useElementTop = (
  position: Position,
  windowPosition: Position,
  offset?: number
): boolean => {
  let offsetTop = offset ? offset : 0;
  return useMemo(
    () => position?.y + offsetTop < windowPosition.y,
    [windowPosition, position, offsetTop]
  );
};
