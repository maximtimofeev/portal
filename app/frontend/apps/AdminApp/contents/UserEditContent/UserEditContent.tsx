import { FC, FormEventHandler } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Button,
  Card,
  Elevation,
  FormGroup,
  FormGroupProps,
  InputGroup,
  InputGroupProps,
  Intent,
  MenuItem,
} from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import { Select } from '@blueprintjs/select'
import { useForm, usePage } from '@inertiajs/react'
import { FormRow } from 'admin/components/FormRow/FormRow'
import { PageHeader } from 'admin/components/PageHeader/PageHeader'
import { AdminPageBaseProps, TUserFieldKey } from 'types'

type TPageProps = {
  user: Data.User
  roles: string[]
} & AdminPageBaseProps

const UserEditContent: FC<{}> = () => {
  const { t } = useTranslation()
  const {
    props: { user, roles },
  } = usePage<TPageProps>()

  const {
    data,
    setData,
    patch,
    post,
    processing,
    errors = {},
  } = useForm<Data.User>({
    ...user,
    role: user?.role || 'admin',
  })
  const handleChange = (key: TUserFieldKey) => (value: string) => setData(key, value)

  const getFormGroupProps = (
    key: TUserFieldKey,
  ): Pick<FormGroupProps, 'label' | 'labelFor' | 'intent' | 'helperText'> => {
    const fieldErrors = errors[key] ?? []

    return {
      label: t(`data.user.fields.${key}`),
      labelFor: key,
      intent: errors[key] ? Intent.DANGER : Intent.NONE,
      helperText: fieldErrors.length ? fieldErrors[0] : undefined,
    }
  }

  const getInputGroupProps = (
    key: TUserFieldKey,
  ): Pick<InputGroupProps, 'id' | 'value' | 'onValueChange' | 'intent'> => ({
    id: key,
    intent: errors[key] ? Intent.DANGER : Intent.NONE,
    value: `${data[key] ?? ''}`,
    onValueChange: handleChange(key),
  })

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()

    if (data.id) {
      patch(`/admin/users/${user.id}`)
    } else {
      post('/admin/users')
    }
  }

  return (
    <>
      <PageHeader>
        <Button intent={Intent.SUCCESS} loading={processing} large onClick={handleSubmit}>
          {t('buttons.save')}
        </Button>
      </PageHeader>
      <div className="flex flex-1 flex-col justify-start bg-slate-100 p-3">
        <div className="flex flex-none justify-center">
          <Card className="flex flex-col rounded-lg" elevation={Elevation.ONE}>
            <FormRow>
              <FormGroup {...getFormGroupProps('first_name')}>
                <InputGroup {...getInputGroupProps('first_name')} />
              </FormGroup>
              <FormGroup {...getFormGroupProps('last_name')}>
                <InputGroup {...getInputGroupProps('last_name')} />
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup {...getFormGroupProps('login')}>
                <InputGroup {...getInputGroupProps('login')} />
              </FormGroup>
              <FormGroup {...getFormGroupProps('email')}>
                <InputGroup {...getInputGroupProps('email')} />
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup {...getFormGroupProps('password')}>
                <InputGroup {...getInputGroupProps('password')} type="password" />
              </FormGroup>
              <FormGroup {...getFormGroupProps('role')}>
                <Select
                  activeItem={data.role}
                  filterable={false}
                  items={roles}
                  itemRenderer={(item, { handleClick, handleFocus, modifiers }) => (
                    <MenuItem
                      text={item}
                      label={item}
                      roleStructure="listoption"
                      active={modifiers.active}
                      key={item}
                      onClick={handleClick}
                      onFocus={handleFocus}
                    />
                  )}
                  onItemSelect={handleChange('role')}
                >
                  <Button rightIcon={IconNames.CaretDown}>{data.role ?? t('data.user.buttons.select_role')}</Button>
                </Select>
              </FormGroup>
            </FormRow>
          </Card>
        </div>
      </div>
    </>
  )
}

export { UserEditContent }
