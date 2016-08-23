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
    default:
      return state;
  }
}

export const getCurrentDay = (state) => state.days[state.day];

export const getCurrentDayIndex = (state) => state.day;

export const getDaysByName = (state) => state.days.map(day => day.start.format('dddd'));

export const isSettingsOpen = (state) => state.settingsOpen;