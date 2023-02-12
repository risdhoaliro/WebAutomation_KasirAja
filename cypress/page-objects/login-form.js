export class LoginForm {
  errorMessage() {
    return cy.get("body.chakra-ui-light:nth-child(2) div.css-1y1lvqg div.css-16in75i div.css-1w7v3tn div.css-11jlpvc > div.chakra-alert.css-qwanz3:nth-child(1)");
  }
}
