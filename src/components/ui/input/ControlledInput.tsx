import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '.'

type ControlledInputProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<InputProps, 'name' | 'onChange' | 'value'>

export const ControlledInput = <T extends FieldValues>({
  control,
  shouldUnregister,
  ...rest
}: ControlledInputProps<T>) => {
  const {
    field: { onChange, ref, value },
  } = useController({
    control,
    disabled: rest.disabled,
    name: rest.name,
    shouldUnregister,
  })

  return <Input {...rest} onChange={onChange} ref={ref} value={value} />
}
