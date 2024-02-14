import { Request, Response, Router } from 'express';
import { signupValidation, isAvailableFields, SimpleValidation } from '../MIddleware';
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World authenticated');
});
router.post('/', SimpleValidation, isAvailableFields, (req: Request, res: Response) => {
    res.send('Hello World authenticated post successful');
})
router.post('/signup', signupValidation, isAvailableFields, (req: Request, res: Response) => {
    const body = req.body
    console.log('body',body);
    
    res.send('Hello World authenticated post successful');
})

export default router;