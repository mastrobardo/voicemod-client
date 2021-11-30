import React from 'react';
import renderer from 'react-test-renderer';
import { NoSound } from './no-sounds';

describe('<NoSounds />', ()=> {
  it('renders correctly when there are no items', () => {
    const tree = renderer.create(<NoSound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
