import React from 'react'
import { Layer, Box, Heading, Button } from 'grommet'

type Props = {
  onOk: () => void
  onCancel: () => void
}

const Confirm: React.FC<Props> = ({ onOk, onCancel, children }) => {
  return (
    <Layer onClickOutside={onCancel}>
      <Box pad={{ horizontal: 'large', vertical: 'medium' }}>
        <Heading level={3} margin={{ top: 'none' }}>
          {children}
        </Heading>
        <Box direction="row">
          <Button primary label="はい" onClick={onOk} />
          <Button label="キャンセル" margin={{ left: 'small' }} onClick={onCancel} />
        </Box>
      </Box>
    </Layer>
  )
}

export default Confirm
