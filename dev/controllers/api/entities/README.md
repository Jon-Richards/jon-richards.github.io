# api/entities

## What is an entity?

Each entity corresponds to an object that can be included as part of an API response.  Entities are
designed to validate their corresponding objects, provide graceful feedback if a problem occurs,
and replace malformatted data with empty values when necessary.

Responses (not included in the /entities directory) can therefor compose entities to achieve complex
validation and ensure data recieved from external sources is always in a valid state when the app
begins working with it.

## Purpose:

It's worth noting that entities are simply types of data that the app _expects_ to recieve.  They do
**not** need to be a 1:1 representation of what is stored in the model.