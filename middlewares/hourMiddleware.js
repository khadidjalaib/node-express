const verifyMorning = (req, res, next) => {
  const date = new Date();
  const hour = date.getHours();
  console.log(hour);
  if (8 <= hour && hour <= 10) {
    return next();
  }

  return res.status(400).send({
    message: "we are closed",
    data: {},
  });
};
module.exports = {
  verifyMorning,
};
