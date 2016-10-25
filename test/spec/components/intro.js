import assert from 'assert'
import React from 'react'
import { shallow } from 'enzyme'
import Intro from '../../../src/components/intro'

describe('<Intro />', function () {
    it('renders correctry', function () {
        const wrapper = shallow(<Intro />)
        assert(wrapper.contains('Hello, react-native meetup!!'))
    })
})
