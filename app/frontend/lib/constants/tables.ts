export enum TableType {
  'USERS' = 'USERS',
}

export type TTableColumnSettings = {
  id: string
  width: number
}

export type TTableSettings = Record<string, TTableColumnSettings[]>

export const TABLE_SETTINGS: TTableSettings = {
  [TableType.USERS]: [
    {
      id: 'id',
      width: 20,
    },
    {
      id: 'first_name',
      width: 70,
    },
    {
      id: 'last_name',
      width: 70,
    },
    {
      id: 'login',
      width: 50,
    },
    {
      id: 'email',
      width: 80,
    },
    {
      id: 'created_at',
      width: 40,
    },
    {
      id: 'last_sign_in_at',
      width: 50,
    },
    {
      id: 'buttons',
      width: 20,
    },
  ],
}
