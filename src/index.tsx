import * as React from 'react'
import useLayoutEffect from '@react-hook/passive-layout-effect'

let ID = 0
const genId = (): number => ID++
let serverHandoffComplete = false

const useId = (
  fallbackId?: string | null | 0 | false,
  prefix = '🅰'
): string | undefined => {
  const [id, setId] = React.useState<number | undefined>(
    serverHandoffComplete ? genId : void 0
  )

  useLayoutEffect(() => {
    if (id === void 0) {
      setId(ID++)
    }

    serverHandoffComplete = true
  }, [])

  return fallbackId ? fallbackId : id === void 0 ? id : prefix + id
}

export default useId
