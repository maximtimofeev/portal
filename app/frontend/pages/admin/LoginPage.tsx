import { FC, FormEventHandler, useEffect } from 'react'
import { useForm } from '@inertiajs/react'
import { Button, Card, Elevation, FormGroup, InputGroup } from '@blueprintjs/core'
import { Toaster } from 'components/Toaster/Toaster'

type TProps = {
  errors: string[]
}

type TCredentials = {
  login: string
  password: string
}

const LoginPage: FC<TProps> = ({ errors }) => {
  useEffect(() => {
    errors?.forEach((message) => {
      Toaster.show({ message })
    })
  }, [errors])
  const { data, setData, post, processing } = useForm<TCredentials>({
    login: '',
    password: '',
  })

  const handleChange = (key: keyof TCredentials) => (value: string) => setData(key, value)

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    post('/admin/login')
  }

  return (
    <main className="flex w-full h-full justify-center items-center bg-cyan-200">
      <Card className="rounded-lg" elevation={Elevation.TWO}>
        <FormGroup label="Login or email" labelFor="login" labelInfo="(required)">
          <InputGroup id="login" value={data.login} onValueChange={handleChange('login')} />
        </FormGroup>
        <FormGroup label="Password" labelFor="password" labelInfo="(required)">
          <InputGroup id="password" type="password" value={data.password} onValueChange={handleChange('password')} />
        </FormGroup>
        <div className="flex w-full justify-center">
          <Button type="submit" loading={processing} onClick={handleSubmit} disabled={!data.login || !data.password}>
            Sign in
          </Button>
        </div>
      </Card>
    </main>
  )
}

export default LoginPage
