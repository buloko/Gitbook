const{Schema, model, Types } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema (
    {
        reactionBody:{
            type:String,
            required: true,
            maxLength: 280,
            trim: true,
        },
        reactionId: {
            type:Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        username: {
            type:String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: creationDate => moment(creationDate).format("MM DD YYYY hh: mm:ss"),
        },
    }
)

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 250,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user"
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});


const thought = model("thought", thoughtSchema);

module.exports = thought;

