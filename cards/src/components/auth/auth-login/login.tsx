import React from 'react'
import { Card } from '@/components/card'
import { Typography } from '@/components/typography'
import { LoginForm } from '@/components/auth/login-form/login-form'
import s from './login.module.scss'
import { useForm } from 'react-hook-form'
import { FormValues, loginSchema } from '@/components/auth/login-form/authTypes'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField } from '@/components/ui/textfield/textfield'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { Button } from '@/components/ui/button'

type LoginProps = {
  onSubmit?: () => void
}

export const Login = (props: LoginProps) => {
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.card}>
      <Typography variant="h1" children="Sign In" className={s.title} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form}>
          <TextField {...register('email')} label={'Email'} errorMessage={errors.email?.message} />
          <TextField
            {...register('password')}
            label={'Password'}
            errorMessage={errors.password?.message}
            type="password"
          />
        </div>
        <ControlledCheckbox
          label={'Remember me'}
          control={control}
          name={'rememberMe'}
          className={s.checkbox}
        />
        <Typography children="Forgot password?" variant="body2" className={s.recoverPasswordLink} />
        <Button type="submit" fullWidth className={s.button}>
          Sign in
        </Button>
      </form>
      <Typography variant="body2" children="Don't have an account?" className={s.caption} />
      <Typography variant="link1" children="Sign up" className={s.signUpLink} />
    </Card>
  )
}
