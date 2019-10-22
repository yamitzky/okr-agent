import React, { useCallback, useState } from 'react'
import { ThemeContext, Box, Button, Stack, TextInput, TextInputProps } from 'grommet'

type Props = TextInputProps & {
  initialValue?: string
  onSubmit?: (value: string) => void
  onCancel?: () => void
}

const TextInputForm: React.FC<Props> = ({ onSubmit, onCancel, initialValue = '', ...props }) => {
  const [value, setValue] = useState(initialValue)
  const handleSave = useCallback(() => {
    if (onSubmit) {
      onSubmit(value)
    }
    setValue(initialValue)
  }, [onSubmit, value, setValue, initialValue])

  const handleCancel = useCallback(() => {
    if (onCancel) {
      onCancel()
    }
    setValue(initialValue)
  }, [onCancel])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCancel()
      }
    },
    [handleCancel]
  )

  return (
    <Stack fill anchor="right">
      <TextInput {...props} value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown} />
      {value ? (
        <ThemeContext.Extend
          value={{
            button: { padding: { vertical: '0', horizontal: '10px' } },
            text: { medium: { size: '12px' } }
          }}
        >
          <Box animation="fadeIn" direction="row">
            <Button margin={{ right: 'small' }} label="保存" onClick={handleSave} />
          </Box>
        </ThemeContext.Extend>
      ) : null}
    </Stack>
  )
}

export default TextInputForm
