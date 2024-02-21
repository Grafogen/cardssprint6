import { CheckBox, CheckboxProps } from '@/components/checkbox'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

export type ControlledCheckboxProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<CheckboxProps, 'onChange' | 'value' | 'id'>

export const ControlledCheckbox = <TFieldValues extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  control,
  defaultValue,
  ...checkboxProps
}: ControlledCheckboxProps<TFieldValues>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
  })

  return (
    <CheckBox
      {...{
        onChange,
        checked: value,
        id: name,
        ...checkboxProps,
      }}
    />
  )
}
