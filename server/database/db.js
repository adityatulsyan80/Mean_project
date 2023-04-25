import mongoose from 'mongoose';

const Connection = async (username = 'adityatulsyan80',password='asphalt8') => {
    const URL = `mongodb://${username}:${password}@ac-vtzjhwu-shard-00-00.ovnzwzk.mongodb.net:27017,ac-vtzjhwu-shard-00-01.ovnzwzk.mongodb.net:27017,ac-vtzjhwu-shard-00-02.ovnzwzk.mongodb.net:27017/DOCS?ssl=true&replicaSet=atlas-zrv7af-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database',error);
    }
}

export default Connection;
