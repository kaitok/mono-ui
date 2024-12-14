import { render } from '@testing-library/react'
import TextField from './TextField'
import { it } from 'vitest'

it('test', async () => {
  render(<TextField width="100" />)
})
