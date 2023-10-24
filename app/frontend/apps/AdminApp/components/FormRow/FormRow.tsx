import { FC, PropsWithChildren } from 'react'
import { Text } from 'components/Text/Text'

type TProps = {
  label?: string
} & PropsWithChildren

const FormRow: FC<TProps> = ({ label, children }) => {
  return (
    <div className="flex flex-col">
      {label && (
        <Text className="mb-3" variant="heading">
          {label}
        </Text>
      )}
      <div className="flex gap-8">{children}</div>
    </div>
  )
}

export { FormRow }
