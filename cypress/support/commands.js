
Cypress.Commands.add('FillMandatoryFieldsAndSubmit', function() {
  cy.get('#firstName').type('Matheus')
  cy.get('#lastName').type('Paz')
  cy.get('#email').type('matheus@exemplo.com')
  cy.get('#open-text-area').type('Teste')
  cy.get('button[type="submit"]').click()
})