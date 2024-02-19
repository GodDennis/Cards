import {useForm} from "react-hook-form";
import {FormValues, loginSchema} from "@/components/auth/helpers/loginValidationSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import s from "@/components/auth/signIn/signIn.module.scss";
import {Header} from "@/components/ui/header";
import {Card} from "@/components/ui/card";
import {Typography} from "@/components/ui/typography";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {clsx} from "clsx";

export const SignUp = () => {
    const {
        formState: { errors },
        handleSubmit,
        register,
    } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

    const onSubmit = (values: FormValues) => {
        console.log(values)
    }

    return (
        <div className={s.container}>
            <Header isLoggedIn={false} />
            <Card as={'div'} className={s.cardContainer}>
                <Typography as={'h1'} variant={'h1'}>
                    Sign Up
                </Typography>
                <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
                    <div className={clsx(s.inputContainer, s.signUpInputs)}>
                        <Input
                            {...register('email')}
                            error={errors.email?.message}
                            label={'Email'}
                            className={s.input}
                        />
                        <Input
                            {...register('password')}
                            error={errors.password?.message}
                            label={'Password'}
                            variant={'password'}
                            className={s.input}
                        />
                        <Input
                            {...register('password')}
                            error={errors.password?.message}
                            label={'Confirm Password'}
                            variant={'password'}
                            className={s.input}
                        />
                    </div>

                    <Button fullWidth type={'submit'}>
                        Sign Up
                    </Button>
                </form>
                <Typography variant={'body2'}>Already have an account?</Typography>
                <Typography as={'a'} className={s.signIn} href={'#'}>
                    Sign In
                </Typography>
            </Card>
        </div>
    );
};
