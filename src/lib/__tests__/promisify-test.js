/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @emails oncall+jsinfra
 */
'use strict';

jest.unmock('../promisify');

describe('promisify', () => {
  let promisify;

  beforeEach(() => {
    promisify = require('../promisify');
  });

  pit('should resolve', () => {
    const foo = promisify(callback => {
      callback(null, 1);
    });

    return foo().then(res => {
      expect(res).toBe(1);
    });
  });

  pit('should resolve with args', () => {
    const foo = promisify((a, b, callback) => {
      callback(null, a + b);
    });

    return foo(3, 5).then(res => {
      expect(res).toBe(8);
    });
  });

  pit('should reject with args', () => {
    const foo = promisify((a, b, callback) => {
      callback(new Error('lol'));
    });

    return foo(3, 5).catch(err => {
      expect(err.message).toBe('lol');
    });
  });
});
