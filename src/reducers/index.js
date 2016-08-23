import days from '../fixtures/formattedDays';

const initialState = {
  settingsOpen: false,
  day: 0,
  days
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_DAY':
      state.day = action.value;
      return Object.assign({}, state);
    case 'TOGGLE_SETTINGS_OPEN':
      state.settingsOpen = !state.settingsOpen;
      return Object.assign({}, state);
    case 'TOGGLE_STAGE_VISIBLE':
      for (let day of state.days) {
        for (let stage of day.stages) {
          if (stage.name === action.stageName) {
            stage.hidden = stage.hidden ? false : true;
          }
        }
      }
      return Object.assign({}, state);
    default:
      return state;
  }
}

export const getCurrentDay = (state) => state.days[state.day];

export const getCurrentDayIndex = (state) => state.day;

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
      if (push) stages.push({ name: stage.name, hidden: stage.hidden });
    }
  }

  return stages;
};