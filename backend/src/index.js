import dotenv from 'dotenv';
import connectDB from './db';
import { app } from './app';


dotenv.config({
    path: './.env'
});


connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`App is running on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log(`App connection failed !! ${error}`);
}) 