import mongoose from "mongoose";

const notificationAchema = new mongoose.Schema(
    {
        from:{
            type:mongoose.Schema.ObjectId,
            ref:"User",
            required:true,
        },
        to:{
            type:mongoose.Schema.ObjectId,
            ref:"User",
            required:true,
        },
        type:{
            type:String,
            required:true,
            enum:["follow","like"],
        },
        read:{
            type:Boolean,
            default:false,
        }
    },
    {timeseries:true}
);

const Notification = mongoose.model("Notification",notificationAchema);

export default Notification;