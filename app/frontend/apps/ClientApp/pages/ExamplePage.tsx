import { FC } from 'react'
import { TSeoProps } from 'types'
import { Layout } from '../components/Layout/Layout'

type TProps = {
  seo: TSeoProps
}

const ExamplePage: FC<TProps> = ({ seo }) => {
  return (
    <Layout seoProps={seo}>
      <div>Example Page content</div>
    </Layout>
  )
}

export default ExamplePage
