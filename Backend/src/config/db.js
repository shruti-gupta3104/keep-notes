import mongoose from "mongoose";


export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected");

    } catch (error) {
           console.error("Error connecting to MONGODB", error);
           process.exit(1); // exit with failure
    }
};

// const dbConnect = ()=>{
//     mongoose.connect(process.env.DB_URL,{})
//     .then(
//         ()=>{
//              console.log("Database connected");
//         }
//     )
//     .catch(
//         (error)=>{
//             console.log("Database connection",error);
//             process.exit(1);
            
//         }
//     )
// }
// module.exports = dbConnect;