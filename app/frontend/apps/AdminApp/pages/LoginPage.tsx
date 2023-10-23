import { FC, FormEventHandler, useEffect } from 'react'
import { useForm } from '@inertiajs/react'
import { Button, Card, Elevation, FormGroup, InputGroup } from '@blueprintjs/core'
import { Toaster } from 'components/Toaster/Toaster'
import { AdminPageBaseProps } from 'types'

type TCredentials = {
  login: string
  password: string
}

const LoginPage: FC<AdminPageBaseProps> = ({ has_flash, flash }) => {
  useEffect(() => {
    if (has_flash) {
      Toaster.show({ message: flash.notice || flash.alert, intent: 'danger' })
    }
  }, [flash, has_flash])
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
    <main className="flex w-full h-full justify-center items-center bg-sky-100">
      <Card className="rounded-lg" elevation={Elevation.TWO}>
        <form className="flex flex-col">
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
        </form>
      </Card>
    </main>
  )
}

export default LoginPage
