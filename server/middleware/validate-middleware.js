const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    // console.log(err);
    const status = 422;
    const message = "Fill the input details.";
    const extraDetails = err.errors[0].message;
    // console.log(extraDetails);
    // res.status(400).json({ msg: "validation error" });

    const error = {
      status,
      message,
      extraDetails,
    };
    next(error);
  }
};

module.exports = validate;
