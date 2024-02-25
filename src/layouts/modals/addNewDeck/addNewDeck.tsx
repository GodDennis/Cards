import {Modal} from "@/components/ui/modal";
import {ModalFooter} from "@/components/ui/modal/modal-footer";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import s from './addNewDeck.module.scss'
import {Image} from "@/icons/Image";

type AddNewDeckProps = {
    closeHandler: (isOpen: boolean) => void
    open?: boolean
}
export const AddNewDeck = ({closeHandler, open = false}: AddNewDeckProps) => {
    return (
        <Modal title={'Add New Deck'} closeHandler={closeHandler} open={open}>
            <div className={s.content}>
                <Input label={'Name Pack'} placeholder={'Name'} variant={"simple"} className={s.namePack} width={'100%'}/>
                <Button variant={"secondary"} fullWidth={true}>
                    <Image/>
                    Upload Image
                </Button>
                <Checkbox text={'Private pack'}/>
            </div>
            <ModalFooter >
                <Button variant={"secondary"}>Cancel</Button>
                <Button variant={"primary"}>Add New Pack</Button>
            </ModalFooter>
        </Modal>
    );
};
