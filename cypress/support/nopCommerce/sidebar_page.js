export class SideBarPage {

    assertProductsPage() {
        cy.contains("Products").should("be.visible");
        cy.contains("Product name").should("be.visible");
        cy.contains("Category").should("be.visible");
        cy.contains("Search subcategories").should("be.visible");
        cy.contains("Manufacturer").should("be.visible");
        cy.get("label").should("contain", "Warehouse");
    }

    assertCategoriesPage() {
        cy.contains("Categories").should("be.visible");
        cy.contains("Category name").should("be.visible");
        cy.contains("Published").should("be.visible");
        cy.contains("Display order").should("be.visible");
        cy.contains("Edit").should("be.visible");
        cy.contains("Show").should("be.visible");
    }

    assertManufacturersPage() {
        cy.contains("Manufacturers").should("be.visible");
        cy.contains("Manufacturer name").should("be.visible");
        cy.contains("Published").should("be.visible");
        cy.contains("Display order").should("be.visible");
        cy.contains("Edit").should("be.visible");
        cy.contains("Show").should("be.visible");
    }

    assertProductReviewsPage() {
        cy.contains("Product reviews").should("be.visible");
        cy.contains("Created from").should("be.visible");
        cy.get("div").should("contain", "Created to");
        cy.get("div").should("contain", "Message");
        cy.contains("Approved").should("be.visible");
        cy.get("label").should("contain", "Product");
    }

    assertProductTagsPage() {
        cy.contains("Product tags").should("be.visible");
        cy.contains("Tag name").should("be.visible");
        cy.contains("Tagged products").should("be.visible");
        cy.contains("Edit").should("be.visible");
    }

    assertProductAttributesPage() {
        cy.contains("Product attributes").should("be.visible");
        cy.contains("Name").should("be.visible");
        cy.contains("Edit").should("be.visible");
        cy.contains("Show").should("be.visible");
    }

    assertSpecificationAttributesPage() {
        cy.contains("Specification attributes").should("be.visible");
        cy.contains("Name").should("be.visible");
        cy.contains("Display order").should("be.visible");
        cy.contains("Show").should("be.visible");
    }

    assertCheckoutAttributesPage() {
        cy.contains("Checkout attributes").should("be.visible");
        cy.contains("Name").should("be.visible");
        cy.contains("Control type").should("be.visible");
        cy.contains("Required").should("be.visible");
        cy.contains("Display order").should("be.visible");
        cy.contains("Edit").should("be.visible");
        cy.contains("Show").should("be.visible");
    }
}
export const onSideBarPage = new SideBarPage();