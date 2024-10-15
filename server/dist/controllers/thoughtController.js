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
exports.deleteThought = exports.updateThought = exports.createThought = exports.getAllThoughts = void 0;
const Thought_1 = __importDefault(require("../models/Thought"));
// GET all thoughts
const getAllThoughts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thoughts = yield Thought_1.default.find();
        res.status(200).json(thoughts);
    }
    catch (err) {
        res.status(500).json({ message: 'Error fetching thoughts', err });
    }
});
exports.getAllThoughts = getAllThoughts;
// CREATE a new thought
const createThought = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newThought = yield Thought_1.default.create(req.body);
        res.status(201).json(newThought);
    }
    catch (err) {
        res.status(400).json({ message: 'Error creating thought', err });
    }
});
exports.createThought = createThought;
// UPDATE a thought by ID
const updateThought = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedThought = yield Thought_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedThought) {
            res.status(404).json({ message: 'Thought not found' });
            return;
        }
        res.status(200).json(updatedThought);
    }
    catch (err) {
        res.status(400).json({ message: 'Error updating thought', err });
    }
});
exports.updateThought = updateThought;
// DELETE a thought by ID
const deleteThought = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedThought = yield Thought_1.default.findByIdAndDelete(req.params.id);
        if (!deletedThought) {
            res.status(404).json({ message: 'Thought not found' });
            return;
        }
        res.status(200).json({ message: 'Thought deleted successfully' });
    }
    catch (err) {
        res.status(400).json({ message: 'Error deleting thought', err });
    }
});
exports.deleteThought = deleteThought;
