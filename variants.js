export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',
        duration: .15,
        delay: delay,
        ease: [0.025, 0.06, 0.03, 0.08],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: .14,
        delay: delay,
        ease: [0.025, 0.025, 0.025, 0.075],
      },
    },
  };
};
