import { Router } from 'express';
import { getAllThoughts, createThought, updateThought, deleteThought, } from '../controllers/thoughtController';

const router = Router();

// GET all thoughts
router.get('/', getAllThoughts);

// POST create a new thought
router.post('/', createThought);

// PUT update a thought by ID
router.put('/:id', updateThought);

// DELETE a thought by ID
router.delete('/:id', deleteThought);

export default router;
