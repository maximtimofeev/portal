declare namespace Data {
  type User = {
    id: number
    email: string
    login: string
    password?: string
    first_name: string
    last_name: string
    role: string
    created_at: number
    last_sign_in_at: number
  }
}
