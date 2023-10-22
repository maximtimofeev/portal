import { Text as BlueprintText } from '@blueprintjs/core'
import { FC, PropsWithChildren } from 'react'
import ctl from '@netlify/classnames-template-literals'

export type TextVariant = 'caption' | 'heading' | 'paragraph'

type TProps = {
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

const Text: FC<TProps> = ({ variant = 'caption', children }) => {
  return <BlueprintText {...TEXT_TAG_MAP[variant]}>{children}</BlueprintText>
}

export { Text }
