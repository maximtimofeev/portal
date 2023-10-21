import { FC } from 'react'
import { AdminLayout as Layout } from 'components/AdminLayout/AdminLayout'

type TProps = {}

const HomePage: FC<TProps> = () => {
  return (
    <Layout>
      <div>Admin home Page</div>
    </Layout>
  )
}

export default HomePage
