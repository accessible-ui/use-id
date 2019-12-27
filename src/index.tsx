import {useState, useEffect} from 'react'
import useLayoutEffect from '@react-hook/passive-layout-effect'

let serverHandoffComplete = false
let id = 0
const genId = (): number => id++

const useId = (
  fallbackId?: string | null | 0 | false,
  prefix = '🅰'
): string | undefined => {
  /*
   * If this instance isn't part of the initial render, we don't have to do the
   * double render/patch-up dance. We can just generate the ID and return it.
   */
  const initialId = serverHandoffComplete ? genId : void 0
  const [id, setId] = useState<number | undefined>(initialId)

  useLayoutEffect(() => {
    if (id === void 0) {
      /*
       * Patch the ID after render. We do this in `useLayoutEffect` to avoid any
       * rendering flicker, though it'll make the first render slower (unlikely
       * to matter, but you're welcome to measure your app and let us know if
       * it's a problem).
       */
      setId(genId())
    }
  }, [])

  useEffect(() => {
    if (!serverHandoffComplete) {
      /*
       * Flag all future uses of `useId` to skip the update dance. This is in
       * `useEffect` because it goes after `useLayoutEffect`, ensuring we don't
       * accidentally bail out of the patch-up dance prematurely.
       */
      serverHandoffComplete = true
    }
  }, [])

  return fallbackId ? fallbackId : prefix + id
}

export default useId
