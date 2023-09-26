import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';

const createStudent = async (req: Request) => {
  // console.log(req.file,req.body);
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);
  //   console.log(uploadedImage);
  if (uploadedImage) {
    req.body.profileImage = uploadedImage.secure_url;
  }

  const { academicDepartment, academicSemester, academicFaculty } = req.body.student;
  console.log('faculty id:', academicFaculty);
  // //   academic Department
  const academicDepartmentResponse = await AuthService.get(
    `/academic-departments/syncId=${academicDepartment}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.student.academicDepartment = academicDepartmentResponse.data[0].id;
  }

  // academic Faculty
  const academicFacultyResponse = await AuthService.get(
    `/academic-faculties/syncId=${academicFaculty}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.student.academicFaculty = academicFacultyResponse.data[0].id;
  }

  // academicSemester
  const academicSemesterResponse = await AuthService.get(
    `/academic-semesters/syncId=${academicSemester}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
    req.body.student.academicSemester = academicSemesterResponse.data[0].id;
  }

  const response: IGenericResponse = await AuthService.post('/users/create-student', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  // console.log(response);
  return response;
};

export const UserService = {
  createStudent
};
