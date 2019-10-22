import React from 'react'
import { Box, Text } from 'grommet'
import Config from '~/lib/config'
import { useGetUsersQuery } from '~/graphql/types'
import User from '~/components/molecules/User'
import Select from '~/components/atoms/Select'

const Header: React.FC = () => {
  const { config, updateConfig } = Config.useContainer()
  const { data, loading, error } = useGetUsersQuery()

  const users = loading || error ? [] : data.users

  return (
    <Box direction="row" justify="between" align="center">
      <Text size="large" weight="bold">
        OKR Agent
      </Text>
      <Select value={config.userId} valueKey="id" options={users} onChange={(e) => updateConfig({ userId: e.value })}>
        {(user) => <Box pad="xsmall">{user ? <User {...user} showName /> : 'ユーザーを選ぶ'}</Box>}
      </Select>
    </Box>
  )
}

export default Header
