import { FC } from 'react'

type TProps = {}

const HomePage: FC<TProps> = (props) => {
  console.log('props', props)
  return <div>Home Page</div>
}

export default HomePage
