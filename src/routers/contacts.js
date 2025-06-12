import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
} from '../controllers/contacts.js';

const router = Router();

router.get('/contacts', getContactsController);

router.get('/contacts/:contactId', getContactByIdController);

router.post('/contacts', createContactController);

router.patch('/contacts/:contactId', patchContactController);

router.delete('/contacts/:contactId', deleteContactController);

export default router;
