import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type TProps = {}

const Footer: FC<TProps> = ({}) => {
  const { t } = useTranslation()
  return <footer className="flex flex-none w-full h-20 bg-slate-500">{t('sections.footer.label')}</footer>
}

export { Footer }
