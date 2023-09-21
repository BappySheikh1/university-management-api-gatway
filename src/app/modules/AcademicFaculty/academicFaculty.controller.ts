import { Request, Response, NextFunction } from 'express';
import { AcademicFacultyService } from './academicFaculty.service';
import sendResponse from '../../../shared/response';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.insertIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getAllFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getSingleData(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.updateFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.deleteFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const academicFacultyController = {
  insertIntoDB,
  getAllFromDB,
  getSingleData,
  updateFromDB,
  deleteFromDB
};
