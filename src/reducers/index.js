import days from '../fixtures/formattedDays';

const initialState = {
  day: 0,
  days
};

export default (state = initialState, action) => {
  return state;
}

export const getCurrentDay = (state) => state.days[state.day];