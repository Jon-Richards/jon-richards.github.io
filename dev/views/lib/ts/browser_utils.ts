/**
 * @fileoverview
 * Library of methods to aid in interacting with browser APIs etc.
 */

import { SMALL_DEVICE_THRESHOLD } from './constants';

/**
 * Checks if the viewport is within SMALL_DEVICE_THRESHOLD.
 * @return true the viewport is within SMALL_DEVICE_THRESHOLD.
 */
export const isSmallScreen = (): boolean => {
  return window.innerWidth <= SMALL_DEVICE_THRESHOLD;
};
