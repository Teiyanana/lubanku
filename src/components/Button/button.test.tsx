import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'

test('test our first test case', () => {
  const wrapper = render(<Button>Nice</Button>)
  const element = wrapper.queryByText('Nice')
  expect(element).toBeTruthy()
  expect(element).toBeInTheDocument()
})

describe('test Button component', () => {
  it('should render the correct default button', () => {

  })
  it('should render the correct components based on deffirent props', () => {
    
  })
})