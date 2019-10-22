import React from 'react'
import { withApollo } from '~/lib/apollo'
import AddObjectiveForm from '~/components/organisms/AddOKRForm'
import OKRList from '~/components/organisms/OKRList'
import Header from '~/components/organisms/Header'
import { Box } from 'grommet'

const Home = () => (
  <div>
    <Header />
    <AddObjectiveForm />
    <Box margin={{ top: 'small' }}>
      <OKRList />
    </Box>
  </div>
)

export default withApollo(Home)
