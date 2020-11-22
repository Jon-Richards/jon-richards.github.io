/** Shape of a single Porfolio Project node in the Store. */
interface Project {
  /** The local id for the project. */
  id: number;
  /** The uuid for the project. */
  uuid: string;
  /** The project's title as displayed in the UI. */
  display_title: string;
  /** A URL safe version of the project's title. */
  url_title: string;
  /** A description of the project. */
  description: string;
  /** All images associated with the project. */
  images: Image[];
  /** Array of UUID's corresponding to the tools used to create the project. */
  tools: string[] | null;
}

/** An image that appears in the Portfolio. */
type Image = {
  /** The id of the image. */
  id: number;
  /** A unique identifier for the image. */
  uuid: string;
  /** The kind of image, e.g. "thumbnail" or "banner". */
  category: string;
  /** The width (in pixels) of the image file. */
  width: number;
  /** The height (in pixels) of the image file. */
  height: number;
  /** A description of the image. */
  description: string;
  /** A path to the image's source file. */
  source: string;
}

/** Shape of a single Tool in the Portfolio store. */
type Tool = {
  /** The id of the tool */
  id: number;
  /** The tool's UUID. */
  uuid: string;
  /** The title of the tool as displayed to the user. */
  display_title: string;
  /** Value by which the tool can be filtered. */
  filterable_value: string;
  /** URL safe string for the tool's logo. */
  logo: string;
  /**
   * If this tool is considered a "core skill", something employers would look
   * for explicitly.
   */
  is_core: boolean;
};

/** The shape of the Portfolio model. */
export interface PortfolioStore {
  /** A complete array of portfolio projects displayed by the application. */
  projects: Project[];
  /** A complete array of the tools used to build projects in the portfolio. */
  tools: Tool[];
}
