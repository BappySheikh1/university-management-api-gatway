import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';
import { Request } from 'express';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post(`/academic-departments`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get(`/academic-departments`, {
    params: req.params,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const AcademicDepartmentService = {
  insertIntoDB,
  getAllFromDB
};