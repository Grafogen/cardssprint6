import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { TextField } from '@/components/ui/textfield/textfield'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormValues, loginSchema } from '@/components/auth/login-form/authTypes'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'

export const LoginForm = () => {
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} label={'email'} errorMessage={errors.email?.message} />
      <TextField
        {...register('password')}
        label={'password'}
        errorMessage={errors.password?.message}
      />
      <ControlledCheckbox label={'remember me'} control={control} name={'rememberMe'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
