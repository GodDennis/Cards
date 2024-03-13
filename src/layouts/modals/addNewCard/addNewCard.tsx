import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
import { ModalFooter } from '@/components/ui/modal/modal-footer'
import { Typography } from '@/components/ui/typography'
import { Image } from '@/icons/Image'

import s from './addNewCard.module.scss'

import defaultImage from './../../images/Mask.png'

type AddNewCardProps = {
  closeHandler: (isOpen: boolean) => void
  open?: boolean
}
export const AddNewCard = ({ closeHandler, open = false }: AddNewCardProps) => {
  const [questionImg, setQuestionImg] = useState<null | string>(null)
  const [answerImg, setAnswerImg] = useState<null | string>(null)

  const { handleSubmit, register } = useForm({
    defaultValues: {
      answer: '',
      question: '',
    },
  })

  const onClose = () => {
    setQuestionImg(null)
    setAnswerImg(null)
    closeHandler(false)
  }

  const onSubmit = () => { }

  return (
    <Modal closeHandler={onClose} open={open} title={'Add New Card'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.content}>
          <div className={s.inputLabel}>
            <Typography variant={'subtitle2'}>Question:</Typography>
            <Input
              className={s.namePack}
              placeholder={'Type your question'}
              variant={'simple'}
              width={'100%'}
              {...register('question')}
            />

            <img alt={'default image'} src={defaultImage} />
          </div>
          <Button fullWidth variant={'secondary'}>
            <Image />
            Change Image
          </Button>
        </div>
        <div className={s.content}>
          <div className={s.inputLabel}>
            <Typography variant={'subtitle2'}>Answer:</Typography>
            <Input
              className={s.namePack}
              placeholder={'Type your answer'}
              variant={'simple'}
              width={'100%'}
              {...register('answer')}
            />
            <img alt={'default image'} src={defaultImage} />
          </div>
          <Button fullWidth variant={'secondary'}>
            <Image />
            Change Image
          </Button>
        </div>
        <ModalFooter>
          <Button onClick={onClose} variant={'secondary'}>
            Cancel
          </Button>
          <Button variant={'primary'}>Add New Card</Button>
        </ModalFooter>
      </form>
    </Modal>
  )
}
