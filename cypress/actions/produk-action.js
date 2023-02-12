export class ProdukAction {
  withCredentials(kode, nama, deskripsi, hargabeli, hargajual, stok, search) {
    cy.get("body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-tnxwfz div.chakra-stack.css-owjkmg a:nth-child(7) div.css-ewi1jp div.css-1xhj18k > div.css-1mqa38q").click();
    cy.get("body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-1r35f0l div.chakra-container.css-9rmdie div.css-1t33j5j > a.chakra-button.css-1piskbq").click();
    // Validate title
    // cy.get(".css-tyo1sz > .chakra-heading");

    cy.get("#kode").clear().type(kode);
    cy.get("#nama").type(nama);
    cy.get("#deskripsi").type(deskripsi);
    cy.get("#harga\\ beli").type(hargabeli);
    cy.get("#harga\\ jual").type(hargajual);
    cy.get("#stok").clear().type(stok);
    cy.get("#kategori").click();
    // Search Kategori
    cy.get(".css-0 > .chakra-input__group > .chakra-input").type(search);
    cy.get(":nth-child(1) > .css-u3dlpe").click();
    // Klik Button
    cy.get(".chakra-button").click();
  }

  notinputName(kode, nama, deskripsi, hargabeli, hargajual, stok) {
    cy.get("body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-tnxwfz div.chakra-stack.css-owjkmg a:nth-child(7) div.css-ewi1jp div.css-1xhj18k > div.css-1mqa38q").click();
    cy.get("body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-1r35f0l div.chakra-container.css-9rmdie div.css-1t33j5j > a.chakra-button.css-1piskbq").click();
    // Validate title
    // cy.get(".css-tyo1sz > .chakra-heading");

    cy.get("#kode").clear().type(kode);
    cy.get("#nama").type(nama).clear();
    cy.get("#deskripsi").type(deskripsi);
    cy.get("#harga\\ beli").type(hargabeli);
    cy.get("#harga\\ jual").type(hargajual);
    cy.get("#stok").clear().type(stok);
    cy.get("#kategori").click();
    cy.get(":nth-child(1) > .css-u3dlpe").click();
    cy.get(".chakra-button").click();
  }

  notinputhargaBeli(kode, nama, deskripsi, hargabeli, hargajual, stok) {
    cy.get("body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-tnxwfz div.chakra-stack.css-owjkmg a:nth-child(7) div.css-ewi1jp div.css-1xhj18k > div.css-1mqa38q").click();
    cy.get("body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-1r35f0l div.chakra-container.css-9rmdie div.css-1t33j5j > a.chakra-button.css-1piskbq").click();
    // Validate title
    // cy.get(".css-tyo1sz > .chakra-heading");

    cy.get("#kode").clear().type(kode);
    cy.get("#nama").type(nama);
    cy.get("#deskripsi").type(deskripsi);
    cy.get("#harga\\ beli").type(hargabeli).clear();
    cy.get("#harga\\ jual").type(hargajual);
    cy.get("#stok").clear().type(stok);
    cy.get("#kategori").click();
    cy.get(":nth-child(1) > .css-u3dlpe").click();
    cy.get(".chakra-button").click();
  }

  notinputhargaJual(kode, nama, deskripsi, hargabeli, hargajual, stok) {
    cy.get("body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-tnxwfz div.chakra-stack.css-owjkmg a:nth-child(7) div.css-ewi1jp div.css-1xhj18k > div.css-1mqa38q").click();
    cy.get("body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-1r35f0l div.chakra-container.css-9rmdie div.css-1t33j5j > a.chakra-button.css-1piskbq").click();
    // Validate title
    // cy.get(".css-tyo1sz > .chakra-heading");

    cy.get("#kode").clear().type(kode);
    cy.get("#nama").type(nama);
    cy.get("#deskripsi").type(deskripsi);
    cy.get("#harga\\ beli").type(hargabeli);
    cy.get("#harga\\ jual").type(hargajual).clear();
    cy.get("#stok").clear().type(stok);
    cy.get("#kategori").click();
    cy.get(":nth-child(1) > .css-u3dlpe").click();
    cy.get(".chakra-button").click();
  }

  notinputKategori(kode, nama, deskripsi, hargabeli, hargajual, stok) {
    cy.get("body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-tnxwfz div.chakra-stack.css-owjkmg a:nth-child(7) div.css-ewi1jp div.css-1xhj18k > div.css-1mqa38q").click();
    cy.get("body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-1r35f0l div.chakra-container.css-9rmdie div.css-1t33j5j > a.chakra-button.css-1piskbq").click();
    // Validate title
    // cy.get(".css-tyo1sz > .chakra-heading");

    cy.get("#kode").clear().type(kode);
    cy.get("#nama").type(nama);
    cy.get("#deskripsi").type(deskripsi);
    cy.get("#harga\\ beli").type(hargabeli);
    cy.get("#harga\\ jual").type(hargajual);
    cy.get("#stok").clear().type(stok);
    // cy.get("#kategori").click();
    // cy.get(":nth-child(1) > .css-u3dlpe").click();
    cy.get(".chakra-button").click();
  }
}