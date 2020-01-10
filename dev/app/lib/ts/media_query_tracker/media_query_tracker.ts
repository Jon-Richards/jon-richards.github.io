import { throttle } from 'lodash';
import {
  MQTMediaQuery,
  MQTEventListener,
  MQTEvent,
  MQTCallback
} from './interfaces';
import { 
  validateEventListeners,
  validateMediaQueries,
  validateCallback
} from './validators';

/**
 * Provides an API for evaluating a collection of media queries based on the
 * state of the window object.
 */
export class MediaQueryTracker<Q extends MQTMediaQuery = MQTMediaQuery> {
  /** The media queries tracked by this MediaQueryTracker instance. */
  private readonly queries: Q[] = [];
  /** Event listeners that are attacked to the window object. */
  private readonly listeners: MQTEventListener[] = [];
  /** Callback function that fires when one of the listeners is triggered. */
  private readonly callback: MQTCallback<Q> = () => {};
  /** Stores check that the window object is available. */
  private readonly inWindow: boolean;

  constructor (
    /** An array of MediaQueries to track. */
    mediaQueries: Q[],
    /** Window events on which the supplied MediaQueries should be evaluated. */
    listeners: MQTEventListener[] | null = null,
    /** 
     * Callback function that will be invoked when any of the listeners from the
     * previous argument fire.
     */
    callback: MQTCallback<Q> | null = null,
  ) {
    if (typeof window !== 'undefined' && window.document) {
      this.inWindow = true;
    } else {
      this.inWindow = false;
    }
    if (validateMediaQueries(mediaQueries) === true) {
      this.queries = mediaQueries;
    }
    if (listeners !== null && validateEventListeners(listeners) === true) {
      this.listeners = listeners;
    }
    if (callback !== null && validateCallback(callback) === true) {
      this.callback = callback;
    }
    if (this.listeners.length && callback !== null && this.queries.length) {
      this.addEventListeners();
    }
  }

  private addEventListeners(): void {
    if (this.inWindow) {
      this.listeners.forEach(listener => {
        window.addEventListener(
          listener.event,
          throttle(this.handleWindowEvent.bind(this), listener.throttle),
          {capture: false}
        );
      });
    }
  }

  private handleWindowEvent(e: MQTEvent<Q>['event']): void {
    this.callback({matches: this.getMatches(), event: e});
  }

  /**
   * An array of the MQTMediaQueries currently tracked by this instance that
   * match the current state of the window object.
   * @return The MQTMediaQueries that evaluate to true.
   */
  getMatches(): Q[] {
    const matches: Q[] = [];
    if (this.inWindow === true) {
      this.queries.forEach(query => {
        if (window.matchMedia(query.query).matches === true) {
          matches.push(query);
        }
      });
    }
    return matches;
  }
}