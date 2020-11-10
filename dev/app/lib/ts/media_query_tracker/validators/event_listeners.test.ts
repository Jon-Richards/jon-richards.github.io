import { validateEventListeners } from './event_listeners';
import { MQTEventListener } from '../interfaces/event_listener';

describe('The event listeners validator.', () => {
  it('Returns false if not passed an array.', () => {
    const test_1 = validateEventListeners(null as unknown as []);
    const test_2 = validateEventListeners(undefined as unknown as []);
    const test_3 = validateEventListeners('foo' as unknown as []);
    expect(test_1).toBe(false);
    expect(test_2).toBe(false);
    expect(test_3).toBe(false);
  });

  it('Returns false if passed an invalid event listener.', () => {
    const test_1 = validateEventListeners([
      { foo: 'bar', alpha: 'beta' } as unknown as MQTEventListener
    ]);
    const test_2 = validateEventListeners([
      { event: 'resize', throttle: -10 }
    ]);
    const test_3 = validateEventListeners([
      { foo: 22, alpha: false } as unknown as MQTEventListener
    ]);
    expect(test_1).toBe(false);
    expect(test_2).toBe(false);
    expect(test_3).toBe(false);
  });

  it('Returns true if passed an empty array.', () => {
    const test_1 = validateEventListeners([]);
    expect(test_1).toBe(true);
  });

  it('Returns true if passed a valid array of event listeners.', () => {
    const test_1 = validateEventListeners([
      { event: 'resize', throttle: 300 },
      { event: 'load', throttle: 0 }
    ]);
    expect(test_1).toBe(true);
  });
});
