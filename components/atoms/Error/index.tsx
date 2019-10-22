import React from 'react'

type Props = {
  message: string
}

const Error: React.FC<Props> = ({ message }) => <div>Error: {message}</div>

export default Error
