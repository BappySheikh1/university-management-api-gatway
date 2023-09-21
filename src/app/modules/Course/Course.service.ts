import { IGenericResponse } from '../../../interfaces/common';
import { Request } from 'express';
import { CoreService as HttpService } from '../../../shared/axios';

const insertIntoFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post(`/courses`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get(`/courses`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getSingleFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/courses/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const updateIntoFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(`/courses/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const deleteIntoFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/courses`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const CourseService = {
  insertIntoFromDB,
  getAllFromDB,
  getSingleFromDB,
  updateIntoFromDB,
  deleteIntoFromDB
};
