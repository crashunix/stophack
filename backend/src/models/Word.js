const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const WordSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
    },
    letter: {
        type: String,
        required: true,
    },
    wordGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WordGroup',
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

WordSchema.plugin(mongoosePaginate);

mongoose.model('Word', WordSchema);