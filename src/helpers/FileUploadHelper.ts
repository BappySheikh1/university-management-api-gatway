import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'drpe4m4ly',
  api_key: '388466572857366',
  api_secret: 'JXaYSWgnqQ-jeQxFHsAfPF-TtOc'
});

const uploadToCloudinary = async () => {
  cloudinary.uploader.upload(
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
    { public_id: 'olympic_flag' },
    function (error, result) {
      console.log(result);
    }
  );
};

export const FileUploadHelper = {
  uploadToCloudinary
};
