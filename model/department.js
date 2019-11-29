const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    status: {
        type: String,
        enum : ['Active', 'Inactive', 'Deleted'], //Active / Inactive / Deleted
        default: 'Active'
    }
},{timestamps: true});

module.exports = Department = mongoose.model('Department', departmentSchema);