import { Children, FC, PropsWithChildren } from 'react'
import cn from 'classnames'

type TProps = {
  align?: 'left' | 'right'
} & PropsWithChildren

const PageHeader: FC<TProps> = ({ align = 'right', children }) => {
  const length = Children.toArray(children).length

  return (
    <div
      className={cn('flex h-16 w-full items-center px-3', {
        'justify-between': length > 1,
        'justify-start': align === 'left' && length === 1,
        'justify-end': align === 'right' && length === 1,
      })}
    >
      {children}
    </div>
  )
}

export { PageHeader }
