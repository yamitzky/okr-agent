import React, { useMemo } from 'react'
import { FormField as GrommetFormField, FormFieldProps } from 'grommet'
import { useField } from 'formik'
import { isFunction } from 'util'

type Props = Omit<FormFieldProps, 'component'> & {
  as?: any
  children?: (props: any) => React.ReactNode | React.ReactNode
}

const FormField: React.FC<Props> = ({ name, children, as: asElement, ...props }) => {
  const [field, meta] = useField(name)

  return (
    <GrommetFormField {...props} error={meta.error}>
      {isFunction(children)
        ? children({ ...field, ...props, name })
        : React.createElement(asElement, { ...field, ...props, name }, children)}
    </GrommetFormField>
  )
}

export default FormField
