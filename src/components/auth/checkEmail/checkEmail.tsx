import s from './checkEmail.module.scss'
import {Header} from "@/components/ui/header";
import {Typography} from "@/components/ui/typography";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Email} from "@/icons/Email";

export const CheckEmail = () => {
    return (
        <div className={s.container}>
            <Header isLoggedIn={false} />
            <Card as={'div'} className={s.cardContainer}>
                <Typography as={'h1'} variant={'h1'} className={s.title}>
                    Check Email
                </Typography>
                <div className={s.imageContainer}>
                    <Email/>
                </div>
                <Typography className={s.instructions} variant={'body2'}>
                    We’ve sent an Email with instructions to example@mail.com
                </Typography>
                <Button as={'a'} className={s.button} href={'#'} fullWidth>
                    Back to Sign In
                </Button>
            </Card>
        </div>
    );
};
