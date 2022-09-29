import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`MongoDB connected ${connect.connection.host}`.cyan.underline);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}