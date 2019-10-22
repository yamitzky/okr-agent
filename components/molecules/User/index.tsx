import React, { useMemo } from 'react'
import md5 from 'blueimp-md5'
import styled from 'styled-components'
import { Box, Text, Stack } from 'grommet'

type Props = {
  name?: string
  email?: string
  size?: number
  showName?: boolean
}

const Image = styled.img`
  border-radius: 100%;
`

const hash = (str: string): number => {
  // https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
  let hash = 0
  if (str.length == 0) return hash
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  return hash
}

const User: React.FC<Props> = ({ name, email, size = 40, showName = false }) => {
  // TODO: fix for SSR
  const imageURL = useMemo(() => {
    if (email) {
      const hash = md5(email)
      return `https://www.gravatar.com/avatar/${hash}?d=blank&s=${size}`
    }
  }, [email, size])

  const color = useMemo(() => {
    if (email) {
      const mod = hash(email) % 4
      return `neutral-${mod + 1}`
    } else {
      return 'status-unknown'
    }
  }, [email])

  return (
    <Box direction="row" align="center">
      <Stack>
        <Box background={color} width={`${size}px`} height={`${size}px`} round="full" align="center" justify="center">
          <Text size={`${size * 0.4}px`} weight="bold" wordBreak="keep-all" style={{ lineHeight: '100%' }}>
            {!name || name.length <= 2 ? (
              name
            ) : (
              <>
                {name.slice(0, 2)}
                <br />
                {name.slice(2, 4)}
              </>
            )}
          </Text>
        </Box>
        {email && <Image {...{ loading: 'lazy' }} src={imageURL} width={size} height={size} />}
      </Stack>
      {showName && <Text margin={{ left: 'xsmall' }}>{name}</Text>}
    </Box>
  )
}

export default User
