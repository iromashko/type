describe("Typescript Framework", () => {
  it("Server alive", () => {
    cy.visit("/", {
      onBeforeLoad(win) {
        cy.spy(win.console, "log").as("consoleLog");
      }
    });
  });
});
