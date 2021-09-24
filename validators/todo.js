const Joi = require("joi");

const validatePost = (req, res, next) => {
  const schema = Joi.object({
    task: Joi.string().required(),
    completed: Joi.boolean().required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).send({
      message: "error de todo",
      error: error.todo,
    });
  }
  next();
};

const validatePut = (req, res, next) => {
  const schema = Joi.object({
    task: Joi.string(),
    completed: Joi.Bolean(),
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
