/// <reference types='cypress'/>

import { LoginAction } from "../../actions/login-action";
import { KategoriAction } from "../../actions/kategori-action";
import { KategoriForm } from "../../page-objects/kategori-form";

describe("Tambah Kategori ", () => {
  const login = new LoginAction();
  const Kategori = new KategoriAction();
  const kategoriForm = new KategoriForm();

  beforeEach(() => {
    login.withCredentials("tokorisdho@gmail.com", "123asd@");
  });

  describe("Tambah Kategori Product", () => {
    it("Input Kategori", () => {
      Kategori.withCredentials("Susu Sapi", "Susu Sapi Segar");
      kategoriForm.successMessage().should("contain", "item ditambahkan");
    });

    it("Input Kategori Empty", () => {
      Kategori.withEmpty("Susu Kambing", "Susu Kambing Segar");
      kategoriForm.errorMessage().should("contain", '"name" is not allowed to be empty');
    });
  });
});
