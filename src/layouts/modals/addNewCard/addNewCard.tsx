import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
import { ModalFooter } from '@/components/ui/modal/modal-footer'
import { Typography } from '@/components/ui/typography'
import { Image } from '@/icons/Image'
import clsx from 'clsx'

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

  const onQuectionImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.[0]) {
      if (e.currentTarget.files?.[0].size <= 1.5 * 1024 * 1024) {
        const imgURL = URL.createObjectURL(e.currentTarget.files?.[0])

        setQuestionImg(imgURL)
      } else {
        toast.error('File size must be smaller than 1.5mb!')
      }
    }
  }

  const onAnswerImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.[0]) {
      if (e.currentTarget.files?.[0].size <= 1.5 * 1024 * 1024) {
        const imgURL = URL.createObjectURL(e.currentTarget.files?.[0])

        setAnswerImg(imgURL)
      }
    } else {
      toast.error('File size must be smaller than 1.5mb!')
    }
  }

  const onClose = () => {
    setQuestionImg(null)
    setAnswerImg(null)
    closeHandler(false)
  }

  const onSubmit = () => {
    return
  }

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
            {questionImg && <img alt={'qyestion image'} src={questionImg} />}
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
            />
            {answerImg && <img alt={'answer image'} src={answerImg} />}
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
          <Button variant={'primary'}>Add New Card</Button>
        </ModalFooter>
      </form>
    </Modal>
  )
}
