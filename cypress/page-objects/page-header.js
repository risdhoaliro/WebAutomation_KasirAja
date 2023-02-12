import { title } from "process";

export class PageHeader {
  titleUsertoko() {
    return cy.get("body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-1r35f0l div.chakra-container.css-9rmdie div.css-j7qwjs div.css-trlcwy div.css-13pc7q0:nth-child(1) div.chakra-stat.css-1mbo1ls dl:nth-child(1) > dt.chakra-stat__label.css-14go5ty");
  }

  titleUserkasir() {
    return cy.get("#kasir-label");
  }
}
