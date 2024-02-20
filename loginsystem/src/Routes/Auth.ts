import { Request, Response, Router } from 'express';
import { signupValidation, isAvailableFields, SimpleValidation, authCheckMiddleware } from '../MIddleware';
import User from './AuthModal';
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
const secret = process.env.secret || ""
const router = Router();



router.get('/', authCheckMiddleware, (req: any, res) => {
    try {
        res.json(req.userInfo)
    } catch (error) {
        res.send("There is an error")
    }

});
router.post('/', SimpleValidation, isAvailableFields, async (req: Request, res: Response) => {
    const response = await User.findOne({ where: { email: req.body.email } })
    if (response) {
        const compare = await bcrypt.compareSync(req.body.password, response.dataValues.password)
        if (compare) {
            const userData = response.dataValues
            delete userData.password
            const token = await jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: userData,
            }, secret);

            res.json({
                token,
                ...userData
            });
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