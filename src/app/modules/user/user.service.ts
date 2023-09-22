import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { ICloudinaryResponse, IUploadFile } from '../../../interfaces/file';

const createStudent = async (req: Request) => {
  // console.log(req.file,req.body);
  const file = req.file as IUploadFile;
  const uploadedImage:ICloudinaryResponse = await FileUploadHelper.uploadToCloudinary(file);
  console.log(uploadedImage);
};

export const UserService = {
  createStudent
};
