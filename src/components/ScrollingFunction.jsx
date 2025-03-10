import { useEffect, useState } from 'react';

const useHorizontalScroll = (scrollRef) => {
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(false);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftBtn(scrollLeft > 0);
      setShowRightBtn(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    checkScroll(); // Initial check

    container.addEventListener('scroll', checkScroll);

    // ResizeObserver for dynamic content resizing
    const resizeObserver = new ResizeObserver(() => checkScroll());
    resizeObserver.observe(container);

    return () => {
      container.removeEventListener('scroll', checkScroll);
      resizeObserver.disconnect();
    };
  }, [scrollRef]);

  return { scroll, showLeftBtn, showRightBtn };
};

export default useHorizontalScroll;
