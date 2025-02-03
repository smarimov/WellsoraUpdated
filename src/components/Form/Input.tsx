import { CompoundedComponent, IFormControl } from "@/types"
// import { translate } from "@/utils/i18n"
import clsx from "clsx"
import { ForwardedRef, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes, forwardRef, useRef, useState } from "react"
import { Controller, FieldValues } from "react-hook-form"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  wrapperClass?: string
  label?: string
  leftSection?: ReactNode
  rightSection?: ReactNode
  error?: string
  rows?: number
  required?: boolean
  isNumberField?: boolean
}

const filterNumericValue = (value: string) => String(value).replace(/[^\d.]/g, "")

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ className, rows, required, wrapperClass, isNumberField, label, leftSection, rightSection, error, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (isNumberField) {
        e.target.value = filterNumericValue(e.target.value)
      }
      if (props.onChange) {
        props.onChange(e as React.ChangeEvent<HTMLInputElement>)
      }
    }
    return (
      <div className={clsx("custom-input", className)}>
        {label != null && (
          <span className="field-label">
            {label}
            {required && <strong className="text-red-500 text-[10px]"> ＊</strong>}
          </span>
        )}
        <label className={clsx("custom-input__wrapper", wrapperClass, error != null && "border-red-500", props.disabled && "input__disabled")}>
          {leftSection}
          {rows == null ? (
            <input {...props} onChange={handleChange} ref={ref as ForwardedRef<HTMLInputElement>} />
          ) : (
            <textarea
              {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
              onChange={handleChange}
              rows={rows}
              ref={ref as ForwardedRef<HTMLTextAreaElement>}
            />
          )}
          {rightSection}
        </label>
        {error != null && (
          <ul>
            {error?.split("\n").map(m => (
              <li key={m} className="field-label__error">
                {m}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
) as CompoundedComponent<InputProps, HTMLInputElement | HTMLTextAreaElement, { Form: typeof FormInput; Debounced: typeof DebouncedInput }>

type IFormInputProps<T extends FieldValues> = IFormControl<T> &
  Omit<InputProps, "name"> & {
    validate?: (value: string, fieldValues: T) => boolean | string
  }
const FormInput = <T extends FieldValues>({ control, name, required, rules, validate, ...props }: IFormInputProps<T>) => {
  return (
    <Controller
      {...{
        control,
        name,
        required,
        rules: { required: { value: required ?? false, message: "This is requiered field." }, ...rules, validate }
      }}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...props}
          {...field}
          required={required}
          onChange={e => {
            field.onChange(e)
            props.onChange?.(e)
          }}
          onBlur={e => {
            field.onBlur()
            props.onBlur?.(e)
          }}
          error={error?.message}
          value={field.value ?? ""}
        />
      )}
    />
  )
}
const DebouncedInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>((props, ref) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const [value, setValue] = useState(props.value)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value)
    if (timerRef.current != null) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      props.onChange?.(e as React.ChangeEvent<HTMLInputElement>)
    }, 500)
  }
  return <Input {...props} value={value} onChange={handleChange} ref={ref} />
})
Input.Form = FormInput
Input.Debounced = DebouncedInput
