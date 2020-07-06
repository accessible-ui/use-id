import React from 'react'
import {render, screen} from '@testing-library/react'
import useId from './index'

describe('useId()', () => {
  it('should generate an incremented ID value', () => {
    const Comp = () => {
      const justNull = null
      const id0 = useId(justNull)
      const id1 = useId()

      return (
        <div>
          <div id={id0} data-testid='0'>
            Wow
          </div>
          <div id={id1} data-testid='1'>
            Ok
          </div>
        </div>
      )
    }

    render(<Comp />)
    const id0 = screen.getByTestId('0').id
    const id1 = screen.getByTestId('1').id
    expect(id1).not.toEqual(id0)
  })

  it('uses fallback ID', () => {
    const Comp = () => {
      const newId = useId('awesome')
      return (
        <div id={newId} data-testid='awesome'>
          Ok
        </div>
      )
    }

    render(<Comp />)
    expect(screen.getByTestId('awesome').id).toEqual('awesome')
  })
})
