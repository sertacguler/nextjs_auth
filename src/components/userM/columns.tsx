"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { UserModel } from "@/lib/features/apis/UserM/types/UserModel";

export const columns: ColumnDef<UserModel>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "User Name",
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      const lastname = row.getValue("lastname") as string;
      const fullName = `${name} ${lastname}`;
      return <div>{fullName}</div>;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "accountType",
    header: "AccountType",
  },
  {
    accessorKey: "isVerified",
    header: "IsVerified",
  },
  {
    accessorKey: "isHost",
    header: "IsHost",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
