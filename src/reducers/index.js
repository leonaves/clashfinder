import days from '../fixtures/formattedDays';
import { loadState } from '../localStorage';

const freshState = {
  hiddenStages: [],
  favouriteSets: [],
  settingsOpen: false,
  day: 0,
  days
};

const initialState = Object.assign(freshState, loadState());

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_DAY':
      state.day = action.value;
      return Object.assign({}, state);

    case 'TOGGLE_SETTINGS_OPEN':
      state.settingsOpen = !state.settingsOpen;
      return Object.assign({}, state);

    case 'TOGGLE_STAGE_VISIBLE':
      let toggled = false;
      for (let day of state.days) {
        for (let stage of day.stages) {
          if (stage.name === action.stageName) {
            let hidden = state.hiddenStages.indexOf(stage.name);
            if (hidden > -1) {
              state.hiddenStages.splice(hidden, 1);
            } else {
              state.hiddenStages.push(stage.name);
            }
            toggled = true; break;
          }
        }
        if (toggled) break;
      }
      return Object.assign({}, state);

    case 'TOGGLE_FAVOURITE_SET':
      let favourited = false;
      for (let day of state.days) {
        for (let stage of day.stages) {
          for (let set of stage.sets) {
            if (set.actName === action.set.actName && set.startTime.isSame(action.set.startTime)) {
              let favourite = state.favouriteSets.indexOf(set.actName + set.startTime);
              if (favourite > -1) {
                state.favouriteSets.splice(favourite, 1);
              } else {
                state.favouriteSets.push(set.actName + set.startTime);
              }
              favourited = true; break;
            }
          }
          if (favourited) break;
        }
        if (favourited) break;
      }
      return Object.assign({}, state);

    default:
      return state;
  }
}


export const getCurrentDayIndex = (state) => state.day;

export const getDayByIndex = (state, index) => state.days[index];

export const getCurrentDay = (state) => state.days[state.day];

export const getDaysByName = (state) => state.days.map(day => day.start.format('dddd'));

export const isSettingsOpen = (state) => state.settingsOpen;

export const getAllStages = (state) => {
  let stages = [];

  for (let day of state.days) {
    for (let stage of day.stages) {
      let push = true;
      for (let uniqueStage of stages) {
        if (uniqueStage.name === stage.name) push = false;
      }
      if (push) stages.push({ name: stage.name, hidden: state.hiddenStages.includes(stage.name) });
    }
  }

  return stages;
};

export const getVisibleStagesForDay = (state, day) => {
  return day.stages.filter(stage => !state.hiddenStages.includes(stage.name));
};

export const setIsFavourite = (state) => (set) => {
  return state.favouriteSets.includes(set.actName + set.startTime)
};