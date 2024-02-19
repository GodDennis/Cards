import { EditPen } from '@/icons/EditPen'

import s from './editableAvatar.module.scss'

import { Button } from '../button'
import { Avatar } from './Avatar'

type Props = {
  className?: string
  isVisible?: boolean
}

export const EditableAvatar = ({ className, isVisible }: Props) => {
  return (
    <div className={`${s.container} ${className}`}>
      <Avatar className={s.editAvatar} />
      {isVisible && (
        <Button className={s.editAvatarButton} variant={'secondary'}>
          <EditPen />
        </Button>
      )}
    </div>
  )
}
