import { ItemModel } from "../models/item.js";
import { itemValidator, updateItemValidator } from "../validators/item.js";

export const addItem = async (req, res, next) => {
    try {
        const { error, value } = itemValidator.validate({
            ...req.body,
            image: req.file?.filename
        });
        if (error) {
            return res.status(422).json(error);
        }
        await ItemModel.create({
            ...value,
            user: req.auth.id
        });
        res.status(201).json("Item posted successfully!")
    } catch (error) {
        next(error);
    }
};

export const getItems = async (req, res, next) => {
    try {
        const { filter = "{}", sort = "{}", limit = 10, skip = 0 } = req.query;
        console.log(filter);
        const items = await ItemModel
            .find(JSON.parse(filter))
            .sort(JSON.parse(sort))
            .limit(limit)
            .skip(skip)
            .populate('category');
        res.status(200).json(items)
    } catch (error) {
        next(error);
    }
};

export const getItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = await ItemModel.findById(id).populate('category');
        res.json(item)
    } catch (error) {
        next(error);
    }
};

export const updateItem = async (req, res, next) => {
    try {
        const { error, value } = updateItemValidator.validate({
            ...req.body,
            image: req.file?.filename
        });
        if (error) {
            return res.status(422).json(error);
        }
        const updateItem = await ItemModel.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.auth.id
            },
            value,
            { new: true }
        );
        if (!updateItem) {
            res.status(404).json("Item not found");
        }
        res.status(200).json(updateItem)

    } catch (error) {
        next(error);
    }
};

export const deleteItem = async (req, res, next) => {
    try {
        const deleteItem = await ItemModel.findOneAndDelete(
            {
                _id: req.params.id,
                user: req.auth.id
            });

        if (!deleteItem) {
            return res.status(422).json("Item not found")
        }
        res.status(200).json({
            message: "Item deleted successfully",
            deleteItem
        })
    } catch (error) {
        next(error);
    }
};
