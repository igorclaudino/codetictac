import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        organization: {
            type: String
        },
        password: {
            type: String,
            required: true
        },
        wakatime_token: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

export default model("User", UserSchema);
