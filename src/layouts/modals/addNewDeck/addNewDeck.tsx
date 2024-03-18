import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'
import ControlledCheckbox from '@/components/ui/checkbox/controlledCheckbox'
import { ControlledInput } from '@/components/ui/input/ControlledInput'
import { Modal } from '@/components/ui/modal'
import { ModalFooter } from '@/components/ui/modal/modal-footer'
import { Image } from '@/icons/Image'
import { CreateDeckArgs } from '@/services/api-types'
import { useCreateDeckMutation, useUpdateDeckMutation } from '@/services/desk-api'
import { toastAppError } from '@/utils/toastAppError'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from './addNewDeck.module.scss'

type AddNewDeckProps = {
  closeHandler: (isOpen: boolean) => void
  deckId?: string
  //provide deckId in isRefactor mode
  isRefactor?: boolean
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

export const AddNewDeck = ({
  closeHandler,
  deckId,
  isRefactor = false,
  open = false,
}: AddNewDeckProps) => {
  const [cover, setCover] = useState<File | null>(null)
  const [createDeck] = useCreateDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()

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

  const runRightMutationMethod = (body: CreateDeckArgs) => {
    if (isRefactor) {
      if (deckId) {
        return updateDeck({ body, id: deckId })
          .unwrap()
          .then(() => toast.success('Deck successfully updated'))
          .catch(e => toastAppError(e))
      } else {
        toast.error('Error: deckId is not provided')
      }
    } else {
      return createDeck(body)
        .unwrap()
        .then(() => toast.success('Deck successfully created'))
        .catch(e => toastAppError(e))
    }
  }

  const onSubmit = (values: FormValues) => {
    const formValues = { ...values, cover }

    runRightMutationMethod(formValues)
    onClose()
  }

  return (
    <Modal closeHandler={onClose} open={open} title={isRefactor ? 'Update Deck' : 'Add New Deck'}>
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
            {cover ? 'Change Image' : 'Upload Image'}
          </Button>
          <ControlledCheckbox control={control} name={'isPrivat'} text={'Private pack'} />
        </div>
        <ModalFooter>
          <Button onClick={onClose} variant={'secondary'}>
            Cancel
          </Button>
          <Button variant={'primary'}>{isRefactor ? 'Update Deck' : 'Add New Pack'}</Button>
        </ModalFooter>
      </form>
    </Modal>
  )
}
