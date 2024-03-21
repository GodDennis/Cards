import { ChangeEvent } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

type Props = {
  maxValue: number
  minValue: number
  onChange?: (values: number[]) => void
  value: number[]
}

export const Slider = (props: Props) => {
  const { maxValue = 10, minValue = 0, onChange, value } = props

  const handleValueChange = (value: number[]) => {
    onChange?.(value)
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.startsWith('0')) {
      e.target.value = e.target.value.slice(1)
    }
  }

  const onMinInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value <= maxValue && +e.currentTarget.value >= minValue) {
      onChange?.([+e.currentTarget.value, value[1]])
    } else {
      onChange?.([minValue, value[1]])
    }
  }

  const onMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value <= maxValue && +e.currentTarget.value >= minValue) {
      onChange?.([value[0], +e.currentTarget.value])
    } else {
      onChange?.([value[0], maxValue])
    }
  }

  return (
    <form className={s.sliderContainer}>
      <input
        className={s.value}
        onChange={onMinInputChange}
        onInput={handleInput}
        type={'number'}
        value={value[0] ?? minValue}
      />
      <SliderRadix.Root
        className={s.SliderRoot}
        max={maxValue}
        onValueChange={handleValueChange}
        step={1}
        value={value.length ? value : [minValue, maxValue]}
      >
        <SliderRadix.Track className={s.SliderTrack}>
          <SliderRadix.Range className={s.SliderRange} />
          <SliderRadix.Range className={s.SliderRange} />
        </SliderRadix.Track>
        <SliderRadix.Thumb
          aria-label={'Volume'}
          className={s.SliderThumb}
          defaultValue={minValue}
        />
        <SliderRadix.Thumb
          aria-label={'Volume'}
          className={s.SliderThumb}
          defaultValue={maxValue}
        />
      </SliderRadix.Root>
      <input
        className={s.value}
        onChange={onMaxInputChange}
        onInput={handleInput}
        type={'number'}
        value={value[1] ?? maxValue}
      />
    </form>
  )
}
