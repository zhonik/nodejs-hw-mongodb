import { Router } from 'express';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
  resetPasswordController,
  sendResetEmailController,
} from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  loginUserSchema,
  registerUserSchema,
  resetPasswordSchema,
  sendResetEmailSchema,
} from '../validation/auth.js';

const authRouter = Router();

authRouter.post('/register', validateBody(registerUserSchema), registerUserController);
authRouter.post('/login', validateBody(loginUserSchema), loginUserController);
authRouter.post('/refresh', refreshUserSessionController);
authRouter.post('/logout', logoutUserController);
authRouter.post('/send-reset-email', validateBody(sendResetEmailSchema), sendResetEmailController);
authRouter.post('/reset-pwd', validateBody(resetPasswordSchema), resetPasswordController);

export default authRouter;
