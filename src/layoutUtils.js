import { getVisibleStagesForDay } from './reducers/index';

export const pixelsToMinutes = 2;

export const timelinePadding = 50;

export const stageWidth = 280;

export const totalDayWidth = (state, day) => {
  return getVisibleStagesForDay(state, day).length * stageWidth + timelinePadding;
};

export const appHeaderHeight = 65;

export const stageNameHeight = 30;

export const pixelsFromDiff = (a, b) => {
  const diffMinutes = Math.abs(a.diff(b, 'minutes'));
  return diffMinutes * pixelsToMinutes;
};