import { FC } from 'react'

type TProps = {}

const HomePage: FC<TProps> = (props) => {
  console.log('props', props)
  return <div>Home Page mega super page 123</div>
}

export default HomePage
