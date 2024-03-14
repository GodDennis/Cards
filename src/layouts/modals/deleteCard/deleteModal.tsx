import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { ModalFooter } from '@/components/ui/modal/modal-footer'
import { Typography } from '@/components/ui/typography'

import s from './deleteModal.module.scss'

type ModalTypes = 'card' | 'deck'

type DeleteModalProps = {
  closeHandler: (isOpen: boolean) => void
  elementType?: ModalTypes
  open?: boolean
  removeHandler: () => void
  removingInstanceName?: string
  title: string
}

export const DeleteModal = ({
  closeHandler,
  elementType,
  open = false,
  removeHandler,
  removingInstanceName,
  title,
}: DeleteModalProps) => {
  return (
    <Modal closeHandler={closeHandler} open={open} title={title}>
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
        <Button variant={'primary'}>{`Delete ${elementType}`}</Button>
      </ModalFooter>
    </Modal>
  )
}
