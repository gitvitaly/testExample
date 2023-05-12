import { onProductsPage } from "../../support/nopCommerce/products_page";
const product = require("../../fixtures/nopCommerce/products.json");


describe('Products', () => {
    it("Validate Add new products", { tags: 'smoke' }, function () {
        cy.login();
        cy.sidebarMenu("Catalog");
        cy.sidebarMenu("Products");
        onProductsPage.clickButtonAddNewProductsPage();
        onProductsPage.assertAddNewProductPage();
        onProductsPage.fillProductInfoFields(
            product.AddNewProduct.ProductInfo.ProductName,
            product.AddNewProduct.ProductInfo.ShortDescription,
            product.AddNewProduct.ProductInfo.SKU,
            product.AddNewProduct.ProductInfo.ProductTags,
            product.AddNewProduct.ProductInfo.AdminComment,
            product.AddNewProduct.ProductInfo.Price
        );
        onProductsPage.saveAddedNewProduct();
        onProductsPage.assertsavedAddedNewProduct();
    });

    it("Validate Edit details in the added product", { tags: 'smoke' }, function () {
        cy.login();
        cy.sidebarMenu("Catalog");
        cy.sidebarMenu("Products");
        onProductsPage.serchAddedProduct(
            product.AddNewProduct.ProductInfo.ProductName
        );
        onProductsPage.clickEditButtonOnFoundProduct();
        onProductsPage.assertEditProductDetailsPage();
        onProductsPage.editProductInfoFields(
            product.ProductInfoEdited.ProductNameEdited,
            product.ProductInfoEdited.ShortDescriptionEdited,
            product.ProductInfoEdited.SKUEdited,
            product.ProductInfoEdited.ProductTagsEdited,
            product.ProductInfoEdited.AdminCommentEdited,
            product.ProductInfoEdited.PriceEdited
        );
        onProductsPage.clickButtonSaveEditedProductDetails();
        onProductsPage.assertProductHasbeenUpdatedSuccessfully();
        onProductsPage.serchEditedProduct(
            product.ProductInfoEdited.ProductNameEdited
        );
        onProductsPage.clickEditButtonOnFoundProduct();
        onProductsPage.assertEditedProductInfoFields();
    });

    it("Validate Top menu buttons Edit ditails section", { tags: 'smoke' }, function () {
        cy.login();
        cy.sidebarMenu("Catalog");
        cy.sidebarMenu("Products");
        onProductsPage.serchAddedProduct(
            product.AddNewProduct.ProductInfo.ProductName
        );
        onProductsPage.clickEditButtonOnFoundProduct();
        cy.TopMenuButtonsEditProduct("Save and Continue Edit");
        onProductsPage.assertSaveAndContinueEditButton();
        cy.TopMenuButtonsEditProduct("Copy product");
        onProductsPage.clickButtonCopyProduct();
        onProductsPage.assertProductCopiedSuccessfully();
        onProductsPage.clickAndAssertAdvancedButton();
        onProductsPage.clickSettingsButton();
        onProductsPage.assertSetingsButton();
        onProductsPage.clickDeleteButton();
        onProductsPage.assertProductDeletedSuccessfully();
    });

    it("Validate Top menu buttons Products section", { tags: 'smoke' }, function () {
        cy.login();
        cy.sidebarMenu("Catalog");
        cy.sidebarMenu("Products");
        cy.TopMenuButtonsProduct("Add new");
        onProductsPage.assertAddNewProductPage();
        cy.go('back');
        onProductsPage.assertDownloadCatalogPDFButtton();
        onProductsPage.clickArrowButtonExport();
        onProductsPage.assertButtonExport();
        cy.TopMenuButtonsProduct("Import");
        onProductsPage.assertButtonImport();
        onProductsPage.serchAddedProduct(
            product.AddNewProduct.ProductInfo.ProductName
        );
        onProductsPage.chekmarkFoundProduct();
        cy.TopMenuButtonsProduct("Delete (selected)")
        onProductsPage.clickButtonYesSureDeleteSelectedProduct();
        onProductsPage.assertDeleteSelectedProduct();
    });
});
