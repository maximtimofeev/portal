import { FC } from 'react'

type TProps = {}

const HomePage: FC<TProps> = (props) => {
  console.log('props', props)
  return <div>Admin home Page</div>
}

export default HomePage
