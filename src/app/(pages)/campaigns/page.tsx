import { Payment, columns } from "./columns";
import { DataTable } from "@/components/customTable/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      discount: 10,
      status: "pending",
      code: "ELN-101",
    },
    {
      id: "2",
      discount: 15,
      status: "processing",
      code: "TRP-155",
    },
    {
      id: "3",
      discount: 10,
      status: "failed",
      code: "INN-198",
    },
    {
      id: "4",
      discount: 5,
      status: "success",
      code: "ARD-102",
    },
    // ...
  ];
}
const Campaigns = async () => {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={data}
        filterPlaceholderName="Filter codes..."
        filterHeaderName="code"
      />
    </div>
  );
};

export default Campaigns;
