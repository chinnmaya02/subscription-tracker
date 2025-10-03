import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { getUsers, getUser } from "../controllers/user.controller.js";

const userRouter = Router();

//Get/users -> get all users
//Get/users/id -> get user by id //123 412

userRouter.get('/', getUsers);

userRouter.get('/:id',authorize, getUser);

userRouter.post('/', (req, res) => res.send( {title: 'Create new users'}));

userRouter.put('/:id', (req, res) => res.send( {title: 'Update the users'}));

userRouter.delete('/:id', (req, res) => res.send( {title: 'Delete the user'}));

export default userRouter;