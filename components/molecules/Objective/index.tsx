import React, { useState, useCallback } from 'react'
import { Box, Heading } from 'grommet'
import EditMenu from '~/components/molecules/EditMenu'
import Confirm from '~/components/molecules/Confirm'
import TextInputForm from '~/components/molecules/TextInputForm'
import Prefix from '~/components/atoms/Prefix'

type Props = {
  text: string
  onUpdate: (data: { text?: string }) => void
  onDelete: () => void
  onAdd: () => void
}

const Objective: React.FC<Props> = ({ text, onDelete, onUpdate, onAdd }) => {
  const [editable, setEditable] = useState(false)
  const handleStartEdit = useCallback(() => {
    setEditable(true)
  }, [setEditable])
  const handleEdit = useCallback(
    (text: string) => {
      setEditable(false)
      onUpdate({ text })
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
        <Heading level={2} margin="none">
          <Prefix>O: </Prefix>
        </Heading>
        {editable ? (
          <TextInputForm initialValue={text} onSubmit={handleEdit} onCancel={() => setEditable(false)} />
        ) : (
          <Heading level={2} margin="none">
            {text}
          </Heading>
        )}
      </Box>
      <EditMenu onDelete={() => setShowDelete(true)} onEdit={handleStartEdit} onAdd={onAdd} />
      {showDelete && (
        <Confirm onOk={handleDelete} onCancel={() => setShowDelete(false)}>
          削除しますか？
        </Confirm>
      )}
    </Box>
  )
}

export default Objective
