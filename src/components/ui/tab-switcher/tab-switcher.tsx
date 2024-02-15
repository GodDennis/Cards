import * as Tabs from '@radix-ui/react-tabs'

type TabsType = Array<{
  disabled?: boolean
  name: string
  value: string
}>
type TabSwitcherProps = {
  tabs: TabsType[]
}

export const TabSwitcher = (props: TabSwitcherProps) => {
  return (
    <Tabs.Root className={'TabsRoot'} defaultValue={'tab1'}>
      <Tabs.List aria-label={'Manage your account'} className={'TabsList'}>
        <Tabs.Trigger className={'TabsTrigger'} value={'tab1'}>
          Account
        </Tabs.Trigger>
        <Tabs.Trigger className={'TabsTrigger'} value={'tab2'}>
          Password
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}
