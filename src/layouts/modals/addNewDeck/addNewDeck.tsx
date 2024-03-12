import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
import { ModalFooter } from '@/components/ui/modal/modal-footer'
import { Image } from '@/icons/Image'

import s from './addNewDeck.module.scss'

type AddNewDeckProps = {
  closeHandler: (isOpen: boolean) => void
  open?: boolean
}
export const AddNewDeck = ({ closeHandler, open = false }: AddNewDeckProps) => {
  return (
    <Modal closeHandler={closeHandler} open={open} title={'Add New Deck'}>
      <div className={s.content}>
        <Input
          className={s.namePack}
          label={'Name Pack'}
          placeholder={'Name'}
          variant={'simple'}
          width={'100%'}
        />
        <Button fullWidth variant={'secondary'}>
          <Image />
          Upload Image
        </Button>
        <Checkbox text={'Private pack'} />
      </div>
      <ModalFooter>
        <Button onClick={() => closeHandler(false)} variant={'secondary'}>
          Cancel
        </Button>
        <Button variant={'primary'}>Add New Pack</Button>
      </ModalFooter>
    </Modal>
  )
}
