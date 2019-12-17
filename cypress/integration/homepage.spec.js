describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('when the hats menu item is clicked', () => {
    beforeEach(() => {
      cy.get('[data-cy=shop\\/hats]').click();
    });
    it('redirects to the hats page', () => {
      cy.location().should((location) => {
        expect(location.pathname).to.eq('/shop/hats');
      });
    });
  });
});
