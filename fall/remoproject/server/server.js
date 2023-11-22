import express from "express";
import session from "express-session";
import cors from 'cors';
import mongoose from "mongoose";
import studentController from "./controllers/student-controller.js";
import bookController from "./controllers/books-controller.js";
import inputController from "./controllers/inputsController.js";
import AuthController from "./students/auth-controller.js";

const uri = "mongodb+srv://leise:temp@clustersg.ravhtu6.mongodb.net/?retryWrites=true&w=majority";
const app = express();
mongoose.connect(uri, {dbName:'msbaDB'});
/*const client= new MongoClient(uri);
async function run(){
  try {
    const database = client.db('msbaDB');
    const collection = database.collection('students');
    const finder = await collection.find({});
    const students = await finder.toArray();
    console.log(students);
    } finally {
    await client.close();
    }
    };
    
run().catch(console.dir);

client.connect();*/
const port = process.env.PORT || 5000;
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000",
}));
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));
app.use(express.json());
studentController(app);
bookController(app);
inputController(app);
AuthController(app);
app.listen(port);

console.log(`Server is running on port: ${port}`);
