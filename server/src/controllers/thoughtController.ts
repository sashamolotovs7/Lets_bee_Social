import { Request, Response } from 'express';
import Thought from '../models/Thought';

// GET all thoughts
export const getAllThoughts = async (req: Request, res: Response): Promise<void> => {
    try {
        const thoughts = await Thought.find();
        res.status(200).json(thoughts);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching thoughts', err });
    }
};

// CREATE a new thought
export const createThought = async (req: Request, res: Response): Promise<void> => {
    try {
        const newThought = await Thought.create(req.body);
        res.status(201).json(newThought);
    } catch (err) {
        res.status(400).json({ message: 'Error creating thought', err });
    }
};

// UPDATE a thought by ID
export const updateThought = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedThought) {
            res.status(404).json({ message: 'Thought not found' });
            return;
        }
        res.status(200).json(updatedThought);
    } catch (err) {
        res.status(400).json({ message: 'Error updating thought', err });
    }
};

// DELETE a thought by ID
export const deleteThought = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedThought = await Thought.findByIdAndDelete(req.params.id);
        if (!deletedThought) {
            res.status(404).json({ message: 'Thought not found' });
            return;
        }
        res.status(200).json({ message: 'Thought deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: 'Error deleting thought', err });
    }
};
