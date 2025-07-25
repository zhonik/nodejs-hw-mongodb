import { model, Schema } from 'mongoose';

const contactSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      required: true,
      default: 'personal',
    },
    photo: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ContactsCollection = model('contacts', contactSchema);
