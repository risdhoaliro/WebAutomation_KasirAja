export class LoginAction {
  withCredentials(email, password) {
    cy.visit("https://kasirdemo.belajarqa.com/");
    cy.url().should("include", "login");

    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get("body.chakra-ui-light:nth-child(2) div.css-1y1lvqg div.css-16in75i div.css-1w7v3tn div.css-11jlpvc > button.chakra-button.css-1n8i4of:nth-child(4)").click();
  }
}
