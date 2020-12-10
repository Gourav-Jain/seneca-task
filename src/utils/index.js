const BACK_GROUND_COLOR_CLASSES = [
  "partial-correct-one",
  "partial-correct-two",
];

export const getRandomBackground = (currClass) => {
  return BACK_GROUND_COLOR_CLASSES.filter((el) => el !== currClass)[0];
};
