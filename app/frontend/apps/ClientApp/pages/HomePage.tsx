import { FC } from 'react'
import { TSeoProps } from 'types'
import { Layout } from '../components/Layout/Layout'

type TProps = {
  seo: TSeoProps
}

const HomePage: FC<TProps> = ({ seo }) => {
  return (
    <Layout seoProps={seo}>
      <div>Home Page content</div>
    </Layout>
  )
}

export default HomePage
