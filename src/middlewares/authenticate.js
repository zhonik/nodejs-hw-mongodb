import createHttpError from 'http-errors';
import { Sessions } from '../db/models/session.js';
import { Users } from '../db/models/user.js';

export const authenticate = async (req, res, next) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    throw createHttpError(401, 'Please provide Authorization header');
  }

  const bearer = authHeader.split(' ')[0];
  const token = authHeader.split(' ')[1];

  if (bearer !== 'Bearer' || !token) {
    throw createHttpError(401, 'Auth header should be of type Bearer');
  }

  const session = await Sessions.findOne({ accessToken: token });

  if (!session) {
    throw createHttpError(401, 'Session not found');
  }

  const isAccessTokenExpired = new Date() > new Date(session.accessTokenValidUntil);

  if (isAccessTokenExpired) {
    throw createHttpError(401, 'Access token expired');
  }

  const user = await Users.findById(session.userId);

  if (!user) {
    throw createHttpError(401, 'bad boy');
  }

  req.user = user;

  next();
};
