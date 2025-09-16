import mongoose from 'mongoose';

const connectDB = async ()=> {
    mongoose.connection.on('connected',()=>{
        console.log("MongoDb atlas connected the successfully");
    })
  await mongoose.connect(`${process.env.MONGODB_ATLAS_URL}/CreativPicAI`);
}

export default connectDB;