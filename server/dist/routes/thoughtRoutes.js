"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const thoughtController_1 = require("../controllers/thoughtController");
const router = (0, express_1.Router)();
// GET all thoughts
router.get('/', thoughtController_1.getAllThoughts);
// POST create a new thought
router.post('/', thoughtController_1.createThought);
// PUT update a thought by ID
router.put('/:id', thoughtController_1.updateThought);
// DELETE a thought by ID
router.delete('/:id', thoughtController_1.deleteThought);
exports.default = router;
