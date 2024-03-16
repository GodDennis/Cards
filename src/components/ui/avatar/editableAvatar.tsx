import { ChangeEvent, useRef } from 'react'

import { EditPen } from '@/icons/EditPen'

import s from './editableAvatar.module.scss'

import { Button } from '../button'
import { Input } from '../input'
import { Avatar } from './Avatar'

type Props = {
  avatar: null | string
  className?: string
  isVisible?: boolean
  onFile: (value: File) => void
  onSubmit: (values: { avatar?: string; nickname?: string }) => void
}

export const EditableAvatar = ({ avatar, className, isVisible, onFile }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onClick = () => {
    inputRef.current?.click()
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.files?.[0] && onFile(e.currentTarget.files?.[0])
  }

  return (
    <div className={`${s.container} ${className}`}>
      <Avatar className={s.editAvatar} src={avatar} />
      {isVisible && (
        <div>
          <Button className={s.editAvatarButton} onClick={onClick} variant={'secondary'}>
            <EditPen />
          </Button>
          <Input className={s.inputFile} onChange={onChange} ref={inputRef} type={'file'} />
        </div>
      )}
    </div>
  )
}
