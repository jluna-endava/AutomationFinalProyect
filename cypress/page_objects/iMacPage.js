class iMacPage{
    constructor(){
        this.url = "https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=41"
        this.successReview = " Thank you for your review. It has been submitted to the webmaster for approval."
        this.shortReview = " Warning: Review Text must be between 25 and 1000 characters!"
        this.noNameReview = "Warning: Review Name must be between 3 and 25 characters!"
        this.noRatingReview = " Warning: Please select a review rating!"
        this.successQuestion = "Your enquiry has been successfully sent to the store owner!"
    }

    element = {
        rating: ()=> cy.get('[for="rating-5-216860"]'),
        nameField: ()=> cy.get('#input-name'),
        reviewField: ()=> cy.get('#input-review'),
        reviewButton: ()=> cy.get('#button-review'),
        messageAlert: ()=> cy.get('#form-review > .alert'),
        askQuestionButton: ()=> cy.get('#entry_216850 > .icon-left'),
        askQuestionNameField: ()=> cy.get('form > :nth-child(1) > .form-control'),
        askQuestionEmailField: ()=> cy.get(':nth-child(2) > .form-control'),
        askQuestionSubjectField: ()=> cy.get('.contact-form > form > :nth-child(3) > .form-control'),
        askQuestionMessageField: ()=> cy.get('.contact-form > form > :nth-child(4) > .form-control'),
        questionAlert: ()=> cy.get('.alert-success'),
        sendQuestionButton: ()=> cy.get('form > .btn')
    }

    visit(){
        cy.visit(this.url)
    }
    rateItem(){
        this.element.rating().click();
    }
    writeReviewName(name){
        this.element.nameField().clear().type(name);
    }
    writeReview(review){
        this.element.reviewField().clear().type(review);
    }
    submitReview(){
        this.element.reviewButton().click();
    }
    verifyReviewMessage(message){
        this.element.messageAlert().should("be.visible").should("contain.text",message);
    }
    successReviewMessage(){
        this.verifyReviewMessage(this.successReview);
    }
    shortFailReviewMessage(){
        this.verifyReviewMessage(this.shortReview);
    }
    nameFaileReviewMessage(){
        this.verifyReviewMessage(this.noNameReview);
    }
    ratingMissingReviewMessage(){
        this.verifyReviewMessage(this.noRatingReview);
    }
    askQuestion(){
        this.element.askQuestionButton().click();
    }
    writeQuestionName(name){
        this.element.askQuestionNameField().clear().type(name);
    }
    writeQuestionEmail(email){
        this.element.askQuestionEmailField().clear().type(email);
    }
    writeQuestionSubject(subject){
        this.element.askQuestionSubjectField().clear().type(subject);
    }
    writeQuestionMessage(message){
        this.element.askQuestionMessageField().clear().type(message);
    }
    writeQuestion(name,email,subject,message){
        this.writeQuestionName(name);
        this.writeQuestionEmail(email);
        this.writeQuestionSubject(subject);
        this.writeQuestionMessage(message);
    }
    submitQuestion(){
        this.element.sendQuestionButton().click()
    }
    verifyQuestionMessage(message){
        this.element.questionAlert().should("be.visible").should("contain.text",message);
    }
    successQuestionMessage(){
        this.verifyQuestionMessage(this.successQuestion)
    }



    
}

module.exports = new iMacPage();