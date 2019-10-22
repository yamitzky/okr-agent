import React, { useState, useCallback } from 'react'
import KeyResult from '~/components/molecules/KeyResult'
import { Box, Text } from 'grommet'
import Objective from '~/components/molecules/Objective'
import { Confidence } from '~/graphql/types'
import TextInputForm from '~/components/molecules/TextInputForm'
import Prefix from '~/components/atoms/Prefix'

type KeyResultProps = {
  id: string
  target: string
  current: string
  confidence?: Confidence
}

type Props = {
  id: string
  text: string
  keyResults: KeyResultProps[]
  onDelete: () => void
  onUpdate: (data: { text: string }) => void
  onAddKeyResult: (target: string) => void
  onDeleteKeyResult: (id: string) => void
  onUpdateKeyResult: (id: string, data: { target?: string; confidence?: Confidence | null }) => void
}

const OKR: React.FC<Props> = ({
  id,
  text,
  keyResults,
  onDelete,
  onUpdate,
  onAddKeyResult,
  onDeleteKeyResult,
  onUpdateKeyResult
}) => {
  const [adding, setAdding] = useState(false)
  const handleAdd = useCallback(
    (kr) => {
      onAddKeyResult(kr)
      setAdding(false)
    },
    [setAdding, onAddKeyResult]
  )
  return (
    <>
      <Box border="all" round="xsmall" pad="small">
        <Objective text={text} onDelete={onDelete} onUpdate={onUpdate} onAdd={() => setAdding(true)} />
        <Box margin={{ top: keyResults.length ? 'small' : null, left: 'small' }}>
          {keyResults.map(({ id, target, current, confidence }, idx) => (
            <Box key={id} margin={{ top: idx ? 'xsmall' : null }}>
              <KeyResult
                number={idx + 1}
                target={target}
                current={current}
                confidence={confidence}
                onDelete={() => onDeleteKeyResult(id)}
                onUpdate={(data) => onUpdateKeyResult(id, data)}
              />
            </Box>
          ))}
          {adding ? (
            <Box direction="row" align="center" basis="full">
              <Text size="large">
                <Prefix>KR #{keyResults.length + 1}:</Prefix>
              </Text>
              <TextInputForm onSubmit={handleAdd} onCancel={() => setAdding(false)} />
            </Box>
          ) : null}
        </Box>
      </Box>
    </>
  )
}

export default OKR
