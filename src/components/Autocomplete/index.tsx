import { IFormControl, IOption, IParams, Nullable } from "@/types";
import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from "@floating-ui/react";
import clsx from "clsx";
import * as React from "react";
import { Controller, FieldValues } from "react-hook-form";
// import { Switch } from "../Switch"
import { AutocompleteChip } from "./Chip";
import "./style.sass";

// import { Api } from "@/Api"

// import { useGlobal } from "@/stores/global"
import { toCamelCase, TypeCheck } from "@/utils";
// import { currLang, translate } from "@/utils/i18n"
import { useQuery } from "@tanstack/react-query";
import { Icon } from "../Icon";
import { Button } from "../Button";

interface IAutocompleteProps<T extends string | number, M extends object> {
  value?: IOption<T, M> | IOption<T, M>[] | T | null;
  options: IOption<T, M>[];
  onSelect?: (value: Nullable<IOption<T, M> | IOption<T, M>[]>) => void;
  getOptionsLabel?: (option: IOption<T, M>) => string;
  renderOptions?: (
    option: IOption<T, M>,
    isSelected: boolean
  ) => React.ReactNode;
  disableCloseOnSelect?: boolean;
  label?: string;
  error?: string;
  ref?: React.ForwardedRef<HTMLInputElement>;
  className?: string;
  mutltiple?: boolean;
  getValue?: (option: IOption<T, M>) => string | undefined;
  required?: boolean;
  controlClass?: string;
  placeholder?: string;
  topSection?: React.ReactNode;
  bottomSection?: React.ReactNode;
  disabled?: boolean;
  onOpen?: () => void;
}
export const Autocomplete = <T extends string | number, M extends object>({
  value,
  options,
  onSelect,
  getOptionsLabel,
  renderOptions,
  disableCloseOnSelect = false,
  label,
  error,
  ref,
  getValue,
  mutltiple,
  required,
  controlClass,
  placeholder = "Select Option",
  topSection,
  bottomSection,
  disabled = false,
  onOpen,
}: IAutocompleteProps<T, M>) => {
  const [inputValue, setInputValue] = React.useState("");
  const [filterValue, setFilterValue] = React.useState<string | null>(null);
  const [selected, setSelected] =
    React.useState<Nullable<IOption<T, M> | IOption<T, M>[]>>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { refs, floatingStyles, context } = useFloating<HTMLElement>({
    placement: "bottom-start",
    open: isOpen,
    onOpenChange: (open) => {
      setIsOpen(open);
      if (open) onOpen?.();
    },
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({ padding: 10 }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${Math.min(availableHeight, 400)}px`,
            maxWidth: `${rects.reference.width}px`,
            width: "100%",
          });
        },
        padding: 10,
      }),
    ],
  });

  const click = useClick(context, { event: "mousedown" });
  const dismiss = useDismiss(context);

  const matchingOptions = React.useMemo(() => {
    if (inputValue.length === 0) return options;
    return options.filter((option) =>
      option.label.toLowerCase().includes(filterValue?.toLowerCase() ?? "")
    );
  }, [filterValue, options, inputValue]);

  React.useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  React.useEffect(() => {
    if (TypeCheck.isString(value) || TypeCheck.isNumber(value)) {
      const option = options.find((option) => option.value == value) ?? null;
      setSelected(option);
      setInputValue(option?.label ?? "");
    } else {
      setSelected(value ?? null);
      if (!Array.isArray(value)) setInputValue(value?.label ?? "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, options]);
  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    click,
  ]);
  const deleteOption = (option: IOption<T, M>) => {
    const opt = (selected as IOption<T, M>[]).filter(
      (opt) => opt.value !== option.value
    );
    setSelected(opt);
    onSelect?.(opt);
  };

  const handleClear = () => {
    if (Array.isArray(selected)) {
      const clearedSelection = mutltiple ? [] : null;
      onSelect?.(clearedSelection);
      setSelected(clearedSelection);
      setInputValue("");
    }
  };

  const handleSelectAll = () => {
    const allOptions = options;
    onSelect?.(allOptions);
    setSelected(allOptions);

    if (!mutltiple) {
      const firstOption = allOptions[0];
      setInputValue(firstOption?.label ?? "");
    }
  };

  return (
    <div className="autocomplete">
      {label && (
        <span className="field-label">
          {label}{" "}
          {required && (
            <strong className="text-red-500 text-[10 px]"> ＊</strong>
          )}
        </span>
      )}
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        className={clsx(
          "autocomplete__control",
          error && "border-red-500",
          controlClass,
          disabled && "autocomplete__disabled"
        )}
        style={{ maxWidth: "100%" }}
      >
        {mutltiple && (
          <div
            className="autocomplete__control-tags"
            style={{ maxWidth: "100%" }}
          >
            {(selected as IOption<T, M>[])?.map((option) => (
              <AutocompleteChip
                key={option.value}
                option={option}
                onDelete={deleteOption}
                getValue={getValue}
              />
            ))}
            <input
              style={{ width: "auto" }}
              ref={inputRef}
              placeholder={placeholder}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.currentTarget.value);
                setFilterValue(e.currentTarget.value);
              }}
            />
          </div>
        )}
        {!mutltiple && (
          <input
            disabled={disabled}
            ref={inputRef}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.currentTarget.value);
              setFilterValue(e.currentTarget.value);
            }}
          />
        )}
        {Array.isArray(selected)
          ? selected.length > 0
          : selected != null && (
              <div
                className="autocomplete__clear"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={() => {
                  setSelected(null);
                  setIsOpen(true);
                  onSelect?.(null);
                  if (!mutltiple) setInputValue("");
                }}
              >
                <svg width="20" height="20" fill="none">
                  <path
                    d="M16.3337 4.16602L4.66699 15.8327M4.66699 4.16602L16.3337 15.8327"
                    stroke="#343F5B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
        <div
          className={clsx(
            "autocomplete__dropdown-icon",
            disabled && "icon__disabled"
          )}
        >
          <Icon
            icon="ArrowRight01"
            className={clsx(
              "rotate-90",
              isOpen && !disabled && "rotate-[-90deg]"
            )}
          />
        </div>
      </div>
      {error != null && <span className="field-label__error">{error}</span>}
      {isOpen && !disabled && (
        <FloatingPortal root={document.getElementById("root")}>
          <div
            className="autocomplete__list"
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
              maxHeight: 300,
            }}
            {...getFloatingProps()}
          >
            {mutltiple && (
              <div className="flex gap-3 p-2 pt-0">
                <Button color="inherit" onClick={handleSelectAll}>
                  {/* {translate("select_all")} */}
                  Select All
                </Button>
                {Array.isArray(selected) && selected.length > 0 && (
                  <Button color="inherit" onClick={handleClear}>
                    {/* {translate("clear")} */}
                    Clear
                  </Button>
                )}
                {topSection && topSection}
              </div>
            )}
            {!mutltiple && topSection && (
              <div className="flex gap-3 p-2"> {topSection}</div>
            )}
            <div>
              {bottomSection && (
                <div className="p-1.5 flex gap-3 rounded-lg mb-1">
                  {bottomSection}
                </div>
              )}
              {matchingOptions.map((option, index) => {
                const isActive = Array.isArray(selected)
                  ? selected.some((opt) => opt.value === option.value)
                  : selected?.value === option.value;
                return (
                  <div
                    key={index}
                    className={clsx(
                      "autocomplete__list-item",
                      isActive && "autocomplete__list-item--active"
                    )}
                    onClick={() => {
                      const old = mutltiple
                        ? [...((value as IOption<T, M>[]) ?? []), option]
                        : option;
                      const filteredOptions =
                        Array.isArray(old) && isActive
                          ? old.filter((opt) => opt.value !== option.value)
                          : old;
                      onSelect?.(filteredOptions);
                      setSelected(filteredOptions);
                      setFilterValue(null);
                      if (!mutltiple)
                        setInputValue(getValue?.(option) ?? option.label);
                      if (!disableCloseOnSelect && !mutltiple) setIsOpen(false);
                    }}
                  >
                    {renderOptions?.(option, isActive) ??
                      getOptionsLabel?.(option) ??
                      (mutltiple ? (
                        <div className="flex items-center gap-3">
                          {/* <Switch type="checkbox" checked={isActive} /> {option.label} */}
                          Switch button
                        </div>
                      ) : (
                        option.label
                      ))}
                  </div>
                );
              })}
            </div>
          </div>
        </FloatingPortal>
      )}
    </div>
  );
};

const FormAutocomplete = <
  T extends FieldValues,
  A extends string | number,
  M extends object
>({
  control,
  name,
  rules,
  required,
  defaultValue,
  ...props
}: IFormControl<T> &
  IAutocompleteProps<A, M> & { defaultValue?: IOption<A> }) => {
  return (
    <Controller
      {...{
        control,
        name,
        rules: {
          required: {
            value: required ?? false,
            message: "This field is required",
          },
        },
      }}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <Autocomplete
            {...props}
            value={value ?? null}
            onSelect={(value) => {
              onChange(value);
              props.onSelect?.(value);
            }}
            error={error?.message}
            required={required}
          />
        );
      }}
    />
  );
};
// const FormReferenceAutocomplete = <F extends FieldValues, T extends string | number, M extends object>({
//   control,
//   name,
//   rules,
//   required,
//   reference,
//   defaultOptions,
//   ...props
// }: IFormControl<F> & Omit<IAutocompleteProps<T, M>, "options"> & { reference: string; defaultOptions?: IOption<T, M>[] }) => {
//   const { data } = useQuery({
//     queryKey: [`REFERENCE_${reference.toUpperCase()}`],
//     queryFn: Api.fetchReferenceOptions(reference)
//   })

//   const options = React.useMemo(
//     () =>
//       data?.values.map(value => ({
//         label: value.value_name_lang[currLang],
//         value: String(value.value_id)
//       })) ?? [],
//     [data]
//   )

//   return (
//     <Controller
//       {...{ control, name, rules: { required: { value: required ?? false, message: translate("this-field-is-required") } } }}
//       render={({ field: { value, onChange }, fieldState: { error } }) => (
//         <Autocomplete
//           {...props}
//           options={[...(defaultOptions ?? []), ...(options as IOption<T, M>[])]}
//           value={value ?? null}
//           onSelect={value => {
//             onChange(value)
//             props.onSelect?.(value)
//           }}
//           error={error?.message}
//           required={required}
//         />
//       )}
//     />
//   )
// }

// const FormSettingsAutocomplete = <F extends FieldValues, T extends string | number, M extends object>({
//   control,
//   name,
//   rules,
//   required,
//   key_sett,
//   ...props
// }: IFormControl<F> & Omit<IAutocompleteProps<T, M>, "options"> & { key_sett: string }) => {
//   const storeRecords = useGlobal(state => state[toCamelCase(key_sett) as keyof typeof state])

//   const options = React.useMemo(() => {
//     if (Array.isArray(storeRecords)) {
//       return storeRecords.map(value => ({
//         label: value?.name_lang?.[currLang] ?? "Unknown",
//         value: String(value?.id ?? "")
//       }))
//     } else if (TypeCheck.isObject(storeRecords) && storeRecords !== null) {
//       return Object.values(storeRecords).map(value => ({
//         label: value?.name_lang?.[currLang] ?? "Unknown",
//         value: String(value?.id ?? "")
//       }))
//     }
//     return []
//   }, [storeRecords])

//   return (
//     <Controller
//       {...{ control, name, rules: { required: { value: required ?? false, message: translate("this-field-is-required") } } }}
//       render={({ field: { value, onChange }, fieldState: { error } }) => (
//         <Autocomplete
//           {...props}
//           options={options as IOption<T, M>[]}
//           value={value ?? null}
//           onSelect={value => {
//             onChange(value)
//             props.onSelect?.(value)
//           }}
//           error={error?.message}
//           required={required}
//         />
//       )}
//     />
//   )
// }

// const FormComboAutocomplete = <F extends FieldValues, T extends string | number, M extends object>({
//   control,
//   name,
//   rules,
//   required,
//   params,
//   docTypeId,
//   ...props
// }: IFormControl<F> & Omit<IAutocompleteProps<T, M>, "options"> & { params: IParams; docTypeId?: number }) => {
//   const { data } = useQuery({
//     queryKey: [`COMBO_${params?.url.toUpperCase()}`],
//     queryFn: Api.fetchComboOptions(params.url)
//   })
//   const options = React.useMemo(
//     () =>
//       data
//         ?.filter(val => (docTypeId != null && val.document_type_id ? val.document_type_id === docTypeId : true))
//         .map(option => ({
//           label: option[params.label],
//           value: String(option[params.value])
//         })) ?? [],
//     [data, params, docTypeId]
//   )
//   return (
//     <Controller
//       {...{ control, name, rules: { required: { value: required ?? false, message: translate("this-field-is-required") } } }}
//       render={({ field: { value, onChange }, fieldState: { error } }) => {
//         return (
//           <Autocomplete
//             {...props}
//             options={options as IOption<T, M>[]}
//             value={value ?? null}
//             onSelect={value => {
//               onChange(value)
//               props.onSelect?.(value)
//             }}
//             error={error?.message}
//             required={required}
//           />
//         )
//       }}
//     />
//   )
// }

// Autocomplete.Settings = FormSettingsAutocomplete
Autocomplete.Form = FormAutocomplete;
// Autocomplete.Reference = FormReferenceAutocomplete
// Autocomplete.Combo = FormComboAutocomplete
