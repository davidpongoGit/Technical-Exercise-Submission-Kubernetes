class contactListPage {
    get addNewContact(){
        return cy.get('#add-contact').click();
    }
    get logOut(){
        return cy.get('#logout').click();
    }
    headingTitle = {
        checkIsDisplayed : () => cy.get('h1').should('contain', 'Contact List')
    }
    nameColumn = {
        firstRow : (value) => cy.get('#myTable > tr:nth-child(3) > td:nth-child(2)').should('contain', value),
        secondRow : (value) => cy.get('#myTable > tr:nth-child(4) > td:nth-child(2)').should('contain', value),
        thirdRow : (value) => cy.get('#myTable > tr:nth-child(5) > td:nth-child(2)').should('contain', value)
    }
    birthdayColumn = {
        firstRow : (value) => cy.get('#myTable > tr:nth-child(3) > td:nth-child(3)').should('contain', value),
        secondRow : (value) => cy.get('#myTable > tr:nth-child(4) > td:nth-child(3)').should('contain', value),
        thirdRow : (value) => cy.get('#myTable > tr:nth-child(5) > td:nth-child(3)').should('contain', value)
    }
    emailColumn = {
        firstRow : (value) => cy.get('#myTable > tr:nth-child(3) > td:nth-child(4)').should('contain', value),
        secondRow : (value) => cy.get('#myTable > tr:nth-child(4) > td:nth-child(4)').should('contain', value),
        thirdRow : (value) => cy.get('#myTable > tr:nth-child(5) > td:nth-child(4)').should('contain', value)
    }
    phoneColumn = {
        firstRow : (value) => cy.get('#myTable > tr:nth-child(3) > td:nth-child(5)').should('contain', value),
        secondRow : (value) => cy.get('#myTable > tr:nth-child(4) > td:nth-child(5)').should('contain', value),
        thirdRow : (value) => cy.get('#myTable > tr:nth-child(5) > td:nth-child(5)').should('contain', value)
    }
    addressColumn = {
        firstRow : (value) => cy.get('#myTable > tr:nth-child(3) > td:nth-child(6)').should('contain', value),
        secondRow : (value) => cy.get('#myTable > tr:nth-child(4) > td:nth-child(6)').should('contain', value),
        thirdRow : (value) => cy.get('#myTable > tr:nth-child(5) > td:nth-child(6)').should('contain', value)
    }
    cityStatePostCodeColumn = {
        firstRow : (value) => cy.get('#myTable > tr:nth-child(3) > td:nth-child(7)').should('contain', value),
        secondRow : (value) => cy.get('#myTable > tr:nth-child(4) > td:nth-child(7)').should('contain', value),
        thirdRow : (value) => cy.get('#myTable > tr:nth-child(5) > td:nth-child(7)').should('contain', value)
    }
    countryColumn = {
        firstRow : (value) => cy.get('#myTable > tr:nth-child(3) > td:nth-child(8)').should('contain', value),
        secondRow : (value) => cy.get('#myTable > tr:nth-child(4) > td:nth-child(8)').should('contain', value),
        thirdRow : (value) => cy.get('#myTable > tr:nth-child(5) > td:nth-child(8)').should('contain', value)
    }
    get viewFirstContact(){
        return cy.get('#myTable > tr:nth-child(3) > td:nth-child(2)').click();
    }
    get viewSecondContact(){
        return cy.get('#myTable > tr:nth-child(4) > td:nth-child(2)').click();
    }
    get viewThirdContact(){
        return cy.get('#myTable > tr:nth-child(5) > td:nth-child(2)').click();
    }
}
module.exports = new contactListPage();