import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { ModalFooter } from '@/components/ui/modal/modal-footer'
import { Typography } from '@/components/ui/typography'

import s from './deleteCard.module.scss'

type DeleteCardProps = {
  closeHandler: (isOpen: boolean) => void
  open?: boolean
}

export const DeleteCard = ({ closeHandler, open = false }: DeleteCardProps) => {
  return (
    <Modal closeHandler={closeHandler} open={open} title={'Delete Card'}>
      <div className={s.textContent}>
        <Typography variant={'subtitle1'}>
          Do you really want to remove <strong>Card Name</strong>?
        </Typography>
        <Typography variant={'subtitle1'}>All cards will be deleted</Typography>
      </div>
      <ModalFooter>
        <Button onClick={() => closeHandler(true)} variant={'secondary'}>
          Cancel
        </Button>
        <Button variant={'primary'}>Delete Card</Button>
      </ModalFooter>
    </Modal>
  )
}
