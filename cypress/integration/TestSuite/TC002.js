describe('TC002',() => {

it('Open test html file', () => {
    cy.visit('../../../.././triangles.html')
    
    //used to confirm site is returned
    cy.contains('Triangles')

    //adds the first test case data 
    cy.get('#angle1').type('60')
    cy.get('#angle2').type('60')
    cy.get('#angle3').type('60')
    //finds and clicks the submit button
    cy.get('[onclick="Calculate()"]').click()
    //verifies the output is expected
    cy.get('#typeOfTriangle').should('have.text', 'Equillateral')
})
})

