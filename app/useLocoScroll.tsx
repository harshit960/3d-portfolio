// hooks/useLocoScroll.ts
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const useLocoScroll = (start: boolean) => {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector('#main-container') as HTMLElement;

    const locoScroll = new LocomotiveScroll({
      el: scrollEl!,
      smooth: true,
      // Additional options can be added here
    });

    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, [start]);
};

export default useLocoScroll;
