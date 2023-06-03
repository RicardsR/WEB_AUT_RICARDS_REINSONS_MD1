class Grid {
    static get gridTab() {
        return cy.get('#demo-tab-grid');
    }

    static get grid() {
        return cy.get('#gridContainer');
    }
}
export default Grid;