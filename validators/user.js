const Joi = require("joi");

const validatePost = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    userName: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).send({
      message: "error in data user",
      error: result.error,
    });
  }
  next();
};
const validatePut = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string(),
    userName: Joi.string(),
    phone: Joi.string(),
    email: Joi.string(),
  });
  const result = schema.validate(req.body);
  if (result.erro) {
    return res.status(400).send({
      message: "error in data user",
      error: result.error,
    });
  }
  next();
};
module.exports = {
  validatePost,
  validatePut,
};
