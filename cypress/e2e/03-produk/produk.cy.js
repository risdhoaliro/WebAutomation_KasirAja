/// <reference types='cypress'/>

import { LoginAction } from "../../actions/login-action";
import { ProdukAction } from "../../actions/produk-action";
import { ProdukForm } from "../../page-objects/produk-form";

describe(" Tambah Produk", () => {
  const login = new LoginAction();
  const Produk = new ProdukAction();
  const produkForm = new ProdukForm();

  beforeEach(() => {
    login.withCredentials("tokorisdho@gmail.com", "123asd@");
  });

  describe("Tambah Kategori Product", () => {
    it("Input Produk", () => {
      Produk.withCredentials("BRSUSU01", "Susu Sapi Segar", "Susu dari Sapi Pilihan", "10000", "15000", "25", "Susu Sapi");
      produkForm.successMessage().should("contain", "item ditambahkan");
    });

    it("Input Produk Not Input Name", () => {
      Produk.notinputName("BRSUSU01", "Susu Sapi Segar", "Susu dari Sapi Pilihan", "10000", "15000", "25");
      produkForm.erorMessagenotName().should("contain", '"name" is not allowed to be empty');
    });

    it("Input Produk Not Input Harga Beli", () => {
      Produk.notinputhargaBeli("BRSUSU01", "Susu Sapi Segar", "Susu dari Sapi Pilihan", "10000", "15000", "25");
      produkForm.erorMessagenotHargabeli().should("contain", '"cost" must be a number');
    });

    it("Input Produk Not Input Harga Jual", () => {
      Produk.notinputhargaJual("BRSUSU01", "Susu Sapi Segar", "Susu dari Sapi Pilihan", "10000", "15000", "25");
      produkForm.erorMessagenotHargajual().should("contain", '"price" must be a number');
    });

    it("Input Produk Not Kategori", () => {
      Produk.notinputKategori("BRSUSU01", "Susu Sapi Segar", "Susu dari Sapi Pilihan", "10000", "15000", "25");
      produkForm.erorMessagenotKategori().should("contain", '"category_id" is required');
    });
  });
});
