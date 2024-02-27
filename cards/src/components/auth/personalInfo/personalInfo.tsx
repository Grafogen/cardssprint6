import React from 'react'
import { Card } from '@/components/card'
import s from './personalInfo.module.scss'
import { Typography } from '@/components/typography'
import { Button } from '@/components/ui/button'
import LogOut from '@/svgs/logOut'
import EditCamera from '@/svgs/editCamera'

type EditProfileProps = {
  avatar?: string
  nickName?: string
  email?: string
}

export const PersonalInfo = ({ avatar, nickName, email }: EditProfileProps) => {
  return (
    <div>
      <Card className={s.card}>
        <Typography className={s.title} children="Personal Information" variant="h1" />
        <div className={s.photoContainer}>
          <div>
            <img src={avatar} alt={'avatar'}></img>
            <button className={s.editAvatarButton}>
              <EditCamera />
            </button>
          </div>
        </div>
        <Typography children={nickName} variant={'h2'} className={s.title} />
        <Typography children={email} variant={'body2'} className={s.email} />
        <div className={s.wrap}>
          <Button className={s.button} variant={'secondary'} type={'submit'}>
            <div className={s.title}>
              <LogOut className={s.iconLog} /> Logout
            </div>
          </Button>
        </div>
      </Card>
    </div>
  )
}
