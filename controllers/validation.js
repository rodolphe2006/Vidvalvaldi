import Joi from "joi";

export default function validation(nameToValidate, res) {
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
  });

  const { error } = schema.validate(nameToValidate);
  if (error) {
    return res.json({ error: error.details[0].message });
  }
  return nameToValidate;
}
