export const pixelsToMinutes = 2;

export const timelinePadding = 50;

export const stageWidth = 280;
export const totalDayWidth = (day) => {
  return day.stages.length * stageWidth + (timelinePadding * 2);
};

export const appHeaderHeight = 70;

export const stageNameHeight = 30;

export const pixelsFromDiff = (a, b) => {
  const diffMinutes = Math.abs(a.diff(b, 'minutes'));
  return diffMinutes * pixelsToMinutes;
};