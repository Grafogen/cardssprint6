import React from 'react'
import { Card } from '@/components/card'
import { Typography } from '@/components/typography'
import { LoginForm } from '@/components/auth/login-form/login-form'
import s from './login.module.scss'
import { useForm } from 'react-hook-form'
import { FormValues, loginSchema } from '@/components/auth/login-form/authTypes'
import { zodResolver } from '@hookform/resolvers/zod'

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
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.card}>
      <Typography variant="h1" children="Sign in" />
      <form onSubmit={handleSubmit(onSubmit)}></form>
      <Typography variant="body2" children="Don't have an account?" />
      <Typography variant="link1" children="Sign up" />
    </Card>
  )
}
