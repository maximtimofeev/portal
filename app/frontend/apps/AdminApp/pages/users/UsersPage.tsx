import { FC } from 'react'
import { UsersContent } from 'admin/contents/UsersContent/UsersContent'

type TProps = {
  users: Data.User[]
}

const UsersPage: FC<TProps> = ({ users }) => {
  return <UsersContent users={users} />
}

export default UsersPage
