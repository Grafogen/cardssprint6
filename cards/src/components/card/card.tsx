import { Component, ElementType } from 'react'

export type CardType<T extends ElementType> = {
  as: T
}

export function Card() {
  return <Component />
}
