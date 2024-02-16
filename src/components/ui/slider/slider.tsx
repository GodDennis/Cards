import { useState } from 'react'

import { Typography } from '@/components/ui/typography'
import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

type Props = {
    minValue?: number
    maxValue?: number
}

const SliderDemo = (props: Props) => {

   const {minValue = 0, maxValue = 10} = props

  const [value1, setValue1] = useState<number>(minValue)
  const [value2, setValue2] = useState<number>(maxValue)

  const handleValue1Change = (value: number[]) => {
    setValue1(value[0])
    setValue2(value[1])
  }

  return (
    <form className={s.sliderContainer}>
      <span className={s.value}>
        <Typography variant={'body1'}>{value1}</Typography>
      </span>
      <Slider.Root
        className={s.SliderRoot}
        defaultValue={[value1, value2]}
        max={maxValue}
        onValueChange={handleValue1Change}
        step={1}
      >
        <Slider.Track className={s.SliderTrack}>
          <Slider.Range className={s.SliderRange} />
          <Slider.Range className={s.SliderRange} />
        </Slider.Track>
        <Slider.Thumb aria-label={'Volume'} className={s.SliderThumb} defaultValue={value1} />
        <Slider.Thumb aria-label={'Volume'} className={s.SliderThumb} defaultValue={value2} />
      </Slider.Root>
      <span className={s.value}>
        <Typography variant={'body1'}>{value2}</Typography>
      </span>
    </form>
  )
}

export default SliderDemo
