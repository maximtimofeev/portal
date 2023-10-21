import { ChangeEvent, FC } from 'react'
import { Input, InputProps } from 'reakit'
import cn from 'classnames'

export type TOption = {
  label: string
  value: string
}

export type TProps = Pick<InputProps, 'id' | 'name' | 'value' | 'onChange' | 'onContextMenu' | 'type' | 'disabled'> & {
  className?: string
  options?: TOption[]
  // onChange: (value: string) => void
}

const Select: FC<TProps> = ({ id, className, disabled, onChange, onContextMenu, options = [] }) => {
  return (
    <Input
      id={id}
      className={cn('', className)}
      as="select"
      disabled={disabled}
      onContextMenu={onContextMenu}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
          onChange(e)
        }
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Input>
  )
}

export { Select }
