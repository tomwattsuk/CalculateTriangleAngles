describe('TC001', () => {

    it('Open test html file', () => {
        cy.visit('../../../.././triangles.html')

        //used to confirm site is returned
        cy.contains('Triangles')

        //adds the first test case data 
        cy.get('#angle1').type('90')
        cy.get('#angle2').type('40')
        cy.get('#angle3').type('50')
        //finds and clicks the submit button
        cy.get('[onclick="Calculate()"]').click()
        //verifies the output is expected
        cy.get('#typeOfTriangle').should('have.text', 'Scalene')
    })
}),

    describe('TC002', () => {

        it('Open test html file', () => {
            cy.visit('../../../.././triangles.html')

            //used to confirm site is returned
            cy.contains('Triangles')

            //clears down the form
            cy.get('[onclick="window.location.href=\'./triangles.html\';"]').click()

            //adds the first test case data 
            cy.get('#angle1').type('60')
            cy.get('#angle2').type('60')
            cy.get('#angle3').type('60')
            //finds and clicks the submit button
            cy.get('[onclick="Calculate()"]').click()
            //verifies the output is expected
            cy.get('#typeOfTriangle').should('have.text', 'Equillateral')
        })
    }),

    describe('TC003', () => {

        it('Open test html file', () => {
            cy.visit('../../../.././triangles.html')
            
            //used to confirm site is returned
            cy.contains('Triangles')

            //clears down the form
            cy.get('[onclick="window.location.href=\'./triangles.html\';"]').click()

            //adds the first test case data 
            cy.get('#angle1').type('40')
            cy.get('#angle2').type('40')
            cy.get('#angle3').type('100')
            //finds and clicks the submit button
            cy.get('[onclick="Calculate()"]').click()
            //verifies the output is expected
            cy.get('#typeOfTriangle').should('have.text', 'Isosceles')
        })
    }),

    describe('TC004', () => {

        it('Open test html file', () => {
            cy.visit('../../../.././triangles.html')
        
            //used to confirm site is returned
            cy.contains('Triangles')

            //clears down the form
            cy.get('[onclick="window.location.href=\'./triangles.html\';"]').click()

            //adds the first test case data 
            cy.get('#angle1').type('0')
            cy.get('#angle2').type('100')
            cy.get('#angle3').type('80')
            //finds and clicks the submit button
            cy.get('[onclick="Calculate()"]').click()
            //verifies the output is expected
            cy.get('#typeOfTriangle').should('have.text', 'Error! You can only enter numbers between 1 and 180')
        })
    }),
    describe('TC005', () => {

        it('Open test html file', () => {
            cy.visit('../../../.././triangles.html')
 
            //used to confirm site is returned
            cy.contains('Triangles')

            //clears down the form
            cy.get('[onclick="window.location.href=\'./triangles.html\';"]').click()

            //adds the first test case data 
            cy.get('#angle1').type('1')
            cy.get('#angle2').type('100')
            cy.get('#angle3').type('80')
            //finds and clicks the submit button
            cy.get('[onclick="Calculate()"]').click()
            //verifies the output is expected
            cy.get('#typeOfTriangle').should('have.text', 'Error! You can only enter numbers between 1 and 180')
        })
    }),

    describe('TC006', () => {

        it('Open test html file', () => {
            cy.visit('../../../.././triangles.html')

            //used to confirm site is returned
            cy.contains('Triangles')

            //clears down the form
            cy.get('[onclick="window.location.href=\'./triangles.html\';"]').click()

            //adds the first test case data 
            cy.get('#angle1').type('20')
            cy.get('#angle2').type('20')
            cy.get('#angle3').type('140')
            //wait to show field inputs
            cy.wait(1000)

            //finds and clicks the reset button 
            cy.get('[onclick="window.location.href=\'./triangles.html\';"]').click()
        })
    }),

    describe('TC007', () => {

        it('Open test html file', () => {
            cy.visit('../../../.././triangles.html')

            //used to confirm site is returned
            cy.contains('Triangles')

            //clears down the form
            cy.get('[onclick="window.location.href=\'./triangles.html\';"]').click()

            //adds the first test case data 
            cy.get('#angle1').type('1')
            cy.get('#angle2').type('100')
            cy.get('#angle3').type('81')
            //finds and clicks the submit button
            cy.get('[onclick="Calculate()"]').click()
            //verifies the output is expected
            cy.get('#typeOfTriangle').should('have.text', 'Error! You can only enter numbers between 1 and 180')
        })
    }),

    describe('TC008', () => {

        it('Open test html file', () => {
            cy.visit('../../../.././triangles.html')

            //used to confirm site is returned
            cy.contains('Triangles')

            //clears down the form
            cy.get('[onclick="window.location.href=\'./triangles.html\';"]').click()

            //adds the first test case data 
            cy.get('#angle1').type('a')
            cy.get('#angle2').type('b')
            cy.get('#angle3').type('$')

            //verify no content in each field

            cy.get('#angle1').should('have.value', '')
            cy.get('#angle2').should('have.value', '')
            cy.get('#angle3').should('have.value', '')
        })
    }),

    describe('TC009', () => {

        it('Open test html file', () => {
            cy.visit('../../../.././triangles.html')

            //used to confirm site is returned
            cy.contains('Triangles')

            //clears down the form
            cy.get('[onclick="window.location.href=\'./triangles.html\';"]').click()

            //finds and clicks the submit button
            cy.get('[onclick="Calculate()"]').click()
        })
    })