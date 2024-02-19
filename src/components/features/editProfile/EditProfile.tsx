import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { EditableAvatar } from '@/components/ui/avatar/editableAvatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledInput } from '@/components/ui/input/ControlledInput'
import { Typography } from '@/components/ui/typography'
import { EditPen } from '@/icons/EditPen'
import { LogOutOutline } from '@/icons/LogOutOutline'

import s from './editProfile.module.scss'

export const EditProfile = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<{ nickname: string }>()

  const onSubmit = (values: { nickname: string }) => {
    console.log(values)
    setEditName(false)
    reset()
  }

  const [editName, setEditName] = useState(false)

  const onEditNameHandler = () => {
    setEditName(true)
  }

  return (
    <Card className={s.container}>
      <Typography as={'h2'} className={s.modalTitle} variant={'h1'}>
        Personal Information
      </Typography>
      <EditableAvatar className={s.avatar} isVisible={!editName} />
      {editName ? (
        <form className={s.formNikname} onSubmit={handleSubmit(onSubmit)}>
          <ControlledInput control={control} label={'Nickname'} name={'nickname'} />
          <Button className={s.saveChanges} fullWidth type={'submit'}>
            <Typography as={'span'} variant={'body2'}>
              Save Changes
            </Typography>
          </Button>
        </form>
      ) : (
        <>
          <div className={s.flexContainer}>
            <>
              <Typography as={'span'} variant={'h2'}>
                Ivan
              </Typography>
              <Button
                className={s.editNameButton}
                onClick={onEditNameHandler}
                variant={'secondary'}
              >
                <EditPen />
              </Button>
            </>
          </div>
          <Typography as={'span'} className={s.email} variant={'body2'}>
            abrakadabra@gmail.com
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
