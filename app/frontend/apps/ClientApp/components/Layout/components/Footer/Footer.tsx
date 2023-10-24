import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type TProps = {}

const Footer: FC<TProps> = () => {
  const { t } = useTranslation()

  return <footer className="flex h-20 w-full flex-none bg-slate-500">{t('sections.footer.label')}</footer>
}

export { Footer }
