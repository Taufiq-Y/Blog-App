import mongoose from 'mongoose';



const ConnectDB = async () => {
    try {
    const URL = 'mongodb+srv://taufiq:taufiq123@blog-app.q49cd.mongodb.net/Blog-App?retryWrites=true&w=majority'

    await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true,  });
    console.log('Database Connection Successful');
        } catch(error) {
            console.log('Error While Connecting to Mongo', error);
        }
    }

export default ConnectDB;