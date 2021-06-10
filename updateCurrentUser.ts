import { RequestHandler } from "express";
import { User } from "./userModel";

export const updateUser: RequestHandler = async (req, res, next) => {
  let user = await User.findByIdAndUpdate(req.params.id, req.body);
  if (!user) {
    user = await User.create(req.body);
  }
  res.send(user);
};
