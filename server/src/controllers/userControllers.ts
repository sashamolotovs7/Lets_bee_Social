import { Request, Response } from 'express';
import User from '../models/user';

//GET all users
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({
            message: `Error fetching users`, err
        })
    }
}

//CREATE a new user
export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: `Error creating user`, err });
    }
};

//UPDATE a user by ID
export const updateUser = async (req: Request, res: Response) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: `User not found` });
        }
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: `Error updating user`, err });
    }
};

//DELETE a user by ID
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: `User nat found` });
        }
        res.status(200).json({ message: `User deleted successfully` });
    } catch (err) {
        res.status(400).json({ message: `Error deleting user`, err });
    }
}

