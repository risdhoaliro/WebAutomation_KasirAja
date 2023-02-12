export class KategoriForm {
  errorMessage() {
    return cy.get("body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-1r35f0l div.chakra-container.css-9rmdie div.css-1t33j5j > div.chakra-alert.css-qwanz3:nth-child(1)");
  }

  successMessage() {
    return cy.get("body.chakra-ui-light:nth-child(2) li.chakra-toast div.chakra-toast__inner div.chakra-alert.css-3b6enb div.css-njbp03 > div.chakra-alert__desc.css-zycdy9");
  }
}
