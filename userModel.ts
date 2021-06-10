import mongoose, { Document } from "mongoose";

export interface User {
  content: string;
  user: string;
}

export type TUserDocument = Document & User;

const UserSchema = new mongoose.Schema({
  age: { type: Number, required: true },
  name: { type: String, required: true },
  sex: { type: String, required: true },
});

export const User = mongoose.model < TUserDocument > ("User", UserSchema);
