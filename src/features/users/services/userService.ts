import api from "../../../api/axios.ts";
import { User, CreateUserDto, UpdateUserDto } from "../types/User";

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>("/Users");
  return response.data;
};

export const getUserById = async (id: number): Promise<User> => {
  const response = await api.get<User>(`/Users/${id}`);
  return response.data;
};

export const createUser = async (user: CreateUserDto): Promise<User> => {
  const response = await api.post<User>("/Users", user);
  return response.data;
};

export const updateUser = async (id: number, user: UpdateUserDto): Promise<void> => {
  await api.put(`/Users/${id}`, user);
};

export const deleteUser = async (id: number): Promise<void> => {
  await api.delete(`/Users/${id}`);
};