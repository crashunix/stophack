const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const WordGroupSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Word',
        require: true,
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

WordGroupSchema.plugin(mongoosePaginate);

mongoose.model('WordGroup', WordGroupSchema);