import React from 'react'
import Select, { Props as SelectProps } from '~/components/atoms/Select'
import { Confidence } from '~/graphql/types'
import { Box } from 'grommet'

const optionLabelMap: { [K in Confidence]: string } = {
  [Confidence.AWESOME]: '🌞 自信あり',
  [Confidence.SOSO]: '🌥 普通',
  [Confidence.BAD]: '☔ 不安',
  [Confidence.ABORT]: '🚫 中止'
}

const options = [Confidence.AWESOME, Confidence.SOSO, Confidence.BAD, Confidence.ABORT, null].map((t) => ({
  label: optionLabelMap[t] || '🤔 わからない',
  shortLabel: (optionLabelMap[t] || '🤔').split(' ')[0],
  value: t
}))

const SelectConfidence: React.FC<Omit<SelectProps<{ label: string; value: string }>, 'options'>> = ({
  value,
  ...props
}) => {
  return (
    <Select
      {...props}
      options={options}
      value={value || null}
      valueLabel={
        <Box pad={{ left: 'small', vertical: 'xsmall' }}>{options.find((o) => o.value === value).shortLabel}</Box>
      }
    />
  )
}

export default SelectConfidence
