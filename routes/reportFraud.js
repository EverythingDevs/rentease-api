import { Router } from "express";
import { isAuthenticated } from "../middlewares/authenticator.js";
import { FraudReportImageUpload } from "../middlewares/uploads.js";
import { addFraudReport, deleteFraudReport, getFraudReport, getFraudReports, updateFraudReport } from "../controllers/reportFraud.js";



// create routes
const reportFraudRouter = Router();

// define routes
reportFraudRouter.post("/fraudreport", isAuthenticated, FraudReportImageUpload.single("fraudimage"), addFraudReport);

// itemRouter.post("/items", isAuthenticated, itemImageUpload.multiple("images", 10), addItem);

reportFraudRouter.get("/fraudreport", getFraudReports);

reportFraudRouter.get("/fraudreport/:id", getFraudReport);

reportFraudRouter.patch("/fraudreport/:id", isAuthenticated, FraudReportImageUpload.single("fraudimage"), updateFraudReport);

// itemRouter.post("/items", isAuthenticated, itemImageUpload.multiple("images", 10), addItem);

reportFraudRouter.delete("/fraudreport/:id", isAuthenticated, deleteFraudReport);

// export router
export default reportFraudRouter;