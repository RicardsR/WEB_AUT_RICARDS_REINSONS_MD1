import Grid from '../pageObjects/Grid.page.js';

describe('Demo QA', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/selectable');
    });
    context('Grid', () => {
        it('should highlight selected items', () => {
            Grid.gridTab.click();
            Grid.grid.children().eq(0).children().eq(1).click(); //Two
            Grid.grid.children().eq(1).children().eq(0).click(); //Four
            Grid.grid.children().eq(1).children().eq(2).click(); //Six
            Grid.grid.children().eq(2).children().eq(1).click(); //Eight

            Grid.grid.children().eq(0).children().eq(1).should('have.class', 'active'); //Two
            Grid.grid.children().eq(1).children().eq(0).should('have.class', 'active'); //Four
            Grid.grid.children().eq(1).children().eq(2).should('have.class', 'active'); //Six
            Grid.grid.children().eq(2).children().eq(1).should('have.class', 'active'); //Eight

            Grid.grid.children().eq(0).children().eq(0).should('not.have.class', 'active'); //One
            Grid.grid.children().eq(0).children().eq(2).should('not.have.class', 'active'); //Three
            Grid.grid.children().eq(1).children().eq(1).should('not.have.class', 'active'); //Five
            Grid.grid.children().eq(2).children().eq(0).should('not.have.class', 'active'); //Seven
            Grid.grid.children().eq(2).children().eq(2).should('not.have.class', 'active'); //Nine

        });
    });
});