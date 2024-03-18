import { ReactNode } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tab-switcher.module.scss'

import { Typography } from '../typography'

type TabsType = Array<{
  disabled?: boolean
  name: string
  value: string
}>
type TabSwitcherProps = {
  //use for controlled component case
  changeHandler?: (value: string) => void
  //children should be arr of TabContent components, which placed below
  children?: ReactNode
  className?: string
  //Don't use with value at the same time, for uncontrolled case only
  defaultValue?: string
  tabs: TabsType
  tabsListClassName?: string
  title?: string
  //use for controlled component case with changeHandler
  value?: string
}

export const TabSwitcher = (props: TabSwitcherProps) => {
  const {
    changeHandler,
    children,
    className,
    defaultValue,
    tabs,
    tabsListClassName,
    title,
    value,
  } = props

  return (
    <Tabs.Root
      className={clsx(s.tabsRoot, className)}
      defaultValue={defaultValue}
      onValueChange={changeHandler}
      value={value}
    >
      {title && (
        <Typography as={'h2'} className={s.title} variant={'subtitle2'}>
          {title}
        </Typography>
      )}
      <Tabs.List className={clsx(s.tabsList, tabsListClassName)}>
        {tabs.map((t, i) => (
          <Tabs.Trigger
            className={s.tabsTrigger}
            disabled={t.disabled}
            key={t.value + i}
            value={t.value}
          >
            <Typography as={'span'} variant={'body2'}>
              {t.name}
            </Typography>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {children}
    </Tabs.Root>
  )
}

type TabContentProps = {
  children: ReactNode
  className?: string
  value: string
}
export const TabContent = ({ children, className, value }: TabContentProps) => {
  return (
    <Tabs.Content className={clsx(s.tabsContent, className)} value={value}>
      {children}
    </Tabs.Content>
  )
}
