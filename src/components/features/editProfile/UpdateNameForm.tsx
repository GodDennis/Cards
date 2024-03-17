import { useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { ControlledInput } from '@/components/ui/input/ControlledInput'
import { Typography } from '@/components/ui/typography'

import s from './editProfile.module.scss'

type Props = {
  onSubmit: (values: { avatar?: string; nickname?: string }) => void
}

export const UpdateNameForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useFormContext()

  return (
    <form className={s.formNikname} onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput control={control} label={'Nickname'} name={'nickname'} />
      <Button className={s.saveChanges} fullWidth type={'submit'}>
        <Typography as={'span'} variant={'body2'}>
          Save Changes
        </Typography>
      </Button>
    </form>
  )
}
