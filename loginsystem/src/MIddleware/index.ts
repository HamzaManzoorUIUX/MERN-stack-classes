import { NextFunction, Request, Response } from "express";
const { check } = require("express-validator");
const { validationResult } = require("express-validator");

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