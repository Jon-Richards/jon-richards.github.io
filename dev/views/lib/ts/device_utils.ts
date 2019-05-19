/**
 * @fileoverview
 * Utility class for interacting with device apis, e.g. the browser, window, etc.
 */

import { SMALL_DEVICE_THRESHOLD } from './constants';

/** Provides helper methods for interacting with the device, e.g. the browser, window, etc. */
export class DeviceUtils {
    /** Screen width, in pixels, at which adaptive elements should be toggled for small devices. */
    private static readonly SMALL_DEVICE_THRESHOLD = 1080;

    /** 
     * Checks if the viewport is within SMALL_DEVICE_THRESHOLD.
     * @return true the viewport is with SMALL_DEVICE_THRESHOLD.
     */
    get hasSmallScreen(): boolean {
        return window.innerWidth <= DeviceUtils.SMALL_DEVICE_THRESHOLD;
    }
}