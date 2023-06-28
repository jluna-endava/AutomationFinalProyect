class homePage{
    constructor(){
        this.url = "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
    }

    element = {
        homeButton: ()=> cy.get(".title").contains("Home"),
    }

    visit(){
        cy.visit(this.url)
    }
    verifyHomePageLoads(email){
        this.element.homeButton().should("be.visible")
    }
    
}

module.exports = new homePage();