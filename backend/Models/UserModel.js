import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "Please enter your fullname"]
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [6, 'Password must be at least 6 characters long'],
        maxlength: 8 // corrected typo
    },
    image: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    movieLiked: {
        type: Schema.Types.ObjectId,
        ref: 'movie' // Make sure 'movie' is the correct model name
    },
    movieHistory: {
        type: Schema.Types.ObjectId,
        ref: "movie" // Make sure 'movie' is the correct model name
    }
}, {
    timestamps: true
});

export default mongoose.model("user", UserSchema);
