import {
  MediaQueryTracker, 
  MQTEventListener,
  MQTMediaQuery
} from './index';

const testEvent = new Event('test_event');
const listeners: MQTEventListener[] = [
  {
    event: 'test_event' as unknown as MQTEventListener['event'],
    throttle: 0
  }
];

beforeAll(() => {
  // JSDom (used by Jest and Enzyme) does not support window.matchMedia at the
  // the time of this writing.  This functionality is mocked below, with very
  // simple query values that return true if matched to the query argument.
  // tslint:disable-next-line:max-line-length
  // @see https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: query === 'screen' || query === '(min-width: 720px)',
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});
describe('The MediaQueryTracker class.', () => {
  it('Should bind events to the window.', () => {
    const callback = jest.fn();
    const mqt = new MediaQueryTracker(
      [{id: 'xs', query: '(min-width: 320px)'}],
      listeners,
      callback
    );
    window.dispatchEvent(testEvent);
    
    expect(callback).toBeCalled();
  });

  it('Return only matching media queries.', () => {
    const events: Array<MQTMediaQuery['id']> = [];
    const mqt = new MediaQueryTracker(
      [
        {id: 'screen', query: 'screen'},
        {id: '320', query: '(min-width: 320px)'},
        {id: '720', query: '(min-width: 720px)'},
      ],
      listeners,
      (e) => {
        e.matches.forEach(match => events.push(match.id));
      }
    );
    window.dispatchEvent(testEvent);
    
    expect(events[0]).toBe('screen');
    expect(events.length).toBe(2);
  });

  it('Throttles the callback function if called in rapid succession.', () => {
    const callback = jest.fn();
    const testEvent_2 = new Event('test_event_2');
    const mqt = new MediaQueryTracker(
      [{id: 'xs', query: '(min-width: 320px)'}],
      [
        {
          event: 'test_event' as unknown as MQTEventListener['event'],
          throttle: 5000
        },
        {
          event: 'test_event_2' as unknown as MQTEventListener['event'],
          throttle: 0
        }
      ],
      callback
    );
    window.dispatchEvent(testEvent);
    window.dispatchEvent(testEvent);
    window.dispatchEvent(testEvent);
    window.dispatchEvent(testEvent);
    window.dispatchEvent(testEvent);
    window.dispatchEvent(testEvent);
    window.dispatchEvent(testEvent);
    
    window.dispatchEvent(testEvent_2);
    window.dispatchEvent(testEvent_2);
    window.dispatchEvent(testEvent_2);
    window.dispatchEvent(testEvent_2);

    expect(callback).toBeCalledTimes(5);
  });
});