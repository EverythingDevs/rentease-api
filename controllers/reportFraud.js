import { ReportFraudModel } from "../models/reportFraud.js";
import { FraudReportValidator, updateFraudReportValidator } from "../validators/fraudreport.js";
import { mailTransporter } from "../utils/mail.js";

export const addFraudReport = async (req, res, next) => {
    try {
        const { error, value } = FraudReportValidator.validate({
            ...req.body,
            fraudimage: req.file?.filename
        });
        if (error) {
            return res.status(422).json(error);
        }
        await ReportFraudModel.create({
            ...value,
            user: req.auth.id
        });
        await mailTransporter.sendMail({
            to: value.email,
            subject: 'Fraud Report',
            text: 'Your fraud report will be reviewed for approval'
        });

        res.status(201).json("Fraud report posted successfully!")
    } catch (error) {
        next(error);
    }
};

export const getFraudReports = async (req, res, next) => {
    try {
        const { filter = "{}", sort = "{}", limit = 10, skip = 0 } = req.query;
        const fraudreport = await ReportFraudModel
            .find(JSON.parse(filter))
            .sort(JSON.parse(sort))
            .limit(limit)
            .skip(skip)
        res.status(200).json(fraudreport)
    } catch (error) {
        next(error);
    }
};

export const getFraudReport = async (req, res, next) => {
    try {
        const { id } = req.params;
        const fraudreport = await ReportFraudModel
            .findById(id)
        res.json(fraudreport)
    } catch (error) {
        next(error);
    }
};

export const updateFraudReport = async (req, res, next) => {
    try {
        const { error, value } = updateFraudReportValidator.validate({
            ...req.body,
            fraudimage: req.file?.filename
        });
        if (error) {
            return res.status(422).json(error);
        }
        const updateFraudReport = await ReportFraudModel.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.auth.id
            },
            value,
            { new: true }
        );
        if (!updateFraudReport) {
            res.status(404).json("Fraud report not found");
        }
        res.status(200).json(updateFraudReport)

    } catch (error) {
        next(error);
    }
};

export const deleteFraudReport = async (req, res, next) => {
    try {
        const deleteFraudReport = await ReportFraudModel.findOneAndDelete(
            {
                _id: req.params.id,
                user: req.auth.id
            });

        if (!deleteFraudReport) {
            return res.status(422).json("Fraud report not found")
        }
        res.status(200).json({
            message: "Fraud report deleted successfully",
            deleteFraudReport
        })
    } catch (error) {
        next(error);
    }
};
