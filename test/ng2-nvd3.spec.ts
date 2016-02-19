import {bootstrap} from 'angular2/platform/browser';
import {Component, OnInit} from 'angular2/core';
import {nvD3} from '../lib/ng2-nvd3';

declare var describe, it, expect, d3: any;

describe('ng2-nvd3 tests', () => {

  it('true is true', () => {
    expect(true).toEqual(true)
  });

  it('null is not the same thing as undefined', () => {
    expect(null).not.toEqual(undefined);
  });

})