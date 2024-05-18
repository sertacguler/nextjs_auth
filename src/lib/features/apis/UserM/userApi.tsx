import { AxiosResponse } from "axios";
import axiosInstance from "../../../../utils/axiosInstance";
import { PaginationState } from "@tanstack/react-table";
import { UserModel } from "@/lib/features/apis/UserM/types/UserModel";

//users/all?limit=10&offset=0
export const userApi = {
  async getUsers(state: PaginationState): Promise<UserModel[]> {
    const response: any = "";
    return response.data;
  },
};
