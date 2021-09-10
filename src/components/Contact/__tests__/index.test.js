import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact/>);
    });
    
    it('matches sanpshot', () => {
        const { asFragment } = render(<Contact/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('links are visible', () => {
    it('inserts text into h1 tag', () => {
        const { getByTestId } = render(<Contact/>);
        expect(getByTestId('contact')).toHaveTextContent('Contact me');
    });

    it('inserts text into button', () => {
        const { getByTestId } = render(<Contact/>);
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    });
});