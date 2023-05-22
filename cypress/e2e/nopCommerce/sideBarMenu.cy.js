import { onSideBarPage } from "../../support/nopCommerce/sidebar_page";


describe('Side bar menu', () => {
    it("Validate sidebar Catalog", { tags: 'smoke' }, function () {
        cy.login();
        cy.sidebarMenu("Catalog");
        cy.sidebarMenu("Products");
        onSideBarPage.assertProductsPage();
        cy.sidebarMenu("Categories");
        onSideBarPage.assertCategoriesPage();
        cy.sidebarMenu("Manufacturers");
        onSideBarPage.assertManufacturersPage();
        cy.sidebarMenu("Product reviews");
        onSideBarPage.assertProductReviewsPage();
        cy.sidebarMenu("Product tags");
        onSideBarPage.assertProductTagsPage();
        cy.sidebarMenu("Attributes");
        cy.sidebarMenu("Product attributes");
        onSideBarPage.assertProductAttributesPage();
        cy.sidebarMenu("Specification attributes");
        onSideBarPage.assertSpecificationAttributesPage();
        cy.sidebarMenu(" Checkout attributes");
        onSideBarPage.assertCheckoutAttributesPage();
    });

    it("Validate sidebar Sales", { tags: 'smoke' }, function () {
        cy.login();
        cy.sidebarMenu("Sales");
        cy.sidebarMenu("Orders");
        onSideBarPage.assertOrdersPage();
        cy.sidebarMenu("Shipments");
        onSideBarPage.assertShipmentsPage();
        cy.sidebarMenu("Return requests");
        onSideBarPage.assertReturnRequestsPage();
        cy.sidebarMenu("Recurring payments");
        onSideBarPage.assertRecurringPaymentsPage();
        cy.sidebarMenu("Gift cards");
        onSideBarPage.assertGiftCardsPage();
        cy.sidebarMenu("Shopping carts and wishlists");
        onSideBarPage.assertShoppingCartsAndWishlistsPage();
    });
});