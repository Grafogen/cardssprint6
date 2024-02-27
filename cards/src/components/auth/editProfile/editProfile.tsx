import React from 'react'
import { Card } from '@/components/card'
import s from './editProfile.module.scss'
import { Typography } from '@/components/typography'
import Camera from '@/svgs/camera'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField } from '@/components/ui/textfield/textfield'
import { z } from 'zod'
import { Button } from '@/components/ui/button'

type EditProfileProps = {
  avatar?: string
  nickName?: string
}

export const loginSchema = z.object({
  nickName: z.string().min(2, 'Too short!'),
})

type FormValues = z.infer<typeof loginSchema>

export const EditProfile = ({ avatar, nickName }: EditProfileProps) => {
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
    <div>
      <Card className={s.card}>
        <Typography className={s.title} children="Personal Information" variant="h1" />
        <div className={s.picture}>
          {avatar ? <img src={avatar} alt={'avatar'}></img> : <Camera />}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            defaultValue={nickName}
            label={'NickName'}
            {...register('nickName')}
            errorMessage={errors.nickName?.message}
          />
          <Button type="submit" fullWidth children={'Save Changes'} />
        </form>
      </Card>
    </div>
  )
}
