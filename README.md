## Objectives

### Main Objective:

Create a portfolio site that will not need to be rebuilt when the frameworks of the time go out of style.

It should:
- Be extremely performant.
- Look professional.
- Be accessible.
- Be SEO friendly.


### Technical Objectives:
- Performance
    - Download speed.
        - Minimal network calls.
        - Minify everything.
        - GZip.
        - Inline models as JSON.
    - Low JS overhead.
        - No frameworks.
        - No plugins.
        - ES2012 to avoid transpilation.
        - No domain abstraction.
    - Low UI asset overhead.
        - Inline SVG.
        - Standard web fonts.
        - Inline CSS.
        - Declarative CSS.
        - Load external assets conditionally.
            - Smaller assets for mobile devices.
            - Smaller assets for smaller screen sizes.
            - No assets where applicable.
    - Accessibilty
        - SEO friendly.
            - Semantic routing.
            - Semantic HTML.
        - Use Aria attributes.


- UX
    - Simplistic design.
        - Content centric.
        - Strong visual hierarchy.
        - Neutral color palette.
    - Fully responsive.
        - 320px screens and up.
        - Minimal breakpoints and helper classes.
    - No hard transitions.
    - No hard page refreshes.
        - Custom router.
    - Few UI image assets.
        - Inline SVG.
        - Drawn with CSS.
    - Strong typography.
    - Preloaders where applicable.
        - Drawn inline.

## Roadmap
- [ ] Phase 1 (First Draft)
    - [x] Tech research and evaluation.
    - [x] Initial build process.
    - [x] Finalized project structure.
    - [x] Finalized stack.
    - [ ] First draft of design.
    - [ ] First draft of HTML.
    - [ ] First draft of JS.
    - [ ] First draft of CSS.
    - [ ] Initial content strategy.

- [ ] Phase 2 (Second Draft)
    - [ ] Revised JS.
    - [ ] Revised CSS.
    - [ ] Revised HTML.
    - [ ] Revised content strategy.
    - [ ] Documentation.

- [ ] Phase 3 (Optimization)
    - [ ] Optimized HTML.
    - [ ] Optimized CSS.
    - [ ] Optimized JS.
    - [ ] Finalized build process.
    - [ ] Finalized content strategy.
    - [ ] Revised documentation.

- [ ] Pgase 4 (Launch)
    - [ ] Initial content population.
    - [ ] Deployment.


## Notes

### 1/1/2019

- At the time of this writing, eslint-loader throws an error when using config files in custom paths.  Files but be in the root directory.