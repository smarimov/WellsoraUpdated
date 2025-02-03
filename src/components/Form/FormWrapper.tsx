import { PropsWithChildren } from "react"
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form"

interface IFormWrapperProps<T extends FieldValues> extends PropsWithChildren {
  methods: UseFormReturn<T>
  onSubmit?: (data: T) => void
}
export const FormWrapper = <T extends FieldValues>({ methods, onSubmit, children }: IFormWrapperProps<T>) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit != null ? methods.handleSubmit(onSubmit) : void 0} noValidate autoComplete="off">
        {children}
      </form>
    </FormProvider>
  )
}
