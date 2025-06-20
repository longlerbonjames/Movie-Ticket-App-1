import { body, validationResult } from 'express-validator';

export const createUserDto = [
  body('username').isString().notEmpty(),
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];