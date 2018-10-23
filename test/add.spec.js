import 'mocha'
import { expect } from 'chai'

import { add } from '../src/index'

describe('Add', () => {
  it('1 + 1 = 2', () => {
    expect(add(1,1)).to.equal(2)
  })
})