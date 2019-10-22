import React, { useMemo } from 'react'
import { Select as GrommetSelect, SelectProps } from 'grommet'

type Option = {
  label: string
  value: string
}

export type Props<T extends {} | string> = Omit<SelectProps, 'labelKey' | 'options'> & {
  children?: (option: T) => React.ReactNode
  options: T[]
  value: string
  valueKey?: string
}

const Select: <T extends {} | string>(p: Props<T>) => React.ReactElement<Props<T>> = (props) => {
  const {
    children,
    options,
    value: rawValue,
    onChange: rawOnChange,
    valueKey: rawValueKey,
    valueLabel: rawValueLabel
  } = props
  let labelKey
  let valueKey = rawValueKey
  let valueLabel = rawValueLabel
  let value: Option | string = rawValue
  let onChange = rawOnChange

  const isObjOptions = options.length && typeof options[0] === 'object'

  if (isObjOptions) {
    if (!valueKey) {
      valueKey = 'value'
    }
    if (!children) {
      labelKey = 'label'
    }
    value = ((options as any) as Option[]).find((opt) => opt[valueKey] === value) || value || ''
  }

  if (children) {
    labelKey = children
  }
  valueLabel = useMemo(() => {
    if (children) {
      return children(value)
    }
    return valueLabel
  }, [children, value, valueLabel])

  onChange = (e) => {
    if (rawOnChange) {
      let event = e
      let value = e.value
      if (isObjOptions) {
        value = e.value[valueKey]
      }
      event = { ...event, value, target: { ...props, value } }
      rawOnChange(event)
    }
  }

  return (
    <GrommetSelect
      {...props}
      value={value}
      labelKey={labelKey}
      valueKey={valueKey}
      valueLabel={valueLabel}
      onChange={onChange}
    />
  )
}

export default Select
