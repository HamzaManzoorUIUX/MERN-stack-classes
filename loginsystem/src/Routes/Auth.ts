import { Request, Response, Router } from 'express';
import { signupValidation, isAvailableFields, SimpleValidation } from '../MIddleware';
import User from './AuthModal';
import bcrypt from "bcryptjs"
import { body } from 'express-validator';
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World authenticated');
});
router.post('/', SimpleValidation, isAvailableFields, async (req: Request, res: Response) => {
    const response = await User.findOne({ where: { email: req.body.email } })
    if (response) {
        const compare = await bcrypt.compareSync(req.body.password, response.dataValues.password)
        if (compare) {
            res.send('Hello World you login to system successful');
        }
        else {
            res.statusCode = 401;
            res.send('Hello World you login to system unsuccessful');
        }
    }
    else {
        res.statusCode = 401
        res.send('Hello World you login to system unsuccessful');
    }

})
router.post('/signup', signupValidation, isAvailableFields, async (req: Request, res: Response) => {
    const { password } = req.body
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    await User.create({ ...req.body, password: hash })
    res.send('Hello World authenticated post successful');
})

export default router;