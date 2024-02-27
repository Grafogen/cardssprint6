import React from 'react'
import { Card } from '@/components/card'
import s from './personalInfo.module.scss'
import { Typography } from '@/components/typography'
import { Button } from '@/components/ui/button'
import LogOut from '@/svgs/logOut'
import EditCamera from '@/svgs/editCamera'
import Edit from '@/svgs/edit'

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
        <div className={s.nameWithEditButton}>
          <Typography children={nickName} variant={'h2'} className={s.title} />

          <button className={s.editNameButton}>
            <Edit />
          </button>
        </div>
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
