import React from 'react'
import useId from './index'
import {render} from '@testing-library/react'

describe('useId()', () => {
  it('should generate an incremented ID value', () => {
    const Comp = () => {
      const justNull = null
      const id0 = useId(justNull)
      const id1 = useId()

      return (
        <div>
          <div id={id0} data-testid="0">
            Wow
          </div>
          <div id={id1} data-testid="1">
            Ok
          </div>
        </div>
      )
    }

    const {getByTestId} = render(<Comp />)
    const id0 = getByTestId('0').id
    const id1 = getByTestId('1').id
    expect(id1).not.toEqual(id0)
  })

  it('uses fallback ID', () => {
    const Comp = () => {
      const newId = useId('awesome')
      return (
        <div id={newId} data-testid="awesome">
          Ok
        </div>
      )
    }

    const {getByTestId} = render(<Comp />)
    expect(getByTestId('awesome').id).toEqual('awesome')
  })
})
