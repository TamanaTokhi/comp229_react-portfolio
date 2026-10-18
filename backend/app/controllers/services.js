
var Service = require('../models/Service');

exports.getAll = async function(req, res, next) {
    try {
        var services = await Service.find();

        var data = services.map(function(service) {
            var item = service.toObject();
            item.id = item._id.toString();
            delete item._id;
            delete item.__v;
            return item;
        });

        res.json({
            success: true,
            message: 'Services retrieved successfully.',
            data: data
        });
    } catch (error) {
        next(error);
    }
};

exports.getById = async function(req, res, next) {
    try {
        var service = await Service.findById(req.params.id);

        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found.'
            });
        }

        var data = service.toObject();
        data.id = data._id.toString();
        delete data._id;
        delete data.__v;

        res.json({
            success: true,
            message: 'Service retrieved successfully.',
            data: data
        });
    } catch (error) {
        next(error);
    }
};

exports.create = async function(req, res, next) {
    try {
        var service = new Service(req.body);
        await service.save();

        var data = service.toObject();
        data.id = data._id.toString();
        delete data._id;
        delete data.__v;

        res.status(201).json({
            success: true,
            message: 'Service created successfully.',
            data: data
        });
    } catch (error) {
        next(error);
    }
};

exports.update = async function(req, res, next) {
    try {
        var service = await Service.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found.'
            });
        }

        res.json({
            success: true,
            message: 'Service updated successfully.'
        });
    } catch (error) {
        next(error);
    }
};

exports.delete = async function(req, res, next) {
    try {
        var service = await Service.findByIdAndDelete(req.params.id);

        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found.'
            });
        }

        res.json({
            success: true,
            message: 'Service deleted successfully.'
        });
    } catch (error) {
        next(error);
    }
};
