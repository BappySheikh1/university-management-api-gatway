import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import * as fs from 'fs';
import { ICloudinaryResponse, IUploadFile } from '../interfaces/file';

cloudinary.config({
  cloud_name: 'drpe4m4ly',
  api_key: '388466572857366',
  api_secret: 'JXaYSWgnqQ-jeQxFHsAfPF-TtOc'
});

// store hbe kothay
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage
});

const uploadToCloudinary = async (file: IUploadFile): Promise<ICloudinaryResponse> => {
  return new Promise((resolve, rejects) => {
    cloudinary.uploader.upload(
      file.path,

      // { public_id: file.originalname },

      (error: Error, result: ICloudinaryResponse) => {
        fs.unlinkSync(file.path);

        if (error) {
          rejects(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

export const FileUploadHelper = {
  uploadToCloudinary,
  upload
};
