import moment from 'moment';
import data from  './leeds';

const offset = data.UTCOffset;
const rawStages = data.stages;
const rawDays = data.days.map(day => {
  return { start: moment(day.start + offset), end: moment(day.end + offset) };
});

const stageExistsInArray = (stageName, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === stageName) return i;
  }
  return false;
};

export default rawStages.reduce((days, stage) => {
  const stageName = stage.name;

  for(const set of stage.sets) {
    const actName = set.name;
    const startTime = moment(set.start + offset);
    const endTime = moment(set.end + offset);

    let dayIndex = null;

    for (let i = 0; i < days.length; i++) {
      const day = days[i];

      if (day.end.isSameOrAfter(startTime) && day.start.isSameOrBefore(startTime)) {
        dayIndex = i;  break;
      }
    }

    if (!Array.isArray(days[dayIndex].stages)) days[dayIndex].stages = [];

    let stageIndex = stageExistsInArray(stageName, days[dayIndex].stages);
    if (stageIndex === false) {
      stageIndex = days[dayIndex].stages.push({ name: stageName, sets: [] }) - 1;
    }

    days[dayIndex].stages[stageIndex].sets.push({actName, startTime, endTime});
  }

  return days;
}, rawDays);