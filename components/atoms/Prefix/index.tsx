import React from 'react'
import { Text } from 'grommet'
import styled from 'styled-components'

const Wrapper = styled.span`
  color: #999;
  font-family: monospace;
  font-weight: bold;
  margin-right: 8px;
`
const Prefix: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Prefix
