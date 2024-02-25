import {Modal} from "@/components/ui/modal";
import {Typography} from "@/components/ui/typography";
import {ModalFooter} from "@/components/ui/modal/modal-footer";
import {Button} from "@/components/ui/button";
import s from './deleteCard.module.scss'

type DeleteCardProps = {
    closeHandler: (isOpen: boolean) => void
    open?: boolean
}

export const DeleteCard = ({closeHandler, open = false}: DeleteCardProps) => {

    return (
        <Modal title={'Delete Card'} closeHandler={closeHandler} open={open}>
            <div className={s.textContent}>
                <Typography variant={"subtitle1"}>Do you really want to remove <strong>Card
                Name</strong>?</Typography>
                <Typography variant={"subtitle1"}>All cards will be deleted</Typography>
            </div>
            <ModalFooter >
                <Button variant={"secondary"}>Cancel</Button>
                <Button variant={"primary"}>Delete Card</Button>
            </ModalFooter>
        </Modal>
    );
};
