import React, { useState, useCallback } from 'react'
import { Confidence } from '~/graphql/types'
import { Text, Box, BoxProps } from 'grommet'
import SelectConfidence from '~/components/molecules/SelectConfidence'
import EditMenu from '~/components/molecules/EditMenu'
import Confirm from '~/components/molecules/Confirm'
import TextInputForm from '~/components/molecules/TextInputForm'
import Prefix from '~/components/atoms/Prefix'

type KeyResult = {
  number: number
  target: string
  current: string
  confidence?: Confidence
  onDelete: () => void
  onUpdate: (data: { target?: string; confidence?: Confidence | null }) => void
}

type Props = KeyResult & BoxProps

const KeyResult: React.FC<Props> = ({ number, target, confidence, onDelete, onUpdate }) => {
  const [editable, setEditable] = useState(false)
  const handleStartEdit = useCallback(() => {
    setEditable(true)
  }, [setEditable])
  const handleEdit = useCallback(
    (target: string) => {
      setEditable(false)
      onUpdate({ target })
    },
    [onUpdate, setEditable]
  )

  const [showDelete, setShowDelete] = useState(false)
  const handleDelete = useCallback(() => {
    setShowDelete(false)
    onDelete()
  }, [setShowDelete, onDelete])

  return (
    <Box direction="row" align="center">
      <Box direction="row" align="center" basis="full">
        <Text size="large">
          <Prefix>KR #{number}:</Prefix>
        </Text>
        {editable ? (
          <TextInputForm initialValue={target} onSubmit={handleEdit} onCancel={() => setEditable(false)} />
        ) : confidence === Confidence.ABORT ? (
          <Text style={{ textDecoration: 'line-through' }} size="large" color="dark-6">
            {target}
          </Text>
        ) : (
          <Text size="large">{target}</Text>
        )}
      </Box>
      <Box border="bottom">
        <SelectConfidence
          plain
          value={confidence}
          size="small"
          onChange={(e) => onUpdate({ confidence: e.target.value })}
        />
      </Box>
      <EditMenu onDelete={() => setShowDelete(true)} onEdit={handleStartEdit} />
      {showDelete && (
        <Confirm onOk={handleDelete} onCancel={() => setShowDelete(false)}>
          削除しますか？
        </Confirm>
      )}
    </Box>
  )
}

export default KeyResult
