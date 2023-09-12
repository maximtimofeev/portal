import { FC } from 'react'
import { useParams } from 'react-router-dom'

type TProps = {}

const PostPage: FC<TProps> = () => {
  const routeParams = useParams()
  return (
    <div>
      <span>{`post id is: ${routeParams.postId}`}</span>
    </div>
  )
}

export { PostPage }
