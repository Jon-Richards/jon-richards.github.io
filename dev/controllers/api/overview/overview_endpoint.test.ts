/**
 * @fileoverview
 * Contains tests for the OverviewEndpoint class.
 */

import { API_BASE, OverviewEndpoint, isUrl, uuid } from '../mediator';

const mockResponse: OverviewEndpoint['response'] = {
    pieces: [
        {
            "id": 1,
            "uuid": uuid(),
            "display_title": "Piece 1",
            "url_title": "piece_1",
            "description": "The first piece in the overview.",
            "thumb_device_small": "small.jpg",
            "thumb_device_medium": "medium.jpg",
            "thumb_device_large": "large.jpg",
            "tools": ["one", "two", "three"]
        },
        {
            "id": 2,
            "uuid": uuid(),
            "display_title": "Piece 2",
            "url_title": "piece_2",
            "description": "The second piece in the overview.",
            "thumb_device_small": "small.jpg",
            "thumb_device_medium": "medium.jpg",
            "thumb_device_large": "large.jpg",
            "tools": ["one", "two", "three"]
        },
    ],
    tools: [
        {
            "id": 1,
            "uuid": "typescript",
            "name": "TypeScript",
            "value": "typescript",
            "logo": "foo",
            "core": true
        },
        {
            "id": 2,
            "uuid": "react",
            "name": "React",
            "value": "react",
            "logo": "bar",
            "core": true
        }
    ]
};

describe('The OverviewEndpoint class.', () => {
    it('Should contain a url to the overview endpoint in the API.', () => {
        const endpoint = new OverviewEndpoint();
        expect(endpoint.URL).toEqual(API_BASE + '/overview');
    });
});