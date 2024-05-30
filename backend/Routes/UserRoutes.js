// UserRoutes.js

import express from 'express';
import { registeruser } from '../Controllers/userController.js';

const router = express.Router();

// Route for registering a user
router.post("/", registeruser);

export default router;
