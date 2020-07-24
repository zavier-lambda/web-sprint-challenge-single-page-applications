// write tests here
describe('Inputs and submit button', () => {
  
  it('can navigate to this site', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('include', 'localhost')
  })

  it('can navigate to order page', ()  => {
    cy.get("#order").click()
    cy.url().should('include', '/pizza')
  }) 

  it('can type into name box', () => {
    cy.get("input[name='name']").type("zave")
  })
  it('can select a pizza', () => {
    cy.get('select').select("Small");
    cy.get('#OR').check();
    cy.get('input[name="Pepperoni"]').check();
    cy.get('input[name="Sausage"]').check();
    cy.get('input[name="special"]').type("Well Done")
    cy.get("#btn").click()
  });
    
})