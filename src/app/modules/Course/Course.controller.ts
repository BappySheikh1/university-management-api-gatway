import sendResponse from '../../../shared/response';
import { CourseService } from './Course.service';
import { Request, Response, NextFunction } from 'express';

const insertIntoFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.insertIntoFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getAllFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getSingleFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateIntoFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.updateIntoFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteIntoFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.deleteIntoFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const CourseController = {
  insertIntoFromDB,
  getAllFromDB,
  getSingleFromDB,
  updateIntoFromDB,
  deleteIntoFromDB
};
