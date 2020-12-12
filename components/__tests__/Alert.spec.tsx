import React from 'react';
import renderer from 'react-test-renderer';
import Alert from '../Alert';

test('AppTitle', () => {
  const component = renderer.create(<Alert type="success" >成功！</Alert>);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
