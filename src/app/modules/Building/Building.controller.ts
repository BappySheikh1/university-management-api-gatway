import { Request, Response, NextFunction } from 'express';
import { BuildingService } from './Building.service';
import sendResponse from '../../../shared/response';

const insertIntoDataFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.insertIntoDataFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getAllFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getSingleFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneInDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.updateOneInDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.deleteByIdFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const BuildingController = {
  insertIntoDataFromDB,
  getAllFromDB,
  getSingleFromDB,
  updateOneInDB,
  deleteByIdFromDB
};
