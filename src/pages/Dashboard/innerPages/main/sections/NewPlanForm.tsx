import { Autocomplete as autocompolete } from "@/components/Autocomplete";
import { Button } from "@/components/Button";
import { Input } from "@/components/Form";
import { FormWrapper } from "@/components/Form/FormWrapper";
import { TPlan, TStatus } from "@/context/PlanContext";
import { IOption } from "@/types";
import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Autocomplete from "react-google-autocomplete";

export type AppointmentForm = {
  appointmentName: string;
  dateTime?: string;
  firstName: string;
  lastName: string;
  location: IOption<string>;
  service: IOption<string>;
  status: TStatus;
  time: string;
  date: string;
  // document_status_id?: IOption<string>
};

interface NewPlanFormProps {
  onClose: VoidFunction;
  sendingData: (data: Omit<TPlan, "id">) => void;
  currentPlan: TPlan | null;
}
const NewPlanForm = ({
  onClose,
  sendingData,
  currentPlan,
}: NewPlanFormProps) => {
  const [options, setOptions] = useState<IOption[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const appointmentForm = useForm<AppointmentForm>({
    defaultValues: {
      appointmentName: "",
      dateTime: "",
      firstName: "",
      lastName: "",
      // location: "",
      status: "new",
    },
  });
  const { control, watch, setValue, reset } = appointmentForm;
  const selectedStatus = watch("status");

  const onSubmit = (data: AppointmentForm) => {
    const { location, service, date, time, ...rest } = data;

    if (!date || !time) {
      return;
    }
    // Create ISO dateTime format
    const dateTime = new Date(`${date}T${time}:00`).toISOString();

    const finalData: Omit<TPlan, "id"> = {
      ...rest,
      location: location.value,
      service: service.value,
      dateTime, // Convert and replace dateTime field
    };
    sendingData(finalData);

    console.log("Final Appointment Data Submitted:", finalData);
  };

  // useEffect(() => {
  //   loadGoogleMapsScript(() => {
  //     setIsLoaded(true);
  //   });
  // }, []);

  useEffect(() => {
    if (currentPlan != null) {
      const dateTime = new Date(currentPlan.dateTime);
      const formattedDate = dateTime.toISOString().split("T")[0];
      const formattedTime = dateTime.toTimeString().slice(0, 5);
      setValue("time", formattedTime);
      setValue("date", formattedDate);
      setValue("firstName", currentPlan.firstName);
      setValue("lastName", currentPlan.lastName);
      setValue("location", {
        label: currentPlan.location,
        value: currentPlan.location,
      });
      setValue("appointmentName", currentPlan.appointmentName);
      setValue("service", {
        label: currentPlan.service,
        value: currentPlan.service,
      });
      setValue("status", currentPlan.status);
    }
  }, [currentPlan, setValue]);
  return (
    <FormWrapper methods={appointmentForm} onSubmit={onSubmit}>
      <div className="max-w-[500px] min-h-[550px] p-10 px-0 flex flex-col  mx-auto gap-6">
        <div className="flex gap-3">
          <Input.Form
            control={control}
            name="firstName"
            placeholder="First name"
            className="w-full"
            required
          />
          <Input.Form
            control={control}
            name="lastName"
            placeholder="Last name"
            className="w-full"
            required
          />
        </div>
        <Input.Form
          control={control}
          name="appointmentName"
          placeholder="Appointment name (Eg. dental cleaning, heart surgery)"
          className="w-full"
          required
        />
        <Controller
          control={control}
          name="status"
          render={({ field }) => (
            <div className="flex gap-3">
              <Button
                color="primary"
                variant={selectedStatus === "new" ? "contained" : "outline"}
                className="w-full"
                onClick={() => field.onChange("new")}
              >
                New
              </Button>
              <Button
                color="primary"
                variant={
                  selectedStatus === "progress" ? "contained" : "outline"
                }
                className="w-full"
                onClick={() => field.onChange("progress")}
              >
                In progress
              </Button>
              <Button
                color="primary"
                variant={
                  selectedStatus === "resolved" ? "contained" : "outline"
                }
                className="w-full"
                onClick={() => field.onChange("resolved")}
              >
                Resolved
              </Button>
            </div>
          )}
        />
        {/* <Autocomplete.Form
          control={control}
          required
          name="location"
          placeholder="Select location..."
          onOpen={fetchGoogleMapsLocations}
          options={options}
        /> */}
        {/* <Autocomplete
          apiKey="AIzaSyAw3cYpdPTYMQ1iLd85W2PeZu-zHz72gMM"
          style={{ width: "90%" }}
          onPlaceSelected={(place) => {
            console.log(place);
          }}
          options={{
            types: ["(regions)"],
            componentRestrictions: { country: "ru" },
          }}
          defaultValue="Amsterdam"
        /> */}
        <autocompolete.Form
          control={control}
          required
          name="location"
          placeholder="Select location..."
          options={[
            {
              label: "3900 City Ave, Philadelphia, PA 19131, USA",
              value: "3900 City Ave, Philadelphia, PA 19131, USA",
            },
            {
              label: "3900 Woodland Ave, Philadelphia, PA 19104, USA",
              value: "3900 Woodland Ave, Philadelphia, PA 19104, USA",
            },
            {
              label: "455 Devon Park Dr, Wayne, PA 19087, USA",
              value: "455 Devon Park Dr, Wayne, PA 19087, USA",
            },
            {
              label: "381 W Dekalb Pike, King of Prussia, PA 19406, USA",
              value: "381 W Dekalb Pike, King of Prussia, PA 19406, USA",
            },
            {
              label: "23 Carland Rd, Conshohocken, PA 19428, USA",
              value: "23 Carland Rd, Conshohocken, PA 19428, USA",
            },
          ]}
        />
        <div className="flex gap-3">
          <Input.Form
            control={control}
            name="date"
            placeholder="Date"
            type="date"
            className="w-full"
            required
          />

          <Input.Form
            placeholder="Time"
            type="time"
            control={control}
            name="time"
            className="max-w-[130px] w-full"
            required
          />
        </div>
        <autocompolete.Form
          control={control}
          required
          name="service"
          placeholder="Select service..."
          options={[
            { label: "Transport", value: "Transport" },
            { label: "Support", value: "Support" },
            { label: "Post visit", value: "Post visit" },
            { label: "Physical assistance", value: "Physical assistance" },
            {
              label: "Health monitor",
              value: "Health monitor",
            },
          ]}
        />
        <div className="flex items-end justify-end flex-1 gap-3">
          <Button
            color="primary"
            variant="outline"
            className="w-full max-w-[170px] "
            onClick={() => {
              onClose();
              reset();
            }}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            className="w-full max-w-[170px]"
            type="submit"
          >
            Save
          </Button>
        </div>
      </div>
    </FormWrapper>
  );
};

export default NewPlanForm;
function loadGoogleMapsScript(arg0: () => void) {
  throw new Error("Function not implemented.");
}
