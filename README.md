# Github Portfolio Design Doc

## Purpose
* Create a place to display portfolio work visually.

## Technical / Design Requirements
* Leverage advanced interactive design concepts in a purposeful away:
    * Motion to explain context.
    * Single Page Application for faster percieved load times.
    * Strong typography for less cognitive load.
    * Elegant use of imagery to convey tone as well as display work.
* Work on as many devices as reasonably possible.
    * Chrome, Firefox, Safari (desktop and mobile), IE, Edge, Samsung Internet.
    * Address a wide range of screen sizes.  (320px wide and up.)
* Deployable as a static application, e.g. no server layer as this is a requirement on 
    Github's end.

## Architecture
* Strong separation of Model / View / Controller concerns.
    * Increases maintainability.
    * Easier to scope work involved.