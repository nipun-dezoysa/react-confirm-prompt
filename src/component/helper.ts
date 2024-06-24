export function animation(a: string): any {
  if (a === "scale") {
    return {
      hidden: { scale: 0 },
      visible: { scale: 1 },
      time: 100,
    };
  } else if (a === "fade") {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      time: 150,
    };
  } else if (a === "blur") {
    return {
      hidden: { filter: "blur(10px)", opacity: 0 },
      visible: { filter: "blur(0px)", opacity: 1 },
      time: 150,
    };
  } else if (a === "slide-up") {
    return {
      hidden: { y: "200%" },
      visible: { y: 0 },
      time: 180,
    };
  } else if (a === "slide-down") {
    return {
      hidden: { y: "-200%" },
      visible: { y: 0 },
      time: 200,
    };
  } else if (a === "slide-left") {
    return {
      hidden: { x: "200%" },
      visible: { x: 0 },
      time: 180,
    };
  } else if (a === "slide-right") {
    return {
      hidden: { x: "-200%" },
      visible: { x: 0 },
      time: 200,
    };
  } else {
    return {
      hidden: {},
      visible: {},
      time: 0,
    };
  }
}
