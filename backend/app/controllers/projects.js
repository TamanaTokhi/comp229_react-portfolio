
var Project = require('../models/Project');

exports.getAll = async function(req, res, next) {
    try {
        var projects = await Project.find();

        var data = projects.map(function(project) {
            var item = project.toObject();
            item.id = item._id.toString();
            delete item._id;
            delete item.__v;
            return item;
        });

        res.json({
            success: true,
            message: 'Projects retrieved successfully.',
            data: data
        });
    } catch (error) {
        next(error);
    }
};

exports.getById = async function(req, res, next) {
    try {
        var project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found.'
            });
        }

        var data = project.toObject();
        data.id = data._id.toString();
        delete data._id;
        delete data.__v;

        res.json({
            success: true,
            message: 'Project retrieved successfully.',
            data: data
        });
    } catch (error) {
        next(error);
    }
};

exports.create = async function(req, res, next) {
    try {
        var project = new Project(req.body);
        await project.save();

        var data = project.toObject();
        data.id = data._id.toString();
        delete data._id;
        delete data.__v;

        res.status(201).json({
            success: true,
            message: 'Project created successfully.',
            data: data
        });
    } catch (error) {
        next(error);
    }
};

exports.update = async function(req, res, next) {
    try {
        var project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found.'
            });
        }

        res.json({
            success: true,
            message: 'Project updated successfully.'
        });
    } catch (error) {
        next(error);
    }
};

exports.delete = async function(req, res, next) {
    try {
        var project = await Project.findByIdAndDelete(req.params.id);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found.'
            });
        }

        res.json({
            success: true,
            message: 'Project deleted successfully.'
        });
    } catch (error) {
        next(error);
    }
};
