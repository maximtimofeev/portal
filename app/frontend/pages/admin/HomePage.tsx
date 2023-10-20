import { router } from '@inertiajs/react'
import { Button } from 'components/Button/Button'
import { FC } from 'react'

type TProps = {}

const HomePage: FC<TProps> = (props) => {
  const logout = () => {
    router.delete('admin/logout')
  }
  return (
    <div>
      <div>Admin home Page</div>
      <Button onClick={logout}>logout</Button>
    </div>
  )
}

export default HomePage
