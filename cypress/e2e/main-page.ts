class MainPage {
    static visitPage(url: string) {
        cy.visit(url);
    }

    static submit(ariaLabel: String) {
        cy.get(`input[type='submit'][aria-label='${ariaLabel}']`).click();
    }
}

export default MainPage