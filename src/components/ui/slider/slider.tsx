import {ChangeEvent, useState} from 'react'

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

  const handleValueChange = (value: number[]) => {
    setValue1(value[0])
    setValue2(value[1])
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.startsWith('0')) {
          e.target.value = e.target.value.slice(1);
      }
  }

  return (
      <form className={s.sliderContainer}>
          <input
              type="number"
              value={value1}
              onChange={(e) => setValue1(Number(e.target.value))}
              onInput={handleInput}
              className={s.value}
          />
          <Slider.Root
              className={s.SliderRoot}
              value={[value1, value2]}
              max={maxValue}
              onValueChange={handleValueChange}
              step={1}
          >
              <Slider.Track className={s.SliderTrack}>
                  <Slider.Range className={s.SliderRange}/>
                  <Slider.Range className={s.SliderRange}/>
              </Slider.Track>
              <Slider.Thumb aria-label={'Volume'} className={s.SliderThumb} defaultValue={value1}/>
              <Slider.Thumb aria-label={'Volume'} className={s.SliderThumb} defaultValue={value2}/>
          </Slider.Root>
          <input
              type="number"
              value={value2}
              onChange={(e) => setValue2(Number(e.target.value))}
              className={s.value}
          />
      </form>
  )
}

export default SliderDemo
