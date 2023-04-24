export const getActiveSlides = (data, type) =>
  data[type].filter((value) => value['active'] === true);
