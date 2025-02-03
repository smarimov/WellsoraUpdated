import { Autocomplete } from "@/components/Autocomplete";
import { Button } from "@/components/Button";
import { Input } from "@/components/Form";
import { FormWrapper } from "@/components/Form/FormWrapper";
import { TPlan, TStatus } from "@/context/PlanContext";
import { IOption } from "@/types";
import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

export type AppointmentForm = {
  appointmentName: string;
  dateTime?: string;
  firstName: string;
  lastName: string;
  location: string;
  service: IOption<string>;
  status: TStatus;
  time: string;
  date: string;
  // document_status_id?: IOption<string>
};

interface NewPlanFormProps {
  onClose: VoidFunction;
  sendingData: (data: Omit<TPlan, "id">) => void;
}
const NewPlanForm = ({ onClose, sendingData }: NewPlanFormProps) => {
  const [options, setOptions] = useState<IOption[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const appointmentForm = useForm<AppointmentForm>({
    defaultValues: {
      appointmentName: "",
      dateTime: "",
      firstName: "",
      lastName: "",
      location: "",
      status: "pending",
    },
  });
  const { control, watch } = appointmentForm;
  const selectedStatus = watch("status");

  const onSubmit = (data: AppointmentForm) => {
    const { service, date, time, ...rest } = data;

    // if (!date || !time) {
    //   alert("Please select both date and time.");
    //   return;
    // }

    // Create ISO dateTime format
    const dateTime = new Date(`${date}T${time}:00`).toISOString();

    const finalData: Omit<TPlan, "id"> = {
      ...rest,
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

  const fetchGoogleMapsLocations = useCallback(() => {
    if (!isLoaded || !(window as any).google) {
      console.error("Google Maps API not loaded");
      return;
    }

    const google = window.google;

    const service = new google.maps.places.AutocompleteService();

    service.getPlacePredictions(
      {
        input: "",
        types: ["geocode"],
        componentRestrictions: { country: "US" },
      },
      (
        predictions: google.maps.places.AutocompletePrediction[] | null,
        status: google.maps.places.PlacesServiceStatus
      ) => {
        if (
          status === google.maps.places.PlacesServiceStatus.OK &&
          predictions
        ) {
          const newOptions = predictions.map((place) => ({
            label: place.description,
            value: place.place_id, // Store place_id for fetching details later
          }));
          setOptions(newOptions);
        } else {
          console.warn("No locations found");
          setOptions([]);
        }
      }
    );
  }, [isLoaded]);

  return (
    <FormWrapper methods={appointmentForm} onSubmit={onSubmit}>
      <div className="max-w-[500px] min-h-[600px] p-5 px-0 flex flex-col  mx-auto gap-5">
        <p className="text-2xl font-bold text-[#0F1527] text-center">
          Create New Appointment Form
        </p>
        <div className="flex gap-3">
          <Input.Form
            control={control}
            name="firstName"
            placeholder="First Name"
            className="w-full"
            required
          />
          <Input.Form
            control={control}
            name="lastName"
            placeholder="Last Name"
            className="w-full"
            required
          />
        </div>
        <Input.Form
          control={control}
          name="appointmentName"
          placeholder="Appointment Name (Eg. dental cleaning, heart surgery)"
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
                variant={selectedStatus === "pending" ? "contained" : "outline"}
                className="w-full"
                onClick={() => field.onChange("pending")}
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
                In Progress
              </Button>
              <Button
                color="primary"
                variant={selectedStatus === "success" ? "contained" : "outline"}
                className="w-full"
                onClick={() => field.onChange("success")}
              >
                Resolved
              </Button>
            </div>
          )}
        />

        <Autocomplete.Form
          control={control}
          required
          name="location"
          placeholder="Select Location..."
          onOpen={fetchGoogleMapsLocations}
          options={options}
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
        <Autocomplete.Form
          control={control}
          required
          name="service"
          placeholder="Select Service..."
          options={[
            { label: "Transport", value: "Transport" },
            { label: "Support", value: "Support" },
            { label: "Post Visit", value: "Post Visit" },
            { label: "Physical Assistance", value: "Physical Assistance" },
            {
              label: "Health Monitor",
              value: "Health Monitor",
            },
          ]}
        />

        <div className="flex items-end justify-end flex-1 gap-3">
          <Button
            color="primary"
            variant="outline"
            className="w-full max-w-[170px] "
            onClick={onClose}
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
