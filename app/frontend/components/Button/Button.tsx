import { FC, PropsWithChildren } from 'react'
import { Button as ReakitButton, ButtonProps } from 'reakit'
import cn from 'classnames'

enum ButtonVariant {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export type TProps = Pick<ButtonProps, 'onClick' | 'onContextMenu' | 'type' | 'disabled'> & {
  className?: string
  icon?: React.ReactNode
  variant?: ButtonVariant
  tooltip?: string
  selected?: boolean
} & PropsWithChildren

const Button: FC<TProps> = ({
  className,
  // icon,
  type = 'button',
  variant = ButtonVariant.PRIMARY,
  disabled,
  children,
  // tooltip,
  // tabIndex,
  onClick,
  onContextMenu,
  // selected,
}) => {
  return (
    <ReakitButton
      className={cn('flex flex-row items-center justify-center', disabled ? '' : 'cursor-pointer', className)}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {children}
    </ReakitButton>
  )
}

export { Button }
