import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
} from '../controllers/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactValidationSchema,
  updateContactValidationSchema,
} from '../validation/contacts.js';

const router = Router();

router.use('/contacts/:contactId', isValidId);

router.get('/contacts', getContactsController);

router.get('/contacts/:contactId', getContactByIdController);

router.post(
  '/contacts',
  validateBody(createContactValidationSchema),
  createContactController,
);

router.patch(
  '/contacts/:contactId',
  validateBody(updateContactValidationSchema),
  patchContactController,
);

router.delete('/contacts/:contactId', deleteContactController);

export default router;
