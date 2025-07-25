import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const dest = path.join(__dirname, '../public/images/blogImages/');
    cb(null, dest);
  },

  filename: (req, file, cb) => {
    // console.log(req.files)

    const fileName = file.originalname.split('.')[0];

    const imageName =
      Date.now() + ' ' + fileName + path.extname(file.originalname);

    cb(null, imageName);
  },
});

const blogImageUpload = multer({ storage });

export default blogImageUpload;
