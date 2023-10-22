import { Layout } from 'client/components/Layout/Layout'
import { FC } from 'react'
import { TSeoProps } from 'types'

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
