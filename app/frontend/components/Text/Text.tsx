import { FC, PropsWithChildren } from 'react'
import { Text as BlueprintText } from '@blueprintjs/core'
import ctl from '@netlify/classnames-template-literals'
import cn from 'classnames'

export type TextVariant = 'caption' | 'heading' | 'paragraph'

type TProps = {
  className?: string
  variant?: TextVariant
} & PropsWithChildren

const TEXT_TAG_MAP: {
  [key in TextVariant]: {
    className: string
    tagName: keyof JSX.IntrinsicElements
  }
} = {
  caption: {
    className: ctl(`text-base font-normal`),
    tagName: 'span',
  },
  heading: {
    className: ctl(`text-lg font-bold`),
    tagName: 'h3',
  },
  paragraph: {
    className: ctl(`text-base`),
    tagName: 'p',
  },
}

const Text: FC<TProps> = ({ className, variant = 'caption', children }) => {
  return (
    <BlueprintText tagName={TEXT_TAG_MAP[variant].tagName} className={cn(TEXT_TAG_MAP[variant].className, className)}>
      {children}
    </BlueprintText>
  )
}

export { Text }
