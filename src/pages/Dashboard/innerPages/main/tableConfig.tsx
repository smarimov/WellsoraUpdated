// import { ITableHead } from "@/Components/Table"

import Label from "@/components/Label";
import { ITableHead } from "@/components/Table";
import { TPlan } from "@/context/PlanContext";
import { formatAmericanDate, formatTimeAmerican } from "@/utils";
import { COLOR_DIF } from "@/utils/colorMapping";

export const DASHBOARD_LIST = (): ITableHead<TPlan>[] => [
  // {
  //   dataKey: "id",
  //   label: "id"
  // },

  {
    dataKey: "date",
    label: "Scheduled date",
    render: (data) => (
      <>
        <p className="text-base font-medium">
          {formatAmericanDate(data.dateTime)}
        </p>
        <span className="text-base text-[#B4BAC5] font-medium">
          {formatTimeAmerican(data.dateTime)}
        </span>
      </>
    ),
  },

  {
    dataKey: "appointmentName",
    label: "Appointment",
    render: (data) => (
      <div className="flex flex-col min-w-[280px] ">
        <span className="text-base font-medium">{data.appointmentName}</span>
        <span className="text-base text-[#B4BAC5] font-medium">
          {data.location}
        </span>
      </div>
    ),
  },
  {
    dataKey: "service",
    label: "Services",
    render: (data) => (
      <div className="max-w-[100px] w-full">
        <p className="text-base font-medium ">{data.service}</p>
      </div>
    ),
  },
  {
    dataKey: "firstName",
    label: "Caring",
    render: (data) => (
      <Label
        label={`${data.firstName} ${data.lastName}`}
        color={COLOR_DIF[data.status]}
        size="md"
        className=" w-fit"
      />
    ),
  },

  {
    dataKey: "actions",
    label: "Actions",
  },
];
