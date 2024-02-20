import React, { ReactNode } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import s from './checkbox.module.scss'
import Check from '@/svgs/check'
import { Typography } from '@/components/typography'

export type CheckboxProps = {
  checked: boolean
  label?: ReactNode
  className?: string
  disabled?: boolean
  onClickChanged?: (checked: boolean) => void
}
export const CheckBox = (props: CheckboxProps) => {
  const { checked, className, disabled, label } = props
  return (
    <form>
      <div className={s.container}>
        <Typography variant="body2" className={s.label} as={'label'}>
          <div className={`${className && !disabled ? s[className] : ''}`}>
            <Checkbox.Root
              disabled={disabled}
              checked={checked}
              className={`${s.root} `}
              defaultChecked
              id="c1"
            >
              {checked ? (
                <Checkbox.Indicator className={s.indicator}>
                  <Check />
                </Checkbox.Indicator>
              ) : (
                ''
              )}
            </Checkbox.Root>
          </div>
          {label}
        </Typography>
      </div>
    </form>
  )
}

export default CheckBox
