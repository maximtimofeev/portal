import { FC } from 'react'

export type TSeoProps = {
  title: string
  meta: TMetaTag[]
}

export type TMetaTag = {
  name: string
  content: string
}

type AuthProps = {
  user: Pick<Data.User, 'id' | 'first_name' | 'last_name' | 'email'>
}

type FlashProps = {
  has_flash: boolean
  flash: {
    notice?: string
    alert?: string
  }
}

type TPageLayout = (page: React.ReactNode) => React.ReactNode
type TInertiaPage = FC & { default: { layout?: TPageLayout } }

type AdminPageBaseProps = {
  auth: AuthProps
} & FlashProps

type TUserFieldKey = keyof Data.User
