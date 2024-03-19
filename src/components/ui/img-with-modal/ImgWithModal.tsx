import { ComponentProps, useState } from 'react'

import { Modal } from '../modal'

type Props = ComponentProps<'img'> & {
  modalClassName?: string
  onClick?: () => void
  onModalClose?: () => void
}

export const ImgWithModal = (props: Props) => {
  const { modalClassName, onClick, onModalClose, ...rest } = props

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
      <img {...rest} onClick={clickHandler} />
      <Modal
        className={modalClassName}
        closeHandler={closeHandler}
        open={isModalOpen}
        title={rest.alt || 'Image'}
        withCloseBtn
      >
        <img {...rest} />
      </Modal>
    </>
  )
}
