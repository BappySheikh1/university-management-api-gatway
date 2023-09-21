import { NextFunction, Request, Response } from 'express';
import { AcademicDepartmentService } from './academicDepartment.service';
import sendResponse from '../../../shared/response';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.insertIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req:Request,res:Response, next: NextFunction)=>{
  try {
     const result = await AcademicDepartmentService.getAllFromDB(req)

     sendResponse(res, result)
  } catch (error) {
     next(error)
  }
}

export const academicDepartmentController = {
  insertIntoDB
};
