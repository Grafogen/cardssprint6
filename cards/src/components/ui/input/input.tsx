import React, { ElementType, useState } from 'react'
import s from './input.module.scss'

export type InputProps<T extends ElementType = 'input'> = {
  as?: T
  disabled?: boolean
  active?: boolean
  error?: boolean
  type?: 'input' | 'search'
  valueInInput: string
}

export const Input = <T extends ElementType = 'input'>(props: InputProps<T>) => {
  const {
    as: Component = 'input',
    valueInInput = 'Input',
    disabled,
    active,
    type = 'input',
    error,
  } = props

  const [inputValue, setInputValue] = useState(valueInInput)

  const onClickValueClean = () => {
    setInputValue('')
  }

  return (
    <div>
      <Component className={s.root} value={inputValue} onClick={onClickValueClean} />
    </div>
  )
}
