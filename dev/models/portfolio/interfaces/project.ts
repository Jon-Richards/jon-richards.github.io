/** Shape of a single Porfolio Project node in the Store. */
export interface ProjectModelShape {
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