export default (dayIndex) => (stages) => {
  const days = stages.reduce((days, stage) => {
    const stageName = stage.name;

    const stageByDay = stage.sets.reduce((stageByDay, set) => {
      const actName = set.name;
      const startTime = new Date(set.start);
      const endTime = new Date(set.end);

      const day = startTime.getUTCFullYear() +
        '-' + startTime.getUTCMonth() +
        '-' + startTime.getUTCDate();

      if (!Array.isArray(stageByDay[day])) stageByDay[day] = [];
      stageByDay[day].push({ actName, startTime, endTime });
      return stageByDay;
    }, {});

    for (const stageDay in stageByDay) {
      if (!Array.isArray(days[stageDay])) days[stageDay] = [];
      days[stageDay].push({stageName, sets: stageByDay[stageDay]});
    }

    return days;
  }, {});

  const sortedDayKeys = Object.keys(days).sort((a, b) => {
    const aSecs = Date.parse(a);
    const bSecs = Date.parse(a);
    return aSecs === bSecs ? 0 : aSecs > bSecs ? 1 : -1;
  });

  return days[sortedDayKeys[dayIndex]];
}
