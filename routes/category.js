import { Router } from "express";
import { addCategory, getAllCategories, getOneCategory, updateCategory, deleteCategory } from "../controllers/category.js";
import { isAuthenticated } from "../middlewares/authenticator.js";

const categoryRouter = Router();

categoryRouter.post('/categories', isAuthenticated, addCategory);

categoryRouter.get('/categories', getAllCategories);

categoryRouter.get('/categories/:id', getOneCategory);

categoryRouter.patch('/categories/:id', isAuthenticated, updateCategory);

categoryRouter.delete('/categories/:id', isAuthenticated, deleteCategory);



export default categoryRouter;