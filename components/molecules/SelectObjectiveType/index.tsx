import React from 'react'
import { ObjectiveType } from '~/graphql/types'
import Select, { Props as SelectProps } from '~/components/atoms/Select'

const optionLabelMap: { [K in ObjectiveType]: string } = {
  [ObjectiveType.INDIVIDUAL]: '個人OKR',
  [ObjectiveType.TEAM]: 'チームOKR',
  [ObjectiveType.COMPANY]: '企業OKR'
}

const options = [ObjectiveType.INDIVIDUAL, ObjectiveType.TEAM, ObjectiveType.COMPANY].map((t) => ({
  label: optionLabelMap[t],
  value: t as string
}))

const SelectObjectiveType: React.FC<SelectProps<{ label: string; value: string }>> = (props) => {
  return <Select {...props} options={options} />
}

export default SelectObjectiveType
