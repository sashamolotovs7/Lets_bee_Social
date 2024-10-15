import { Request, Response } from 'express';
import User from '../models/user';

// GET all users
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', err });
    }
};

// CREATE a new user
export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: 'Error creating user', err });
    }
};

// UPDATE a user by ID
export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: 'Error updating user', err });
    }
};

// DELETE a user by ID
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: 'Error deleting user', err });
    }
};

// ADD a friend
export const addFriend = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        );
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: 'Error adding friend', err });
    }
};

// REMOVE a friend
export const removeFriend = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $pull: { friends: req.params.friendId } },
            { new: true }
        );
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: 'Error removing friend', err });
    }
};
