function compareTime(timeString1, timeString2) {
  let timeObject1 = new Date(timeString1);
  let timeObject2 = new Date(timeString2);

  return timeObject1.getTime() > timeObject2.getTime();
}

module.exports = {
  compareTime,
};
