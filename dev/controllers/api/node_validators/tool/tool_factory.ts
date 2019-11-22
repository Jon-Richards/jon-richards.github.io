/**
 * @fileoverview
 * Contains factory methods for easily building Tool entities.
 */

import { ToolValidator, ToolResponseData } from './tool';
import { v4 as uuid } from 'uuid';

/**
 * **INTENDED FOR TESTING**  
 * Returns a valid Tool entity created with the provided data.  If a property is
 * missing from the data param, a valid value will be randomly generated in its
 * place.
 */
export function buildTool(data: Partial<ToolResponseData> = {}): ToolValidator {
  const stubID = Math.ceil(Math.random() * 1000000);
  const stubUUID = uuid();
  const coinFlip = Math.floor(Math.random() * 2);
  const stubbedData: ToolResponseData = {
    id: stubID,
    uuid: stubUUID,
    display_title: `Tool - ${stubID}`,
    filterable_value: `tool_${stubID}`,
    logo: `stub_logo.png`,
    is_core: coinFlip === 0,
  };

  const finalData = {...stubbedData, ...data};

  return new ToolValidator(finalData);
}