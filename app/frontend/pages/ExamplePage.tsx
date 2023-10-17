import { FC } from 'react'

type TProps = {}

const ExamplePage: FC<TProps> = (props) => {
  console.log('example props', props)
  return <div>example page</div>
}

export default ExamplePage
