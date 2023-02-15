import jwt from 'jsonwebtoken';
import { UsersModel } from '../models';
import { ErrorsUtil, CryptoUtil } from '../utils';

import config from '../config/variables.config';

const { AUTH } = config;

const {
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET
} = AUTH;

const { InputValidationError, UnauthorizedError } = ErrorsUtil;

export default class AuthService {
  static generateTokens(payload) {
    const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET);
    const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET);

    return { accessToken, refreshToken };
  }

  static validateAccessToken(accessToken) {
    try {
      return jwt.verify(accessToken, JWT_ACCESS_SECRET);
    } catch (error) {
      throw new UnauthorizedError(222);
    }
  }

  static validateRefreshToken(refreshToken) {
    try {
      return jwt.verify(refreshToken, JWT_REFRESH_SECRET);
    } catch (error) {
      throw new UnauthorizedError();
    }
  }

  static async refresh(token) {
    const user = AuthService.validateRefreshToken(token);
    user.role = ['admin'];
    const { accessToken, refreshToken } = AuthService.generateTokens(user);

    const payload = {
      accessToken,
      refreshToken,
      ...user
    };
    return payload;
  }

  static async login(user, pwd) {
    const userAdmin = await UsersModel.findByUsername(user);

    if (!userAdmin) throw new InputValidationError('Invalid username or password');
    if (!CryptoUtil.isValidPassword(pwd, userAdmin.pwd)) {
      throw new InputValidationError('Invalid username or password');
    }

    delete userAdmin.pwd;
    const { accessToken, refreshToken } = AuthService.generateTokens({ ...userAdmin });

    const payload = {
      id: userAdmin.id,
      user: userAdmin.user,
      role: [userAdmin.role],
      accessToken,
      refreshToken
    };
    return payload;
  }
}
