import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { store } from '../../app/store';

import { MainView } from './main-view';
describe('<MediaCard>', () => {
    const initialState = {}    

    it('renders correctly when there are no items', () => {
        const tree = renderer.create(<Provider store={store}><MainView /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
      });
})
