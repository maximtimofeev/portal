export const USER_FIELDS_LABELS: {
  [key in keyof Data.User]: string
} = {
  id: 'Id',
  first_name: 'Name',
  last_name: 'Last name',
  login: 'Login',
  email: 'Email',
  role: 'Role',
  created_at: 'Created at',
  last_sign_in_at: 'Last login',
}
