import { useState, useCallback } from 'react'
import { createContainer } from 'unstated-next'

type Config = {
  userId: string | null
}

function useConfig(initialState: Config) {
  let [config, setConfig] = useState(initialState)
  const updateConfig = useCallback(
    (update: Partial<Config>) => {
      setConfig({ ...config, ...update })
    },
    [config, setConfig]
  )
  return { config, updateConfig }
}

const Config = createContainer(useConfig)
export default Config
