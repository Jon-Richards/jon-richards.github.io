(() => {
  // src/module/foo.ts
  function Foo() {
    console.log("bar");
  }
  console.log("blah");

  // src/index.ts
  console.log("hello world!");
  Foo();
  console.log("blah");
})();
//# sourceMappingURL=index.js.map
