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
    assertOrdersPage() {
        cy.contains("Orders").should("be.visible");
        cy.contains("Start date").should("be.visible");
        cy.contains("End date").should("be.visible");
        cy.contains("Order status").should("be.visible");
        cy.contains("Payment status").should("be.visible");
        cy.get("label").should("contain", "Payment statuses");
    }

    assertShipmentsPage() {
        cy.contains("Shipments").should("be.visible");
        cy.contains("Start date").should("be.visible");
        cy.contains("End date").should("be.visible");
        cy.contains("Shipment #").should("be.visible");
        cy.contains("Order #").should("be.visible");
        cy.contains("Pickup from store").should("be.visible");
    }

    assertReturnRequestsPage() {
        cy.contains("Return requests").should("be.visible");
        cy.contains("Start date").should("be.visible");
        cy.contains("End date").should("be.visible");
        cy.contains("Customer").should("be.visible");
        cy.contains("Quantity").should("be.visible");
        cy.contains("ID").should("be.visible");
    }

    assertRecurringPaymentsPage() {
        cy.contains("Recurring payments").should("be.visible");
        cy.contains("Customer").should("be.visible");
        cy.contains("ID").should("be.visible");
        cy.contains("Cycle length").should("be.visible");
        cy.contains("Cycle period").should("be.visible");
        cy.get("th").should("contain", "Is active");
    }

    assertGiftCardsPage() {
        cy.contains("Gift cards").should("be.visible");
        cy.contains("Recipient name").should("be.visible");
        cy.contains("Activated").should("be.visible");
        cy.contains("Gift card coupon code").should("be.visible");
        cy.contains("Initial value").should("be.visible");
        cy.get("th").should("contain", "Remaining amount");
    }

    assertShoppingCartsAndWishlistsPage() {
        cy.contains("Shopping carts and wishlists").should("be.visible");
        cy.contains("Start date").should("be.visible");
        cy.contains("End date").should("be.visible");
        cy.contains("Shopping cart type").should("be.visible");
        cy.contains("Billing country").should("be.visible");
        cy.get("th").should("contain", "Total items");
    }
}
export const onSideBarPage = new SideBarPage();