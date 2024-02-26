import { Card } from '@/components/card'
import { Typography } from '@/components/typography'
import s from './forgotPassword.module.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField } from '@/components/ui/textfield/textfield'
import { Button } from '@/components/ui/button'
import { FormValues, loginSchema } from '@/components/auth/login-form/authTypes'

type ForgotPasswordProps = {
  onSubmit?: () => void
}

export const ForgotPassword = (props: ForgotPasswordProps) => {
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
      <Typography variant="h1" children="Forgot your password?" className={s.title} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form}>
          <TextField {...register('email')} label={'Email'} errorMessage={errors.email?.message} />
          <Typography
            variant="body2"
            children="Enter your email address and we will send you further instructions "
            className={s.ps}
          />
        </div>
        <Button type="submit" fullWidth className={s.button}>
          Send Instructions
        </Button>
      </form>
      <Typography
        variant="body2"
        children="Did you remember your password?"
        className={s.caption}
      />
      <Typography variant="link1" children="Try logging in" className={s.signUpLink} />
    </Card>
  )
}
