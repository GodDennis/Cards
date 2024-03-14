import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { ModalFooter } from '@/components/ui/modal/modal-footer'
import { Typography } from '@/components/ui/typography'

import s from './deleteModal.module.scss'

type ModalTypes = 'card' | 'deck'

type DeleteModalProps = {
  cardId?: string
  closeHandler: (isOpen: boolean) => void
  elementType?: ModalTypes
  open?: boolean
  overlayClassName?: string
  removeHandler: () => void
  removingInstanceName?: string
  title: string
}

export const DeleteModal = ({
  closeHandler,
  elementType,
  open = false,
  overlayClassName,
  removeHandler,
  removingInstanceName,
  title,
}: DeleteModalProps) => {
  const deleteHanler = () => {
    removeHandler()
    closeHandler(false)
  }

  return (
    <Modal
      closeHandler={closeHandler}
      open={open}
      overlayClassName={overlayClassName}
      title={title}
    >
      <div className={s.textContent}>
        <Typography variant={'subtitle1'}>
          Do you really want to remove{' '}
          <strong>{removingInstanceName || `this ${elementType}`}</strong>?
        </Typography>
        <Typography variant={'subtitle1'}>All cards will be deleted</Typography>
      </div>
      <ModalFooter>
        <Button onClick={() => closeHandler(true)} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={deleteHanler} variant={'primary'}>{`Delete ${elementType}`}</Button>
      </ModalFooter>
    </Modal>
  )
}
