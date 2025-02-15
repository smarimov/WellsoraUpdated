import { IFormControl } from "@/types";
import Autocomplete from "react-google-autocomplete";
import { Controller, FieldValues } from "react-hook-form";
interface IProps {
  onPlaceSelected: (selected: google.maps.places.PlaceResult) => void;
}

const apiKey = import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY;

export const CustomGoogleAutoComplete = <T extends FieldValues>(
  props: IFormControl<T> & IProps
) => {
  const { control, name, onPlaceSelected } = props;
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: "Select Your Service Location Through Autocomplete",
      }}
      render={({ field, fieldState }) => (
        <div>
          {fieldState.error && (
            <div style={{ color: "red" }}>{fieldState.error.message}</div>
          )}
          <Autocomplete
            {...field}
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "4px",
              outline: "none",
              border: fieldState.error ? "1px solid red" : "1px solid #919EAB",
              fontSize: "1rem",
              fontWeight: 400,
              paddingLeft: "10px",
              zIndex: 10000,
            }}
            apiKey={apiKey}
            onPlaceSelected={(selected) => onPlaceSelected(selected)}
            options={{
              types: ["geocode", "establishment"],
              componentRestrictions: { country: "us" },
            }}
          />
        </div>
      )}
    />
  );
};
