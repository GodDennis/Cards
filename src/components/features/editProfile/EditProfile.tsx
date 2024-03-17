import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { EditableAvatar } from '@/components/ui/avatar/editableAvatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { EditPen } from '@/icons/EditPen'
import { LogOutOutline } from '@/icons/LogOutOutline'
import { useGetAuthQuery, useUpdateUserMutation } from '@/services/auth-api'

import s from './editProfile.module.scss'

import { UpdateNameForm } from './UpdateNameForm'

export const EditProfile = () => {
  const { data } = useGetAuthQuery()
  const [update] = useUpdateUserMutation()

  const methods = useForm()

  const [editName, setEditName] = useState(false)

  const [file, setFile] = useState<File>()
  const onFile = (value: File) => {
    setFile(value)
  }

  const onSubmit = (values: { nickname?: string }) => {
    setEditName(false)
    update({ avatar: file, name: values.nickname })
  }

  useEffect(() => {
    methods.handleSubmit(onSubmit)()
  }, [file])

  const onEditNameHandler = () => {
    setEditName(true)
  }

  return (
    <Card className={s.container}>
      <Typography as={'h2'} className={s.modalTitle} variant={'h1'}>
        Personal Information
      </Typography>
      <FormProvider {...methods}>
        <EditableAvatar
          avatar={data.avatar}
          className={s.avatar}
          isVisible={!editName}
          onFile={onFile}
          onSubmit={onSubmit}
        />
      </FormProvider>
      {editName ? (
        <FormProvider {...methods}>
          <UpdateNameForm onSubmit={onSubmit} />
        </FormProvider>
      ) : (
        <>
          <div className={s.flexContainer}>
            <Typography as={'span'} variant={'h2'}>
              {data.name}
            </Typography>
            <Button className={s.editNameButton} onClick={onEditNameHandler} variant={'secondary'}>
              <EditPen />
            </Button>
          </div>
          <Typography as={'span'} className={s.email} variant={'body2'}>
            {data.email}
          </Typography>
          <Button className={s.logOut} variant={'secondary'}>
            <LogOutOutline fill={'white'} />{' '}
            <Typography as={'span'} variant={'body2'}>
              Logout
            </Typography>
          </Button>
        </>
      )}
    </Card>
  )
}
