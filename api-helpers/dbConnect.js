import mongoose from "mongoose";

export const connectToDatabase = async () => {

  //connect to db
  mongoose
    .connect(
      "mongodb+srv://testuser:testuser123@cluster0.jcaie.mongodb.net/books?retryWrites=true&w=majority"
    )
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));
};