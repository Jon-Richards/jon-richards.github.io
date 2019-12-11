/** Shape of a single Porfolio Project node in the Store. */
interface Project {
  /** The local id for the project. */
  id: number;
  /** The uuid for the project. */
  uuid: string;
  /** The project's title as displayed in the UI. */
  display_title: string;
  /** A URL safe version of the project's title. */
  url_title:string;
  /** A description of the project. */
  description: string;
  /** Path to the Project's thumbnail for small device sizes. */
  thumb_device_small: string | null;
  /** Path to the Project's thumbnail for medium device sizes. */
  thumb_device_medium: string | null;
  /** Path to the Project's thumbnail for large device sizes. */
  thumb_device_large: string | null;
  /** Array of UUID's corresponding to the tools used to create the project. */
  tools: string[] | null;
}

/** Shape of a single Tool in the Portfolio store. */
type Tool = {
  /** The id of the tool */
  id: number,
  /** The tool's UUID. */
  uuid: string,
  /** The title of the tool as displayed to the user. */
  display_title: string,
  /** Value by which the tool can be filtered. */
  filterable_value: string,
  /** URL safe string for the tool's logo. */
  logo: string,
  /** 
   * If this tool is considered a "core skill", something employers would look
   * for explicitly.
   */
  is_core: boolean
};

/** The shape of the Portfolio model. */
export interface PortfolioStore {
  /** A complete array of portfolio projects displayed by the application. */
  projects: Project[];
  /** A complete array of the tools used to build projects in the portfolio. */
  tools: Tool[];
}