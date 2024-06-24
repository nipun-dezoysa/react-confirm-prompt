export function animation(a: string): any {
  if (a === "scale") {
    return {
      hidden: { scale: 0 },
      visible: { scale: 1 },
      exit: { scale: 0 },
      time: 100,
    };
  } else if (a === "fade") {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 },
      time: 100,
    };
  } else {
    return {
      hidden: {},
      visible: {},
      exit: {},
      time: 0,
    };
  }
}
