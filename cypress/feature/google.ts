import MainPage from "../e2e/main-page";

const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("I visit {string}", (url: string) => {
    MainPage.visitPage(url);
});

Then("I should see a search bar", () => {
    cy.get("textarea").should("have.attr", "title", "Поиск");
});

When("Type in the search bar cypress", () => {
    cy.get("textarea[title='Поиск']").type('cypress').type('{enter}');
   // MainPage.submit('Поиск в Google');
});

Then("I should see references about cypress", () => {
    cy.get("cite").should(p => {
      expect(p.length).to.greaterThan(1);
      expect(p.first()).to.contain('cypress');
    })
});