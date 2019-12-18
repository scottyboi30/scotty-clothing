describe('checkout', () => {
  beforeEach(() => {
    cy.visit('/shop/hats');
  });

  describe('when an item is added to the basket', () => {
    beforeEach(() => {
      cy.get('[data-test="add-to-cart"]')
        .first()
        .invoke('show')
        .click();
    });

    it('updates the cart icon quantity', () => {
      cy.get('[data-test="item-count"]')
        .contains('1');
    });

    describe('and when go to checkout is clicked', () => {
      beforeEach(() => {
        cy.get('[data-test="item-count"]')
          .click()
          .get('[data-test="checkout-button"]')
          .click();
      });

      it('should redirect to the checkout page', () => {
        cy.location().should((location) => {
          expect(location.pathname).to.eq('/checkout');
        });
      });
    });
  });
});
