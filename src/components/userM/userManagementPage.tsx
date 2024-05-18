"use client";

import { useCallback, useState } from "react";
import { PaginationState } from "@tanstack/react-table";
import { columns } from "./columns";
import { DataTable } from "@/components/customTable/data-table";
import { userApi } from "../../lib/features/apis/UserM/userApi";
import { UserModel } from "@/lib/features/apis/UserM/types/UserModel";

const UserManagementPage = () => {
  const [tableData, setTableData] = useState<UserModel[]>([]);

  const changePagination = useCallback(async (state: PaginationState) => {
    const response: UserModel[] = [];
    setTableData(response);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="py-5">
        <p>User Management</p>
      </div>
      <div className="py-1">
        <DataTable
          columns={columns}
          data={tableData}
          filterPlaceholderName="Filter emails..."
          filterHeaderName="email"
          changePagination={changePagination}
        />
      </div>
    </div>
  );
};
export default UserManagementPage;
