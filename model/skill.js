const mongoose = require('mongoose');

const skilSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },

    department: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Department',
        require: true,
    },

    status: {
        type: String,
        enum : ['Active', 'Inactive', 'Deleted'], //Active / Inactive / Deleted
        default: 'Active'
    }
},{timestamps: true});

module.exports = Skill = mongoose.model('Skill', skilSchema);