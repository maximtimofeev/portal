import { ChangeEventHandler, FC, FormEventHandler } from 'react'
import { useForm } from '@inertiajs/react'
import { Layout } from 'admin/components/Layout/Layout'

type TProps = {
  user: Data.User
  roles: string[]
}

const UsersEditPage: FC<TProps> = ({ user, roles = [] }) => {
  const { data, setData, patch, post, processing, errors } = useForm<Data.User>({
    ...user,
    role: user?.role || 'admin',
  })
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const key = e.target.id as keyof Data.User
    const value = e.target.value
    setData(key, value)
  }

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    if (data.id) {
      patch(`/admin/users/${user.id}`)
    } else {
      post('/admin/users')
    }
  }
  return (
    <Layout>
      <div className="flex w-full flex-col">
        <form className="flex" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <div className="flex">
              <label htmlFor="first_name">First name:</label>
              <input id="first_name" value={data.first_name} onChange={handleChange} />
            </div>
            {errors.first_name && <div>{errors.first_name}</div>}
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <label htmlFor="last_name">Last name:</label>
              <input id="last_name" value={data.last_name} onChange={handleChange} />
            </div>
            {errors.last_name && <div>{errors.last_name}</div>}
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <label htmlFor="login">Login:</label>
              <input id="login" value={data.login} onChange={handleChange} />
            </div>
            {errors.login && <div>{errors.login}</div>}
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <label htmlFor="email">Email:</label>
              <input id="email" value={data.email} onChange={handleChange} />
            </div>
            {errors.email && <div>{errors.email}</div>}
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <label htmlFor="role">Role:</label>
              {/* <Select
                items={roles.map((key) => ({ label: key, value: key }))}
                onItemSelect={(option => setData('role', option.value))}
                itemRenderer={}
                >
                  <Button text={data?.role ?? ''}></Button>
                </Select> */}
            </div>
            {errors.role && <div>{errors.role}</div>}
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <label htmlFor="password">password:</label>
              <input id="password" type="password" value={data.password} onChange={handleChange} />
            </div>
            {errors.password && <div>{errors.password}</div>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  )
}

export default UsersEditPage
