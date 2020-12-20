/** Project standard fonts. */
export class Fonts {
  /** URLs that host external fonts. */
  static readonly URLS = [
    'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800|Heebo:800&display=swap',
  ];

  /**
   * The Roboto font-family.
   * @see https://fonts.google.com/specimen/Heebo
   */
  static readonly HEEBO = {
    url: '',
    fontFamily: '"Heebo", sans-serif',
    fontStyles: {
      regular: {
        name: 'regular',
        weights: {
          regular: 400,
        },
      },
    },
  };

  /**
   * The Open Sans font-family.
   * @see https://fonts.google.com/specimen/Open+Sans
   */
  static readonly OPEN_SANS = {
    url: '',
    fontFamily: '"Open Sans", sans-serif',
    fontStyles: {
      regular: {
        name: 'regular',
        weights: {
          light: 300,
          regular: 400,
          bold: 700,
          extraBold: 800,
        },
      },
      italic: {
        name: 'italic',
        weights: {
          regular: 400
        }
      }
    },
  };
}
