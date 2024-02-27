import React from 'react'
import { Card } from '@/components/card'
import s from './personalInfo.module.scss'
import { Typography } from '@/components/typography'
import Camera from '@/svgs/camera'
import { z } from 'zod'
import { Button } from '@/components/ui/button'

type EditProfileProps = {
  avatar?: string
  nickName?: string
}

export const PersonalInfo = ({ avatar, nickName }: EditProfileProps) => {
  return (
    <div>
      <Card className={s.card}>
        <Typography className={s.title} children="Personal Information" variant="h1" />
        <div className={s.picture}>
          {avatar ? <img src={avatar} alt={'avatar'}></img> : <Camera />}
        </div>
        <Button className={s.button} type={'submit'} children={'Save Changes'} />
      </Card>
    </div>
  )
}
