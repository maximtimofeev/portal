import { FC } from 'react'
import { Outlet } from 'react-router-dom'

type TProps = {}

const AdminApp: FC<TProps> = () => {
  return (
    <div className="flex w-full-h-full">
      <div className="flex">admin </div>
      <Outlet />
    </div>
  )
}

export { AdminApp }
