const pixelsToMinutes = 2;
const stageWidth = 280;

export const totalDayWidth = (day) => {
  return day.stages.length * stageWidth;
};