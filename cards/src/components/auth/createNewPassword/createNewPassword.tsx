import { Card } from '@/components/card'
import { Typography } from '@/components/typography'
import s from './createNewPassword.module.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField } from '@/components/ui/textfield/textfield'
import { Button } from '@/components/ui/button'
import { FormValues, loginSchema } from '@/components/auth/login-form/authTypes'

type ForgotPasswordProps = {
  onSubmit?: () => void
}

export const CreateNewPassword = (props: ForgotPasswordProps) => {
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.card}>
      <Typography variant="h1" children="Create new password" className={s.title} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form}>
          <TextField
            {...register('password')}
            label={'Password'}
            errorMessage={errors.password?.message}
            type="password"
          />
          <Typography
            variant="body2"
            children="Create new password and we will send you further instructions to email"
            className={s.ps}
          />
        </div>
        <Button type="submit" fullWidth className={s.button}>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
