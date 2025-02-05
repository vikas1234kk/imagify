import express from 'express'
import { imageGenerate } from '../controlars/imageGenerate.js'
import userAuth from '../middlewares/auth.js';


const imageRouter = express.Router();

imageRouter.post('/generate-image', userAuth, imageGenerate)


export default imageRouter;