import { Card } from '@/components/card'
import { Typography } from '@/components/typography'
import s from './checkEmail.module.scss'
import { Button } from '@/components/ui/button'
import Email from '@/svgs/Email'

export const CheckEmail = () => {
  return (
    <Card className={s.card}>
      <Typography variant="h1" children="Check Email" className={s.title} />
      <div className={s.picture}>
        <Email />
      </div>
      <Typography
        variant="body2"
        className={s.ps}
        children="We’ve sent an Email with instructions to example@mail.com"
      />
      <Button fullWidth className={s.button}>
        Back to Sign In
      </Button>
    </Card>
  )
}
