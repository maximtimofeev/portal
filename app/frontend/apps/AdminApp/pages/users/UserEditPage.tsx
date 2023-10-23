import { FC } from 'react'
import { UserEditContent } from 'admin/contents/UserEditContent/UserEditContent'

type TProps = {
  user: Data.User
  roles: string[]
}

const UsersEditPage: FC<TProps> = () => {
  return <UserEditContent />
}

export default UsersEditPage
