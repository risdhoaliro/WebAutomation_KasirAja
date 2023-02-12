export class KategoriAction {
  withCredentials(nama, deskripsi) {
    cy.get("body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-tnxwfz div.chakra-stack.css-owjkmg a:nth-child(6) div.css-ewi1jp div.css-1xhj18k > div.css-1mqa38q").click();
    cy.get("body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-1r35f0l div.chakra-container.css-9rmdie div.css-1t33j5j > a.chakra-button.css-1piskbq").click();
    // Validate title
    cy.get(".css-tyo1sz > .chakra-heading");

    cy.get("#nama").type(nama);
    cy.get("#deskripsi").type(deskripsi);
    cy.get(".chakra-button").click();
    cy.wait(10);
  }

  withEmpty(nama, deskripsi) {
    cy.get("body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-tnxwfz div.chakra-stack.css-owjkmg a:nth-child(6) div.css-ewi1jp div.css-1xhj18k > div.css-1mqa38q").click();
    cy.get("body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-1r35f0l div.chakra-container.css-9rmdie div.css-1t33j5j > a.chakra-button.css-1piskbq").click();
    // Validate title
    cy.get(".css-tyo1sz > .chakra-heading");

    cy.get("#nama").clear().type(nama).clear();
    cy.get("#deskripsi").type(deskripsi).clear();
    cy.get(".chakra-button").click();
  }
}
