import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
import { ModalFooter } from '@/components/ui/modal/modal-footer'
import { Typography } from '@/components/ui/typography'
import { Image } from '@/icons/Image'
import { CreateCardBody } from '@/services/api-types'
import { useUpdateCardMutation } from '@/services/cards-api'
import { useCreateCardMutation } from '@/services/desk-api'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'

import s from './addNewCard.module.scss'

import { convertToBase64, setFileIfValid } from './utils/utils'
import { AddNewCardForm, addNewCardSchema } from './validationSchema'

type AddNewCardProps = {
  cardId?: string
  closeHandler: (isOpen: boolean) => void
  isRefactor?: boolean
  open?: boolean
}
export const AddNewCard = ({
  cardId,
  closeHandler,
  isRefactor = false,
  open = false,
}: AddNewCardProps) => {
  const { deckId = '' } = useParams()
  const [questionImg, setQuestionImg] = useState<File | null>(null)
  const [answerImg, setAnswerImg] = useState<File | null>(null)
  const [createCard, { isError }] = useCreateCardMutation()
  const [updateCard] = useUpdateCardMutation()
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<AddNewCardForm>({
    defaultValues: {
      answer: '',
      question: '',
    },
    resolver: zodResolver(addNewCardSchema),
  })

  const onQuectionImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.[0]) {
      setFileIfValid(setQuestionImg, e.currentTarget.files?.[0], 1.5)
    }
  }

  const onAnswerImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.[0]) {
      setFileIfValid(setAnswerImg, e.currentTarget.files?.[0], 1.5)
    }
  }

  const onClose = () => {
    setQuestionImg(null)
    setAnswerImg(null)
    reset()
    closeHandler(false)
  }

  const runRightMethod = (body: CreateCardBody) => {
    if (isRefactor && cardId) {
      return updateCard({ body, cardId })
    } else {
      return createCard({ body, deckId })
    }
  }

  const onSubmit = (data: AddNewCardForm) => {
    const body: CreateCardBody = { ...data }

    if (questionImg) {
      body.questionImg = questionImg
    }
    if (answerImg) {
      body.answerImg = answerImg
    }

    runRightMethod(body)
      .unwrap()
      .then(() => {
        onClose()
      })
      .catch(e => {
        toast.error(e.data.errorMessages[0].message)
      })
  }

  return (
    <Modal closeHandler={onClose} open={open} title={isRefactor ? 'Update Card' : 'Add New Card'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.content}>
          <div className={s.inputLabel}>
            <Typography variant={'subtitle2'}>Question:</Typography>
            <Input
              className={s.namePack}
              error={errors.question?.message || null}
              placeholder={'Type your question'}
              variant={'simple'}
              width={'100%'}
              {...register('question')}
            />
            {questionImg && <img alt={'question image'} src={convertToBase64(questionImg)} />}
          </div>
          <input
            className={s.inputFile}
            id={'questionImgInput'}
            name={'questionImgInput'}
            onChange={onQuectionImgChange}
            type={'file'}
          />
          <Button
            as={'label'}
            className={clsx(questionImg && s.fileActive)}
            fullWidth
            htmlFor={'questionImgInput'}
            variant={'secondary'}
          >
            <Image />
            {questionImg ? 'Change Image' : 'Upload Image'}
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
              error={errors.answer?.message || null}
            />
            {answerImg && <img alt={'answer image'} src={convertToBase64(answerImg)} />}
          </div>
          <input
            className={s.inputFile}
            id={'answerImgInput'}
            name={'answerImgInput'}
            onChange={onAnswerImgChange}
            type={'file'}
          />
          <Button
            as={'label'}
            className={clsx(answerImg && s.fileActive)}
            fullWidth
            htmlFor={'answerImgInput'}
            variant={'secondary'}
          >
            <Image />
            {answerImg ? 'Change Image' : 'Upload Image'}
          </Button>
        </div>
        <ModalFooter>
          <Button onClick={onClose} variant={'secondary'}>
            Cancel
          </Button>
          <Button variant={'primary'}>{isRefactor ? 'Update card' : 'Add New Card'}</Button>
        </ModalFooter>
      </form>
    </Modal>
  )
}
