import { ChangeEventHandler, FC, FormEventHandler } from 'react'
import { useState } from 'react'
import { router } from '@inertiajs/react'

type TProps = {}

const LoginPage: FC<TProps> = ({}) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const key = e.target.id
    const value = e.target.value
    setValues((values) => ({
      ...values,
      [key]: value,
    }))
  }

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    router.post('/admin/login', { user: values })
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="first_name">First name:</label>
      <input id="first_name" value={values.first_name} onChange={handleChange} />
      <label htmlFor="last_name">Last name:</label>
      <input id="last_name" value={values.last_name} onChange={handleChange} /> */}
      <label htmlFor="email">Email:</label>
      <input id="email" value={values.email} onChange={handleChange} />
      <label htmlFor="password">password:</label>
      <input id="password" type="password" value={values.password} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default LoginPage
