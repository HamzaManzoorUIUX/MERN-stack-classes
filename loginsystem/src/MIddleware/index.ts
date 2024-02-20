import { NextFunction, Request, Response } from "express";
const { check } = require("express-validator");
const { validationResult } = require("express-validator");
import jwt from 'jsonwebtoken'
const secret = process.env.secret || ""

export const SimpleValidation = [
    check("email", "Please Provide a valid email and password").trim().isEmail(),
    check("password", "Please Provide a valid email and password")
        .not()
        .isEmpty(),
];
export const signupValidation = [
    check("email", "Please Provide a valid email and password").trim().isEmail(),
    check("password", "Please Provide a valid email and password")
        .not()
        .isEmpty(),

];
export const isAvailableFields = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    } else {
        next();
    }
}
export const authCheckMiddleware = async (req: any, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.slice(7)
    if (token) {
        try {
            const response = await jwt.verify(token, secret)
            if (response) {
                req.userInfo = response
                next()
            }
            else {
                throw new Error("Invalid token");
            }
        }
        catch (err) {
            res.statusCode = 401
            res.send('Please login again');
        }
    }
    else {
        res.statusCode = 401
        res.send('Please provide me token');
    }
}