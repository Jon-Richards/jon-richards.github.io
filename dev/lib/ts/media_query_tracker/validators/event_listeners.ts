import { MQTEventListener } from '../interfaces';

function validateEvent(identifier: keyof WindowEventMap): boolean {
  let isValid = true;
  try {
    if (typeof identifier !== 'string') {
      throw new TypeError('Event identifier must be a string.');
    }
    if (identifier.length === 0) {
      throw new RangeError('Event identifier cannot be empty.');
    }
  }
  catch(error) {
    console.error(error);
    isValid = false;
  }
  finally {
    return isValid;
  }
}

function validateThrottle(
  rate: MQTEventListener['throttle']
): boolean{
  let isValid = true;
  try {
    if (typeof rate !== 'number') {
      throw new TypeError('Throttle must be a number.');
    }
    if (rate < 0) {
      throw new RangeError('Throttle cannot be negative.');
    }
  }
  catch(error) {
    console.error(error);
    isValid = false;
  }
  finally {
    return isValid;
  }
}

function validateEventListener(listener: MQTEventListener): boolean {
  if (!validateThrottle(listener.throttle)) return false;
  if (!validateEvent(listener.event)) return false;
  return true;
}

/**
 * Validates an array of MQTEventListeners in context of one another.
 * @param listeners An array of MQTEventListeners to validate.
 * @return True if all validations pass, false if not.
 */
export function validateEventListeners(listeners: MQTEventListener[]): boolean {
  let isValid = true;
  try {
    if (!Array.isArray(listeners)) {
      throw new TypeError('Listeners must be an array.');
    }
    
    const validated: MQTEventListener[] = [];
    listeners.forEach(listener => {
      const duplicateEvents = validated.filter(existing => {
        return existing.event === listener.event;
      });
      if (duplicateEvents.length > 0) {
        throw new TypeError(
          'MediaQueryTracker recieved two listeners for the same event: ' +
          `${listener.event}.`
        );
      }

      if (validateEventListener(listener) === true) validated.push(listener);
    });
  }
  catch (error) {
    console.error(error);
    isValid = false;
  }
  finally {
    return isValid;
  }
}