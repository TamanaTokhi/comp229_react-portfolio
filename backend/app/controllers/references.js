
var Reference = require('../models/Reference');

exports.getAll = async function(req, res, next) {
    try {
        var references = await Reference.find();

        var data = references.map(function(reference) {
            var item = reference.toObject();
            item.id = item._id.toString();
            delete item._id;
            delete item.__v;
            return item;
        });

        res.json({
            success: true,
            message: 'References retrieved successfully.',
            data: data
        });
    } catch (error) {
        next(error);
    }
};

exports.getById = async function(req, res, next) {
    try {
        var reference = await Reference.findById(req.params.id);

        if (!reference) {
            return res.status(404).json({
                success: false,
                message: 'Reference not found.'
            });
        }

        var data = reference.toObject();
        data.id = data._id.toString();
        delete data._id;
        delete data.__v;

        res.json({
            success: true,
            message: 'Reference retrieved successfully.',
            data: data
        });
    } catch (error) {
        next(error);
    }
};

exports.create = async function(req, res, next) {
    try {
        var reference = new Reference(req.body);
        await reference.save();

        var data = reference.toObject();
        data.id = data._id.toString();
        delete data._id;
        delete data.__v;

        res.status(201).json({
            success: true,
            message: 'Reference created successfully.',
            data: data
        });
    } catch (error) {
        next(error);
    }
};

exports.update = async function(req, res, next) {
    try {
        var reference = await Reference.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!reference) {
            return res.status(404).json({
                success: false,
                message: 'Reference not found.'
            });
        }

        res.json({
            success: true,
            message: 'Reference updated successfully.'
        });
    } catch (error) {
        next(error);
    }
};

exports.delete = async function(req, res, next) {
    try {
        var reference = await Reference.findByIdAndDelete(req.params.id);

        if (!reference) {
            return res.status(404).json({
                success: false,
                message: 'Reference not found.'
            });
        }

        res.json({
            success: true,
            message: 'Reference deleted successfully.'
        });
    } catch (error) {
        next(error);
    }
};
