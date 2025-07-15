

import express from 'express';

import { hostPage, addHome, deleteHome, getUpdateForm, updateHome} from '../controllers/homesControl.js';





const hostRouter = express.Router();



hostRouter.get('/add-home', hostPage );


hostRouter.post('/add-home', addHome);

hostRouter.delete('/delete/:id', deleteHome);

// Show update form
hostRouter.get('/edit/:id', getUpdateForm);

// Handle update form submit
hostRouter.post('/edit/:id', updateHome);




export default hostRouter;

