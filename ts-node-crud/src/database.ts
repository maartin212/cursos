import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/ts-node-crud', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('>>> DB is connected!');
  } catch (e) {
    console.log('Error:', e);
  }
};
