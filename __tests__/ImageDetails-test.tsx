import React from 'react';
import { render } from '@testing-library/react-native';
import ImageDetails from '../src/components/ImageDetails';

describe('ImageDetails component', () => {
  it('renders correctly with provided props', () => {
    const props = {
      name: 'Example Name',
      category: 'Example Category',
      imgUrl: 'https://example.com/image.jpg',
    };

    const { getByText, getByTestId } = render(<ImageDetails {...props} />);

    // Assert that the component renders the correct elements with the provided props
    expect(getByTestId('close-button')).toBeDefined();
    expect(getByTestId('share-button')).toBeDefined();
    expect(getByTestId('fav-button')).toBeDefined();
    expect(getByText(props.name)).toBeDefined();
    expect(getByText(props.category)).toBeDefined();
    expect(getByTestId('image')).toHaveProp('source', { uri: props.imgUrl });
  });

  // Add more test cases if needed
});
