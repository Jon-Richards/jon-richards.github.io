/**
 * @fileoverview
 * Contains factory methods for easily building Piece entities.
 */

import { Piece, PieceResponseData, uuid } from './mediator';

/**
 * Returns a valid Piece entity created with the provided data.  If a property 
 * is missing from the data param, a valid value will be randomly generated in
 * its place.
 * @param data 
 */
export function buildPiece(data: Partial<PieceResponseData> = {}): Piece {
  const stubID = Math.ceil(Math.random() * 1000000);
  const stubUUID = uuid();
  const stubbedData: PieceResponseData = {
    id: stubID,
    uuid: stubUUID,
    display_title: `Piece - ${stubID}`,
    url_title: `piece_${stubID}`,
    description: `A sample description for piece id: ${stubID}`,
    thumb_device_small: `thumb_${stubID}_small.png`,
    thumb_device_medium: `thumb_${stubID}_medium.png`,
    thumb_device_large: `thumb_${stubID}_large.png`,
    tools: []
  };

  const finalData = {...stubbedData, ...data};

  return new Piece(finalData);
}