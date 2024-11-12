import { Router } from "express";
import { addItem, deleteItem, getItem, getItems, updateItem } from "../controllers/item.js";
import { isAuthenticated } from "../middlewares/authenticator.js";
import { itemImageUpload } from "../middlewares/uploads.js";


// create routes
const itemRouter = Router();

// define routes
itemRouter.post("/items", isAuthenticated, itemImageUpload.single("image"), addItem);

itemRouter.get("/items", getItems);

itemRouter.get("/items/:id", getItem);

itemRouter.patch("/items/:id", isAuthenticated, itemImageUpload.single("image"), updateItem);

itemRouter.delete("/items/:id", isAuthenticated, deleteItem);

// export router
export default itemRouter;