import { useController, useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { TextField } from '@/components/ui/textfield/textfield'
import Checkbox from '@/components/checkbox/checkbox'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { control, handleSubmit, register } = useForm<FormValues>()

  const {
    field: { value, onChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} label={'email'} />
      <TextField {...register('password')} label={'password'} />
      <Checkbox onClickChanged={onChange} checked={value} label={'remember me'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
