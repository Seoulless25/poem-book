const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poemSchema = new Schema( {
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        enum: ['Standard', 'Haiku', 'Prose', 'Free Verse', 'Sonnet'],
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Poem', poemSchema);