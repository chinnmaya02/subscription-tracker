import { Router } from "express";

const userRouter = Router();

//Get/users -> get all users
//Get/users/id -> get user by id //123 412

userRouter.get('/', (req, res) => res.send( {title: 'Get all users'}));

userRouter.get('/:id', (req, res) => res.send( {title: 'Get user details'}));

userRouter.post('/', (req, res) => res.send( {title: 'Create new users'}));

userRouter.put('/:id', (req, res) => res.send( {title: 'Update the users'}));

userRouter.delete('/:id', (req, res) => res.send( {title: 'Delete the user'}));

export default userRouter;