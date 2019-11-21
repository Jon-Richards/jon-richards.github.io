/** Shape of a single Tool in the Portfolio store. */
export type ToolModelShape = {
  /** The id of the tool */
  id: number,
  /** The tool's UUID. */
  uuid: string,
  /** The title of the tool as displayed to the user. */
  displayTitle: string,
  /** Value by which the tool can be filtered. */
  filterableValue: string,
  /** URL safe string for the tool's logo. */
  logo: string,
  /** 
   * If this tool is considered a "core skill", something employers would look
   * for explicitly.
   */
  isCore: boolean
};