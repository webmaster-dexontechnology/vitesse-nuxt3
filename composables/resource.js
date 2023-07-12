/* eslint-disable no-undef */
export const useResource = () => {
  const { t, tm, rt } = useI18n()
  const resources = [
    {
      title: t('content[0].title'),
      text: t('content[0].text'),
      id: 'company-profile',
      document: tm('content[0].document'),
    },
    {
      title: t('content[1].title'),
      text: t('content[1].text'),
      id: 'in-line-inspection-intelligent-pigging',
      document: tm('content[1].document'),
    },
    {
      title: t('content[2].title'),
      text: t('content[2].text'),
      id: 'asset-integrity-management-aim',
      document: tm('content[2].document'),
    },
    {
      title: t('content[3].title'),
      text: t('content[3].text'),
      id: 'rope-access-services',
      document: tm('content[3].document'),
    },
    {
      title: t('content[4].title'),
      text: t('content[4].text'),
      id: 'inspection-programs',
      document: tm('content[4].document'),
    },
    {
      title: t('content[5].title'),
      text: t('content[5].text'),
      id: 'non-destructive-testing',
      document: tm('content[5].document'),
    },
    {
      title: t('content[6].title'),
      text: t('content[6].text'),
      id: 'other',
      document: tm('content[6].document'),
    },
  ]
  return { resources }
}
