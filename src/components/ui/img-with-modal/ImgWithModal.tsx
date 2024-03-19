import { ComponentProps, useState } from 'react'

import clsx from 'clsx'

import s from './imgWithModal.module.scss'

import { Modal } from '../modal'

type Props = ComponentProps<'img'> & {
  innerImgClassName?: string
  modalClassName?: string
  onClick?: () => void
  onModalClose?: () => void
}

export const ImgWithModal = (props: Props) => {
  const { className, innerImgClassName, modalClassName, onClick, onModalClose, ...rest } = props

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const clickHandler = () => {
    setIsModalOpen(true)
    onClick?.()
  }

  const closeHandler = () => {
    setIsModalOpen(false)
    onModalClose?.()
  }

  return (
    <>
      <img {...rest} className={className} onClick={clickHandler} />
      <Modal
        className={clsx(s.imgModal, modalClassName)}
        closeHandler={closeHandler}
        contentContainerClassName={s.contetContainer}
        open={isModalOpen}
        title={rest.alt || 'Image'}
        withCloseBtn
      >
        <img {...rest} className={clsx(s.innerImg, innerImgClassName)} />
      </Modal>
    </>
  )
}
