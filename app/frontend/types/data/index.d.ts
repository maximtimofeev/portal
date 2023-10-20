declare namespace Data {
  type User = {
    id: number
    email: string
    password?: string
    first_name: string
    last_name: string
    role: number
    created_at: number
    last_sign_in_at: number
  }
}
