import { Schema, model } from 'mongoose';

const blogSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },

    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      require: true,
    },

    images: [
      {
        url: String,
        alt: String,
      },
    ],

    slug: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model('blog', blogSchema);
