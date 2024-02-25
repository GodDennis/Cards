import {Modal} from "@/components/ui/modal";
import {ModalFooter} from "@/components/ui/modal/modal-footer";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import s from './addNewCard.module.scss'
import {Image} from "@/icons/Image";
import {Typography} from "@/components/ui/typography";
import defaultImage from './../../images/Mask.png'

type AddNewCardProps = {
    closeHandler: (isOpen: boolean) => void
    open?: boolean
}
export const AddNewCard = ({closeHandler, open = false}: AddNewCardProps) => {
    return (
        <Modal title={'Add New Card'} closeHandler={closeHandler} open={open}>
            <div className={s.content}>
                <div className={s.inputLabel}>
                <Typography variant={"subtitle2"}>Question:</Typography>
                <Input label={'Question?'} placeholder={'Name'} variant={"simple"} className={s.namePack}
                       width={'100%'}/>

                <img src={defaultImage} alt={'default image'}/>
                </div>
                <Button variant={"secondary"} fullWidth={true}>
                    <Image/>
                    Change Image
                </Button>
            </div>
            <div className={s.content}>
                <div className={s.inputLabel}>
            <Typography variant={"subtitle2"}>Answer:</Typography>
                <Input label={'Question?'} placeholder={'Name'} variant={"simple"} className={s.namePack}
                       width={'100%'}/>
                <img src={defaultImage} alt={'default image'}/>
                </div>
                <Button variant={"secondary"} fullWidth={true}>
                    <Image/>
                    Change Image
                </Button>
            </div>
            <ModalFooter>
                <Button variant={"secondary"}>Cancel</Button>
                <Button variant={"primary"}>Add New Card</Button>
            </ModalFooter>
        </Modal>
    );
};
