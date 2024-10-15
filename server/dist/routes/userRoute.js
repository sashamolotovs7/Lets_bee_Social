"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const router = (0, express_1.Router)();
//Get all users
router.get('/', userControllers_1.getAllUsers);
//Create a new user
router.post('/', userControllers_1.createUser);
//PUT update a user by ID
router.put('/:id', userControllers_1.updateUser);
//DELETE a user by ID
router.delete('/:id', userControllers_1.deleteUser);
//POST add a friend
router.post('/:userId/friends/:friendId', userControllers_1.addFriend);
//DELETE remove a friend
router.delete('/:userId/friends/:friendId', userControllers_1.removeFriend);
exports.default = router;
