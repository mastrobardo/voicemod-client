import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { Sound } from '../MainView/main-view.types';
import { store } from '../../app/store';

import { MediaCard } from './card';
describe('<MediaCard>', () => {
    const props: Sound = {
        _id: '123',
        icon: 'anIcon',
        name: 'aName',
        playbacks: 0,
        price: 0
    }
    const initilState = {}    

    it('renders correctly when there are no items', () => {
        const tree = renderer.create(<Provider store={store}><MediaCard {...props} /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
      });
})
