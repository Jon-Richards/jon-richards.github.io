import { html } from 'lit';

/**
 * Renders the HTML needed to import an external stylesheet within a custom
 * element.
 */
export const withStylesheet = html`
  <style>
    @import "${process.env.ASSET_PATH + '/core.css'}";
  </style>
`;

