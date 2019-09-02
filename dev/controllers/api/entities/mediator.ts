/**
 * @fileoverview
 * Mediates dependencies for API entities.
 */

/** Internal */
export { 
    Piece as PieceEntity,
    PieceResponseShape
} from './piece';
export {
    Tool as ToolEntity,
    ToolResponseShape
} from './tool';

/** External */
import * as isUrl from 'validator/lib/isURL';
import * as isEmpty from 'validator/lib/isEmpty';
import * as isUUID from 'validator/lib/isUUID';
import * as isNumeric from 'validator/lib/isNumeric';
export { isUrl, isEmpty, isUUID, isNumeric };
export { v4 as uuid } from 'uuid';