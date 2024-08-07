import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    content: {
        type: String,
        required: true,
        trim: true,
        default: ""
    },
    chat: {
        type: Schema.Types.ObjectId,
        ref: "Chat"
    }
},
    {
        timestamps: true
    }
)


export const Message = mongoose.model("Message", messageSchema);