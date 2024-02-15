import React, { ReactNode } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import s from './checkbox.module.scss'

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
        <Checkbox.Root
          disabled={disabled}
          checked={checked}
          className={`${s.root} ${className ? s[className] : ''} `}
          defaultChecked
          id="c1"
        >
          {checked ? (
            <Checkbox.Indicator className={s.indicator}>
              <CheckIcon />
            </Checkbox.Indicator>
          ) : (
            ''
          )}
        </Checkbox.Root>
        <label className={s.Label}>{label}</label>
      </div>
    </form>
  )
}

export default CheckBox
