export type TSeoProps = {
  title: string
  meta: TMetaTag[]
}

export type TMetaTag = {
  name: string
  content: string
}

type AuthProps = {
  user: Pick<Data.User, 'first_name' | 'last_name' | 'email'>
}

type FlashProps = {
  has_flash: boolean
  flash: {
    notice?: string
    alert?: string
  }
}

type AdminPageBaseProps = {
  auth: AuthProps
} & FlashProps
