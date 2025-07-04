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
import { authenticate } from '../middlewares/authenticate.js';
import { upload } from '../middlewares/multer.js';

const contactsRouter = Router();

contactsRouter.use(authenticate);

contactsRouter.use('/:contactId', isValidId);

contactsRouter.get('/', getContactsController);

contactsRouter.get('/:contactId', getContactByIdController);

contactsRouter.post(
  '/',
  upload.single('photo'),
  validateBody(createContactValidationSchema),
  createContactController,
);

contactsRouter.patch(
  '/:contactId',
  upload.single('photo'),
  validateBody(updateContactValidationSchema),
  patchContactController,
);

contactsRouter.delete('/:contactId', deleteContactController);

export default contactsRouter;
