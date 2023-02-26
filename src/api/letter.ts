import axios, { AxiosResponse } from "axios";
import { ICreatedPostLetter, IPostLetter } from "../interfaces/postLetter";
import { API_ENDPOINTS } from "./URL";

export const axiosInstance = axios.create({
  baseURL: API_ENDPOINTS.BASE,
  timeout: 1000,
});

export const getAllLetters = async (): Promise<Array<IPostLetter>> => {
  const data: AxiosResponse<
    Array<IPostLetter>,
    unknown
  > = await axiosInstance.get(API_ENDPOINTS.LETTER);
  return data.data;
};

export const getLetter = async (id: string): Promise<IPostLetter> => {
  const data: AxiosResponse<IPostLetter, unknown> = await axiosInstance.get(
    API_ENDPOINTS.LETTER + `/${id}`
  );
  return data.data;
};

export const createLetter = async (
  letter: ICreatedPostLetter
): Promise<string> => {
  const data: AxiosResponse<ICreatedPostLetter, unknown> =
    await axiosInstance.post(API_ENDPOINTS.LETTER, letter);
  return data.statusText;
};

export const deleteLetter = async (id: string): Promise<IPostLetter> => {
  const data: AxiosResponse<IPostLetter, unknown> = await axiosInstance.delete(
    API_ENDPOINTS.LETTER + `/${id}`
  );
  return data.data;
};
