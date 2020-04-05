import * as React from 'react'
import { shallow } from 'enzyme'
import App from './App'

test('app text should be "Hello, World!"', () => {
  const app = shallow(<App />)
  expect(app.text()).toBe('Hello, World!')
})
