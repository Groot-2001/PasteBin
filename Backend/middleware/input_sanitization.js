const { check, validationResult, param } = require("express-validator");

exports.validateUser = [
  check("username")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("User name can not be empty!")
    .bail()
    .isLength({ min: 5, max: 8 })
    .withMessage(
      "Username should be Minimum 5 and Maximum 8 characters required!"
    )
    .bail(),
  check("email")
    .trim()
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage("Invalid email address!")
    .bail(),
  check("password").exists().withMessage("Password must be required!"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = errors.array();
      return res.status(422).json({
        errors: err.map((error) => {
          return error.msg;
        }),
      });
    }
    next();
  },
];
exports.validateUserLogin = [
  check("username")
    .optional({ checkFalsy: true })
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("User name can not be empty!")
    .bail()
    .isLength({ min: 5, max: 8 })
    .withMessage(
      "Username should be Minimum 5 and Maximum 8 characters required!"
    )
    .bail(),
  check("email")
    .optional({ checkFalsy: true })
    .trim()
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage("Invalid email address!")
    .bail(),
  check("password").exists().withMessage("Password must be required!"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = errors.array();
      return res.status(422).json({
        errors: err.map((error) => {
          return error.msg;
        }),
      });
    }
    next();
  },
];
exports.validatePaste = [
  check("text").not().isEmpty().trim(),
  (req, res, next) => {
    if (!req.user) {
      return res.status(422).json({
        message: "Please login first!",
      });
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = errors.array();
      return res.status(422).json({
        errors: err.map((error) => {
          return error.msg;
        }),
      });
    }
    next();
  },
];

exports.validatePasteDelete = [
  check("_id", "should be a valid document id").isMongoId(),
  (req, res, next) => {
    if (!req.user) {
      return res.status(422).json({
        message: "Please login first!",
      });
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = errors.array();
      return res.status(422).json({
        errors: err.map((error) => {
          return error.msg;
        }),
      });
    }
    next();
  },
];

exports.validateEmail = [
  param("user")
    .trim()
    .isLength({ min: 5, max: 8 })
    .withMessage("username must be 5-8 characters long")
    .bail()
    .not()
    .isEmpty()
    .withMessage("Invalid Username"),
  param("id").trim().not().isEmpty().withMessage("Invalid Username"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = errors.array();
      return res.status(422).json({
        errors: err.map((error) => {
          return error.msg;
        }),
      });
    }
    next();
  },
];

exports.validateAccountDeletion = [
  check("password").exists().withMessage("Password must be required!"),
  (req, res, next) => {
    if (!req.user) {
      return res.status(422).json({
        message: "Please login First!",
      });
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = errors.array();
      return res.status(422).json({
        errors: err.map((error) => {
          return error.msg;
        }),
      });
    }
    next();
  },
];
