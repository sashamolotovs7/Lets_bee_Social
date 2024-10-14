import { Router } from 'express';

const router = Router();f

router.get('/', (req, res) => {
    res.send('API is running');
});

export default router;