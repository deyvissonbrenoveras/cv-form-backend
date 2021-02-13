import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multerConfig';

import ApplicantController from './app/controllers/ApplicantController';
import FileController from './app/controllers/FileController';

const upload = multer(multerConfig);
const routes = new Router();

routes.post('/files', upload.single('file'), FileController.store);
routes.post('/applicants', ApplicantController.store);

export default routes;
