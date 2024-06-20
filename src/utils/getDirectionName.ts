export const getHoverDirectionName = (e: {
  clientX: any;
  clientY: any;
  currentTarget: any;
}): string => {
  const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x =
      (clientX - left - width / 2) * (width > height ? height / width : 1);
    const y =
      (clientY - top - height / 2) * (height > width ? width / height : 1);
    const direction = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

    const directionName = ["top", "right", "bottom", "left"][direction];

    return directionName
};
