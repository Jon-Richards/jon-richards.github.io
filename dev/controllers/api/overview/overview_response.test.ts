/**
 * @fileoverview
 * Contains tests for the OverviewResponse class.
 */

import { OverviewResponse, OverviewResponseShape } from './overview_response';
import { PieceResponseShape, ToolResponseShape, uuid } from '../mediator';
import { MOCK_TOOL } from '../entities/tool.test';
import { MOCK_PIECE } from '../entities/piece.test';

const MOCK_OVERVIEW_RESPONSE = new OverviewResponse({
  pieces: [
    { id: 1, ...MOCK_PIECE, uuid: uuid() },
    { id: 2, ...MOCK_PIECE, uuid: uuid() },
    { id: 3, ...MOCK_PIECE, uuid: uuid() },
    { id: 4, ...MOCK_PIECE, uuid: uuid() },
    { id: 5, ...MOCK_PIECE, uuid: uuid() },
  ],
  tools: [{ ...MOCK_TOOL }],
});
