
var User = require('../models/User');

exports.getAll = async function(req, res, next) {
    try {
        var users = await User.find().select('-password');

        var data = users.map(function(user) {
            var item = user.toObject();
            item.id = item._id.toString();
            delete item._id;
            delete item.__v;
            return item;
        });

        res.json({
            success: true,
            message: 'Users retrieved successfully.',
            data: data
        });
    } catch (error) {
        next(error);
    }
};

exports.getById = async function(req, res, next) {
    try {
        var user = await User.findById(req.params.id).select('-password');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found.'
            });
        }

        var data = user.toObject();
        data.id = data._id.toString();
        delete data._id;
        delete data.__v;

        res.json({
            success: true,
            message: 'User retrieved successfully.',
            data: data
        });
    } catch (error) {
        next(error);
    }
};

exports.create = async function(req, res, next) {
    try {
        var user = new User(req.body);
        await user.save();

        var data = user.toObject();
        data.id = data._id.toString();
        delete data._id;
        delete data.__v;
        delete data.password;

        res.status(201).json({
            success: true,
            message: 'User created successfully.',
            data: data
        });
    } catch (error) {
        next(error);
    }
};

exports.update = async function(req, res, next) {
    try {
        var updateData = { ...req.body };
        delete updateData.password;

        var user = await User.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found.'
            });
        }

        res.json({
            success: true,
            message: 'User updated successfully.'
        });
    } catch (error) {
        next(error);
    }
};

exports.delete = async function(req, res, next) {
    try {
        var user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found.'
            });
        }

        res.json({
            success: true,
            message: 'User deleted successfully.'
        });
    } catch (error) {
        next(error);
    }
};
