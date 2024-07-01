import { NextFunction, Response, Request } from "express";
import { validator } from "../../z-library/validation/validator";

export const validateFile =  (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
      return res.status(400).json({error: 'File is required.', message: 'invalid input'});
    }
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(req.file.mimetype);
    const extname = filetypes.test(req.file.originalname.split('.').pop() as string);
    if (!mimetype || !extname) {
      return res.status(400).json(
        { 
            error: 'Invalid file type. Only JPEG and PNG are allowed.',
            message: 'Inavalid input'
        });
    }
    next();
}

export const productValidators = [
    validator.validateNameField('productName', { required: true }),
    validator.validateNumber('currentPrice', { required: true }),
    validator.validateNumber('previousPrice', { required: true }),
    validator.validateString('description', { required: true })
]