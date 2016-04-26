// Copyright 2004-present Facebook. All Rights Reserved.

/* eslint-disable no-unused-vars */
'use strict';

jest.unmock('../CheckboxWithLabel');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CheckboxWithLabel from '../CheckboxWithLabel';

describe('CheckboxWithLabel', () => {

  it('changes the text after click', () => {
    // Render a checkbox with label in the document
    const checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );

    const checkboxNode = ReactDOM.findDOMNode(checkbox);

    // Verify that it's Off by default
    console.log('\nCheckbox is ' + checkboxNode.textContent)
    expect(checkboxNode.textContent).toEqual('Off');

    // Simulate a click and verify that it is now On
    console.log('Clicking the checkbox...')
    TestUtils.Simulate.change(
      TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
    );
    console.log('Checkbox clicked.')

    console.log('Checkbox is ' + checkboxNode.textContent)
    expect(checkboxNode.textContent).toEqual('On');
  });

});
