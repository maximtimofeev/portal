import { router } from '@inertiajs/react'
import { Button } from 'components/Button/Button'
import { FC } from 'react'
import { AdminLayout as Layout } from 'components/AdminLayout/AdminLayout'

type TProps = {}

const HomePage: FC<TProps> = (props) => {
  const logout = () => {
    router.delete('admin/logout')
  }
  return (
    <Layout>
      <div>Admin home Page</div>
      <Button onClick={logout}>logout</Button>
    </Layout>
  )
}

export default HomePage
