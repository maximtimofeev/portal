import { FC } from 'react'
import { Head } from '@inertiajs/react'
import { TSeoProps } from 'types'

type TProps = {
  seo: TSeoProps
}

const AppHead: FC<TProps> = ({ seo }) => {
  return (
    <Head>
      <title>{seo?.title}</title>
      {seo?.meta?.map((mtag, index) => {
        return <meta key={index} name={mtag.name} content={mtag.content} />
      })}
    </Head>
  )
}

export { AppHead }
