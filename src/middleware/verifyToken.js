import AppError from '../utils/appError.js';
import constants from '../config/constants.js';
import jwt from 'jsonwebtoken';

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  // console.log('verify token -->', token)

  if (!token) next(new AppError('Unauthorized', constants.UNAUTHORIZED));

  const SECRET_KEY = process.env.SECRET_KEY;
  const user = jwt.verify(token, SECRET_KEY);

  if (!user) next(new AppError('Unauthorized', constants.UNAUTHORIZED));

  // console.log('verify token -->', user)

  req.user = user;
  next();
};

export default verifyToken;
