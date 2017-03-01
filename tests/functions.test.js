import displayMessageNoEvents from '../src/functions/displayMessageNoEvents';
import { assert, expect } from 'chai';
import MockData from '../mock-data';

describe('displayMessageNoEvents', function() {
  let noData = []
  let data = MockData

  it('displays a message when there is no data', function() {
    let message = displayMessageNoEvents(noData);
    expect(message).to.eql('No Events Matching the Type and/or Location Selected')
  });

  it('does not display a message when there is data', function() {
    let message = displayMessageNoEvents(data);
    expect(message).to.eql('')
  });
});
