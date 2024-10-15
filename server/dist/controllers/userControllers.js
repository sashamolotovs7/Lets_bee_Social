"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFriend = exports.addFriend = exports.deleteUser = exports.updateUser = exports.createUser = exports.getAllUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
// GET all users
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.find();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({ message: 'Error fetching users', err });
    }
});
exports.getAllUsers = getAllUsers;
// CREATE a new user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield user_1.default.create(req.body);
        res.status(201).json(newUser);
    }
    catch (err) {
        res.status(400).json({ message: 'Error creating user', err });
    }
});
exports.createUser = createUser;
// UPDATE a user by ID
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield user_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(updatedUser);
    }
    catch (err) {
        res.status(400).json({ message: 'Error updating user', err });
    }
});
exports.updateUser = updateUser;
// DELETE a user by ID
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield user_1.default.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json({ message: 'User deleted successfully' });
    }
    catch (err) {
        res.status(400).json({ message: 'Error deleting user', err });
    }
});
exports.deleteUser = deleteUser;
// ADD a friend
const addFriend = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findByIdAndUpdate(req.params.userId, { $addToSet: { friends: req.params.friendId } }, { new: true });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(user);
    }
    catch (err) {
        res.status(400).json({ message: 'Error adding friend', err });
    }
});
exports.addFriend = addFriend;
// REMOVE a friend
const removeFriend = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } }, { new: true });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(user);
    }
    catch (err) {
        res.status(400).json({ message: 'Error removing friend', err });
    }
});
exports.removeFriend = removeFriend;
