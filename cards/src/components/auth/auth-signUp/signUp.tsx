import { Card } from '@/components/card'
import { Typography } from '@/components/typography'
import s from './signUp.module.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField } from '@/components/ui/textfield/textfield'
import { Button } from '@/components/ui/button'
import { z } from 'zod'

type SignUpProps = {
  onSubmit?: () => void
}

export const loginSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(3),
    confirmPassword: z.string().min(3),
  })
  .superRefine((data, ctx) => {
    if (data.confirmPassword != data.password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Password is not the same',
        path: ['confirmPassword'],
      })
    }
  })

export type FormValues = z.infer<typeof loginSchema>

export const SignUp = (props: SignUpProps) => {
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
          <TextField
            {...register('confirmPassword')}
            label={'Confirm Password'}
            errorMessage={errors.confirmPassword?.message}
            type="password"
          />
        </div>
        <Button type="submit" fullWidth className={s.button}>
          Sign in
        </Button>
      </form>
      <Typography variant="body2" children="Don't have an account?" className={s.caption} />
      <Typography variant="link1" children="Sign up" className={s.signUpLink} />
    </Card>
  )
}
