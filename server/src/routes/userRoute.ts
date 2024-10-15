import { Router } from 'express';
import { getAllUsers, createUser, updateUser, deleteUser, addFriend, removeFriend } from '../controllers/userControllers';

const router = Router();

//Get all users
router.get('/', getAllUsers);

//Create a new user
router.post('/', createUser);

//PUT update a user by ID
router.put('/:id', updateUser);

//DELETE a user by ID
router.delete('/:id', deleteUser);

//POST add a friend
router.post('/:userId/friends/:friendId', addFriend);

//DELETE remove a friend
router.delete('/:userId/friends/:friendId', removeFriend);

export default router;