export class ProductsPage {

  clickButtonAddNewProductsPage() {
    cy.contains("Add new").click();
  }

  assertAddNewProductPage() {
    cy.contains("Add a new product").should("be.visible");
    cy.contains("Product info").should("be.visible");
    cy.contains("Product name").should("be.visible");
    cy.contains("Short description").should("be.visible");
    cy.contains("Full description").should("be.visible");
    cy.contains("SKU").should("be.visible");
    cy.contains("Categories").should("be.visible");
    cy.contains("Manufacturers").should("be.visible");
    cy.contains("Published").should("be.visible");
    cy.contains("Product tags").should("be.visible");
    cy.contains("Available start date").should("be.visible");
    cy.contains("Not returnable").should("be.visible");
  }

  fillProductInfoFields(ProductName, ShortDescription, SKU, ProductTags, AdminComment, Price) {
    cy.get("#Name").clear().type(ProductName);
    cy.get("#ShortDescription").type(ShortDescription);
    cy.get("#Sku").type(SKU);
    cy.contains("Enter tags ...").type(ProductTags);
    cy.get("#AdminComment").type(AdminComment);
    cy.get('#product-price-area > .col-md-9 > .k-widget > .k-numeric-wrap > .k-formatted-value').clear()
    cy.get('#Price').type(Price)
  }

  saveAddedNewProduct() {
    cy.contains("Save").click()
  }

  assertsavedAddedNewProduct() {
    cy.contains("The new product has been added successfully.").should("be.visible");
  }

  serchAddedProduct(ProductName) {
    cy.get("#SearchProductName").type(ProductName);
    cy.get("#search-products").click();
  }

  clickEditButtonOnFoundProduct() {
    cy.wait(500);
    cy.get('a').contains("Edit").should("be.visible");
    cy.get(':nth-child(1) > .button-column > .btn',).click();
  }

  assertEditProductDetailsPage() {
    cy.contains("Edit product details - Test cypress").should("be.visible");
    cy.contains("Product info").should("be.visible");
    cy.contains("Product name").should("be.visible");
    cy.contains("Short description").should("be.visible");
    cy.contains("Full description").should("be.visible");
    cy.contains("SKU").should("be.visible");
    cy.contains("Categories").should("be.visible");
    cy.contains("Manufacturers").should("be.visible");
    cy.contains("Published").should("be.visible");
    cy.contains("Product tags").should("be.visible");
    cy.contains("Available start date").should("be.visible");
    cy.contains("Not returnable").should("be.visible");
  }

  editProductInfoFields(ProductNameEdited, ShortDescriptionEdited, SKUEdited, ProductTagsEdited, AdminCommentEdited, PriceEdited) {
    cy.get("#Name").clear().type(ProductNameEdited);
    cy.get("#ShortDescription").clear().type(ShortDescriptionEdited);
    cy.get("#Sku").clear().type(SKUEdited);
    cy.get('.tag-editor-delete').click()
    cy.get("label").contains("Product tags").type(ProductTagsEdited);
    cy.get("#AdminComment").click().clear().type(AdminCommentEdited);
    cy.get('#product-price-area > .col-md-9 > .k-widget > .k-numeric-wrap > .k-formatted-value').clear()
    cy.get('#Price').type(PriceEdited)
  }

  clickButtonSaveEditedProductDetails() {
    cy.contains("Save").click();
  }

  assertProductHasbeenUpdatedSuccessfully() {
    cy.contains("The product has been updated successfully.").should("be.visible")
  }

  assertDownloadCatalogPDFButtton() {
    cy.get('button[name="download-catalog-pdf"]')
      .should('be.visible')
  }

  serchEditedProduct(ProductNameEdited) {
    cy.get("#SearchProductName").type(ProductNameEdited);
    cy.get("#search-products").click();
  }

  assertEditedProductInfoFields() {
    cy.contains("Test cypress 2").should("be.visible");
    cy.get('#Sku').should('have.value', "12345678");
    cy.get('div[class="tag-editor-tag"]').should('include.text', "automation 2");
    cy.get('#AdminComment').should('include.text', "Software 2");
    cy.get('#Price').should('have.value', "1800");
  }

  clickDeleteButton() {
    cy.get("#product-delete").click();
    cy.get('button[class="btn btn-danger float-right"]').click();
  }

  assertProductDeletedSuccessfully() {
    cy.contains("The product has been deleted successfully.").should("be.visible");
  }

  assertSaveAndContinueEditButton() {
    cy.contains("The product has been updated successfully.").should("be.visible");

  }

  clickButtonCopyProduct() {
    cy.get('#copyproduct-window > .modal-dialog > .modal-content > form > .form-horizontal > .modal-footer > .btn')
      .click();
  }

  assertProductCopiedSuccessfully() {
    cy.contains("The product has been copied successfully").should("be.visible");
  }

  clickAndAssertAdvancedButton() {
    cy.get('[for="advanced-settings-mode"]').click();
    cy.contains("Manufacturers").should('not.have.value', 'Manufacturers');
    cy.contains("Published").should('not.have.value', 'Published');
    cy.contains("Product tags").should('not.have.value', 'Product tags');
    cy.get('[for="advanced-settings-mode"]').click();
    cy.contains("Manufacturers").should("be.visible");
    cy.contains("Published").should("be.visible");
    cy.contains("Product tags").should("be.visible");
  }

  clickSettingsButton() {
    cy.get("button").contains("Settings").click();
  }

  assertSetingsButton() {
    cy.get("h4").contains("Settings").should("be.visible");
    cy.get("div").contains('Check fields you want to see on the product details page in the "basic" mode.')
      .should("be.visible");
    cy.get("div").contains("Product info").should("be.visible");
    cy.get("div").contains("Prices").should("be.visible");
    cy.get("div").contains("Inventory").should("be.visible");
    cy.get('#productsettings-window > .modal-dialog > .modal-content > .modal-header > .close > span')
      .click();
  }

  clickArrowButtonExport() {
    cy.get('button[class="btn btn-success dropdown-toggle"]').click();
  }

  assertButtonExport() {
    cy.contains("Export to XML (all found)").should("be.visible");
    cy.contains("Export to XML (selected)").should("be.visible");
    cy.contains("Export to Excel (all found)").should("be.visible");
    cy.contains("Export to Excel (selected)").should("be.visible");
  }

  assertButtonImport() {
    cy.get("h4").contains("Import from Excel").should("be.visible");
    cy.contains("Imported products are distinguished by SKU. If the SKU already exists, then its corresponding product will be updated.")
      .should("be.visible");
    cy.contains("Excel file").should("be.visible");
    cy.contains("Import from Excel").click()
    cy.get("button").contains("Import from Excel").click();
  }

  chekmarkFoundProduct() {
    cy.wait(1500)
    cy.get('input[name="checkbox_products"]').check()
  }

  clickButtonYesSureDeleteSelectedProduct() {
    cy.wait(1000);
    cy.get('button[type="submit"]').contains("Yes").click();
  }

  assertDeleteSelectedProduct() {
    cy.get('td[valign="top"]').should('not.have.text', 'Test Cypress')
  }

}
export const onProductsPage = new ProductsPage();