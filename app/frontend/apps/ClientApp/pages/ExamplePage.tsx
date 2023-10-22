import { Layout } from 'client/components/Layout/Layout'
import { FC } from 'react'
import { TSeoProps } from 'types'

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
