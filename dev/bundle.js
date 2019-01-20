/**
 * @fileoverview
 * The entrypoint at which the asset bundler begins traversing the application.
 * Assets that are not imported by a parent must be listed here.
 * Downstream imports will automatically be picked up and treeshaken.
 */

// @ts-check

'use strict';

import './controllers/main';
import './views/pages/home';
