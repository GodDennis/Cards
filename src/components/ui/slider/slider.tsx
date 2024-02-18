import { ChangeEvent, useState } from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

type Props = {
  maxValue?: number
  minValue?: number
}

const SliderDemo = (props: Props) => {
  const { maxValue = 10, minValue = 0 } = props

  const [value1, setValue1] = useState<number>(minValue)
  const [value2, setValue2] = useState<number>(maxValue)

  const handleValueChange = (value: number[]) => {
    setValue1(value[0])
    setValue2(value[1])
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.startsWith('0')) {
      e.target.value = e.target.value.slice(1)
    }
  }

  return (
    <form className={s.sliderContainer}>
      <input
        className={s.value}
        onChange={e => setValue1(Number(e.target.value))}
        onInput={handleInput}
        type={'number'}
        value={value1}
      />
      <Slider.Root
        className={s.SliderRoot}
        max={maxValue}
        onValueChange={handleValueChange}
        step={1}
        value={[value1, value2]}
      >
        <Slider.Track className={s.SliderTrack}>
          <Slider.Range className={s.SliderRange} />
          <Slider.Range className={s.SliderRange} />
        </Slider.Track>
        <Slider.Thumb aria-label={'Volume'} className={s.SliderThumb} defaultValue={value1} />
        <Slider.Thumb aria-label={'Volume'} className={s.SliderThumb} defaultValue={value2} />
      </Slider.Root>
      <input
        className={s.value}
        onChange={e => setValue2(Number(e.target.value))}
        type={'number'}
        value={value2}
      />
    </form>
  )
}

export default SliderDemo
