import { Router } from "express";
import { getProfile, getUserItems, logInUser, logOutUser, signUpUser, updateProfile } from "../controllers/user.js";
import { hasPermission, isAuthenticated } from "../middlewares/authenticator.js";
import { userAvatarUpload } from "../middlewares/uploads.js";

const userRouter = Router();

userRouter.post('/users/register', signUpUser);

userRouter.post('/users/login', logInUser);

userRouter.get('/users/me', isAuthenticated, hasPermission('get_profile'), getProfile);

userRouter.post('/users/logout', isAuthenticated, logOutUser);

userRouter.get('/users/me/items', isAuthenticated, getUserItems);

userRouter.patch('/users/me', isAuthenticated, hasPermission('update_profile'), userAvatarUpload.single('avatar'), updateProfile)

export default userRouter;