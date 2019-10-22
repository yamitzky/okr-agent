import React, { useCallback } from 'react'
import OKR from '~/components/molecules/OKR'
import Error from '~/components/atoms/Error'
import {
  useGetOKRsQuery,
  useDeleteObjectiveMutation,
  GetOKRsQuery,
  GetOKRsDocument,
  useUpdateObjectiveMutation,
  useUpdateKeyResultMutation,
  ObjectiveUpdateInput,
  KeyResultUpdateInput
} from '~/graphql/types'
import { Box } from 'grommet'

const OKRList: React.FC = () => {
  const { data, loading, error } = useGetOKRsQuery()
  const [deleteObjective] = useDeleteObjectiveMutation()
  const [updateObjective] = useUpdateObjectiveMutation()
  const [updateKeyResult] = useUpdateKeyResultMutation()

  const handleDelete = useCallback(
    (id: string) => {
      deleteObjective({
        variables: { id },
        update(cache) {
          const { objectives } = cache.readQuery<GetOKRsQuery>({ query: GetOKRsDocument })
          cache.writeQuery({ query: GetOKRsDocument, data: { objectives: objectives.filter((o) => o.id !== id) } })
        }
      })
    },
    [deleteObjective]
  )
  const handleUpdate = useCallback(
    (id: string, data: ObjectiveUpdateInput) => {
      updateObjective({ variables: { id, data } })
    },
    [updateObjective]
  )

  const handleDeleteKeyResult = useCallback(
    (id: string, keyResultID: string) => {
      updateObjective({
        variables: {
          id,
          data: {
            keyResults: { delete: [{ id: keyResultID }] }
          }
        }
      })
    },
    [updateObjective]
  )
  const handleUpdateKeyResult = useCallback(
    (id: string, data: KeyResultUpdateInput) => {
      updateKeyResult({ variables: { id, data } })
    },
    [updateKeyResult]
  )
  const handleAddKeyResult = useCallback(
    (id: string, target: string) => {
      updateObjective({ variables: { id, data: { keyResults: { create: [{ target }] } } } })
    },
    [updateObjective]
  )

  if (error) {
    return <Error {...error} />
  }
  if (loading) {
    return <>loading...</>
  }

  return (
    <Box>
      {data.objectives.map(({ id, text, keyResults }, idx) => (
        <Box key={id} margin={{ top: idx ? 'small' : null }}>
          <OKR
            id={id}
            text={text}
            keyResults={keyResults}
            onDelete={() => handleDelete(id)}
            onUpdate={(data) => handleUpdate(id, data)}
            onAddKeyResult={(target) => handleAddKeyResult(id, target)}
            onDeleteKeyResult={(keyResultID) => handleDeleteKeyResult(id, keyResultID)}
            onUpdateKeyResult={handleUpdateKeyResult}
          />
        </Box>
      ))}
    </Box>
  )
}

export default OKRList
