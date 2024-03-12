import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'
import ControlledCheckbox from '@/components/ui/checkbox/controlledCheckbox'
import { ControlledInput } from '@/components/ui/input/ControlledInput'
import { Modal } from '@/components/ui/modal'
import { ModalFooter } from '@/components/ui/modal/modal-footer'
import { Image } from '@/icons/Image'
import { useCreateDeckMutation } from '@/services/desk-api'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from './addNewDeck.module.scss'

type AddNewDeckProps = {
  closeHandler: (isOpen: boolean) => void
  open?: boolean
}

type FormValues = {
  isPrivat?: boolean
  name: string
}

const nameValidation = z.string().min(3).max(100)
const formSchema = z.object({
  name: nameValidation,
})

export const AddNewDeck = ({ closeHandler, open = false }: AddNewDeckProps) => {
  const [cover, setCover] = useState<File | null>(null)
  const [createDeck] = useCreateDeckMutation()

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      isPrivat: false,
      name: '',
    },
    resolver: zodResolver(formSchema),
  })

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCover(e.currentTarget.files?.[0] ?? null)
  }

  const onClose = () => {
    closeHandler(false)
    reset()
    setCover(null)
  }

  const onSubmit = (values: FormValues) => {
    const formValues = { ...values, cover }

    createDeck(formValues)
      .unwrap()
      .catch(e => {
        toast.error(e.data.errorMessages[0].message)
      })
    onClose()
  }

  return (
    <Modal closeHandler={onClose} open={open} title={'Add New Deck'}>
      <form name={'addDeckForm'} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.content}>
          <ControlledInput
            className={s.namePack}
            control={control}
            error={errors.name?.message}
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
          <Button
            as={'label'}
            className={clsx(cover && s.fileActive)}
            fullWidth
            htmlFor={'addDeckCoverInput'}
            variant={'secondary'}
          >
            <Image />
            Upload Image
          </Button>
          <ControlledCheckbox control={control} name={'isPrivat'} text={'Private pack'} />
        </div>
        <ModalFooter>
          <Button onClick={onClose} variant={'secondary'}>
            Cancel
          </Button>
          <Button variant={'primary'}>Add New Pack</Button>
        </ModalFooter>
      </form>
    </Modal>
  )
}
