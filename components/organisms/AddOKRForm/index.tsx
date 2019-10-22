import React from 'react'
import { Form, Button, TextInput, Box, Stack } from 'grommet'
import SelectObjectiveType from '~/components/molecules/SelectObjectiveType'
import {
  useAddObjectiveMutation,
  GetOKRsDocument,
  GetOKRsQuery,
  useGetUsersQuery,
  ObjectiveCreateInput,
  ObjectiveType
} from '~/graphql/types'
import Config from '~/lib/config'
import { Formik, FieldArray } from 'formik'
import User from '~/components/molecules/User'
import Select from '~/components/atoms/Select'
import FormField from '~/components/atoms/FormField'

const AddObjectiveForm: React.FC = () => {
  const { config } = Config.useContainer()

  const { data: userData, loading: userLoading, error: userError } = useGetUsersQuery()
  const users = userLoading || userError ? [] : userData.users

  const [addOKR] = useAddObjectiveMutation({
    update(cache, { data: { createObjective } }) {
      const { objectives } = cache.readQuery<GetOKRsQuery>({ query: GetOKRsDocument })
      cache.writeQuery({ query: GetOKRsDocument, data: { objectives: [createObjective, ...objectives] } })
    }
  })

  return (
    <Formik<ObjectiveCreateInput>
      initialValues={{
        text: '',
        type: ObjectiveType.INDIVIDUAL,
        owner: config.userId ? { connect: { id: config.userId } } : null,
        keyResults: { create: [{ target: '' }] }
      }}
      onSubmit={async (data, { resetForm }) => {
        await addOKR({
          variables: {
            data: { ...data, keyResults: { create: data.keyResults.create.filter(({ target }) => target) } }
          }
        })
        resetForm()
      }}
      render={({ values, handleSubmit, resetForm }) => (
        <Form onSubmit={handleSubmit}>
          <FormField name="text">
            {(props) => (
              <Stack anchor="right">
                <TextInput
                  {...props}
                  plain
                  required
                  placeholder="野心的な Objective を登録する"
                  onChange={(e) => {
                    if (!e.target.value) {
                      resetForm()
                    }
                    if (props.onChange) {
                      props.onChange(e)
                    }
                  }}
                />
                {!!props.value && (
                  <Button margin={{ right: 'small' }} onClick={() => resetForm()}>
                    x
                  </Button>
                )}
              </Stack>
            )}
          </FormField>
          {!!values.text && (
            <Box animation="fadeIn">
              <Box pad={{ left: 'medium' }}>
                {
                  <FieldArray
                    name="keyResults.create"
                    render={(arrayHelpers) => (
                      <>
                        {values.keyResults.create.map((kr, idx) => (
                          <FormField key={idx} name={`keyResults.create.${idx}.target`}>
                            {(props) => (
                              <Stack anchor="right">
                                <TextInput
                                  {...props}
                                  plain
                                  placeholder={`Key Result #${idx + 1}`}
                                  onChange={(e) => {
                                    if (idx === values.keyResults.create.length - 1) {
                                      arrayHelpers.push({ target: '' })
                                    } else if (!e.target.value) {
                                      arrayHelpers.remove(idx)
                                      return // no delete
                                    }
                                    if (props.onChange) {
                                      props.onChange(e)
                                    }
                                  }}
                                />
                                {!!props.value && (
                                  <Button margin={{ right: 'small' }} onClick={() => arrayHelpers.remove(idx)}>
                                    x
                                  </Button>
                                )}
                              </Stack>
                            )}
                          </FormField>
                        ))}
                      </>
                    )}
                  />
                }
              </Box>
              <Box direction="row">
                <Box direction="row" basis="full">
                  <FormField name="type" required as={SelectObjectiveType} />
                  <FormField name="owner.connect.id" margin={{ left: 'small' }}>
                    {(props) => (
                      <Select {...props} options={users} valueKey="id" placeholder="オーナー">
                        {(user) =>
                          user && (
                            <Box pad="small" margin={{ right: '20px' }}>
                              <User {...user} size={19} />
                            </Box>
                          )
                        }
                      </Select>
                    )}
                  </FormField>
                </Box>
                <Box width="150px" border="left" pad={{ left: 'small' }} justify="center">
                  <Button type="submit" label="登録" primary />
                </Box>
              </Box>
            </Box>
          )}
        </Form>
      )}
    />
  )
}

export default AddObjectiveForm
