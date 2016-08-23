export const pixelsToMinutes = 2;

export const timelinePadding = 50;

export const stageWidth = 280;
export const totalDayWidth = (day) => {
  return day.stages.filter(stage => !stage.hidden).length * stageWidth + timelinePadding;
};

export const appHeaderHeight = 65;

export const stageNameHeight = 30;

export const pixelsFromDiff = (a, b) => {
  const diffMinutes = Math.abs(a.diff(b, 'minutes'));
  return diffMinutes * pixelsToMinutes;
};