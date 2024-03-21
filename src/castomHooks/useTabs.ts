import { useSearchParams } from 'react-router-dom'

export const useTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const URLParams = Object.fromEntries(searchParams)

  const onTabChange = (value: string) => {
    const tabQuery = { tab: value }

    delete URLParams?.page
    setSearchParams({ ...URLParams, ...tabQuery })
    if (value === 'allCards') {
      delete URLParams.tab
      setSearchParams({ ...URLParams })
    }
  }

  return {
    onTabChange,
    searchParams,
  }
}
