import { Autocomplete as autocompolete } from "@/components/Autocomplete";
import { Button } from "@/components/Button";
import { Input } from "@/components/Form";
import { FormWrapper } from "@/components/Form/FormWrapper";
import { IOption } from "@/types";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Plan, TCreatePlan, TStatus } from "../api";
import { CustomGoogleAutoComplete } from "./CustomGoogleAutoComplete";

export type AppointmentForm = {
  appointmentName: string;
  firstName: string;
  lastName: string;
  location: string;
  services: IOption<string>;
  status: TStatus;
  time: string;
  date: string;
};

interface NewPlanFormProps {
  onClose: VoidFunction;
  sendingData: (data: TCreatePlan) => void;
  currentPlan: Plan | null;
}
const NewPlanForm = ({
  onClose,
  sendingData,
  currentPlan,
}: NewPlanFormProps) => {
  const [options, setOptions] = useState<IOption[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLocationSelect = (selected: google.maps.places.PlaceResult) => {
    const { formatted_address } = selected;
    setValue("location", formatted_address || "");
  };

  const appointmentForm = useForm<AppointmentForm>({
    defaultValues: {
      appointmentName: "",
      firstName: "",
      lastName: "",
      location: "",
      status: "New",
    },
  });
  const { control, watch, setValue, reset } = appointmentForm;
  const selectedStatus = watch("status");

  const onSubmit = (data: AppointmentForm) => {
    const { location, services, date, time, ...rest } = data;

    if (!date || !time) {
      return;
    }

    const finalData: TCreatePlan = {
      ...rest,
      date,
      time,
      location: location,
      services: services.value,
    };

    sendingData(finalData);
  };

  useEffect(() => {
    if (currentPlan != null) {
      setValue("time", currentPlan.time);
      setValue("date", currentPlan.date);
      setValue("firstName", currentPlan.firstName);
      setValue("lastName", currentPlan.lastName);
      setValue("location", currentPlan.location);
      setValue("appointmentName", currentPlan.appointmentName);
      setValue("services", {
        label: currentPlan.services,
        value: currentPlan.services,
      });
      setValue("status", currentPlan.status);
    }
  }, [currentPlan, setValue]);
  return (
    <FormWrapper methods={appointmentForm} onSubmit={onSubmit}>
      <div className=" min-h-[550px] p-10 px-5 flex flex-col  mx-auto gap-6">
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
                variant={selectedStatus === "New" ? "contained" : "outline"}
                className="w-full"
                onClick={() => field.onChange("New")}
              >
                New
              </Button>
              <Button
                color="primary"
                variant={
                  selectedStatus === "In Progress" ? "contained" : "outline"
                }
                className="w-full"
                onClick={() => field.onChange("In Progress")}
              >
                In progress
              </Button>
              <Button
                color="primary"
                variant={
                  selectedStatus === "Resolved" ? "contained" : "outline"
                }
                className="w-full"
                onClick={() => field.onChange("Resolved")}
              >
                Resolved
              </Button>
            </div>
          )}
        />

        <CustomGoogleAutoComplete
          {...{ control, name: "location" }}
          onPlaceSelected={(selected) => handleLocationSelect(selected)}
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
          name="services"
          placeholder="Select service..."
          options={[
            { label: "Transport", value: "Transport" },
            { label: "Support", value: "Support" },
            { label: "Post visit", value: "Post Visit" },
            { label: "Physical assistance", value: "Physical Assistance" },
            {
              label: "Health monitor",
              value: "Health Monitor",
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
