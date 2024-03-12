import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import ControlledCheckbox from '@/components/ui/checkbox/controlledCheckbox'
import { ControlledInput } from '@/components/ui/input/ControlledInput'
import { Modal } from '@/components/ui/modal'
import { ModalFooter } from '@/components/ui/modal/modal-footer'
import { Image } from '@/icons/Image'
import { useCreateDeckMutation } from '@/services/desk-api'

import s from './addNewDeck.module.scss'

type AddNewDeckProps = {
  closeHandler: (isOpen: boolean) => void
  open?: boolean
}

type FormValues = {
  isPrivat?: boolean
  name: string
}

export const AddNewDeck = ({ closeHandler, open = false }: AddNewDeckProps) => {
  const [cover, setCover] = useState<File | null>(null)
  const [createDeck] = useCreateDeckMutation()
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      isPrivat: false,
      name: '',
    },
  })

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCover(e.currentTarget.files?.[0] ?? null)
  }

  const onSubmit = (values: FormValues) => {
    const formValues = { ...values, cover }

    createDeck(formValues)
    closeHandler(false)
  }

  return (
    <Modal closeHandler={closeHandler} open={open} title={'Add New Deck'}>
      <form name={'addDeckForm'} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.content}>
          <ControlledInput
            className={s.namePack}
            control={control}
            label={'Name Pack'}
            name={'name'}
            placeholder={'Name'}
            variant={'simple'}
            width={'100%'}
          />
          <input
            className={s.file}
            id={'addDeckCoverInput'}
            onChange={onFileChange}
            type={'file'}
          />
          <Button as={'label'} fullWidth htmlFor={'addDeckCoverInput'} variant={'secondary'}>
            <Image />
            Upload Image
          </Button>
          <ControlledCheckbox control={control} name={'isPrivat'} text={'Private pack'} />
        </div>
        <ModalFooter>
          <Button onClick={() => closeHandler(false)} variant={'secondary'}>
            Cancel
          </Button>
          <Button variant={'primary'}>Add New Pack</Button>
        </ModalFooter>
      </form>
    </Modal>
  )
}
