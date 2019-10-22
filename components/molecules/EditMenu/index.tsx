import React from 'react'
import { Menu, Text } from 'grommet'

type Props = {
  onEdit?: () => void
  onDelete?: () => void
  onAdd?: () => void
}

const EditMenu: React.FC<Props> = ({ onEdit, onDelete, onAdd }) => {
  let items = []
  if (onAdd) {
    items = [...items, { label: <Text size="small">追加</Text>, onClick: onAdd }]
  }
  if (onEdit) {
    items = [...items, { label: <Text size="small">編集</Text>, onClick: onEdit }]
  }
  if (onDelete) {
    items = [...items, { label: <Text size="small">削除</Text>, onClick: onDelete }]
  }
  return <Menu label="︙" size="small" items={items} icon={false} dropAlign={{ top: 'bottom', right: 'right' }} />
}

export default EditMenu
