const homePage = require("../page_objects/homePage");
const iMacPage = require("../page_objects/iMacPage");

context('Test Suit',() =>{
  it("Review product iMac Success", ()=>{
    iMacPage.visit();
    iMacPage.rateItem();
    iMacPage.writeReviewName("Juan");
    iMacPage.writeReview("El producto me parecio muy bueno y de buena calidad");
    iMacPage.submitReview();
    iMacPage.successReviewMessage();
  })

  it("Review Product iMac Fail - Review field error", ()=>{
    iMacPage.visit();
    iMacPage.rateItem();
    iMacPage.writeReviewName("Juan");
    iMacPage.writeReview("Bueno");
    iMacPage.submitReview();
    iMacPage.shortFailReviewMessage();
  })

  it("Review Product iMac Fail - Name field error", ()=>{
    iMacPage.visit();
    iMacPage.rateItem();
    iMacPage.writeReviewName("JP");
    iMacPage.writeReview("El producto me parecio muy bueno y de buena calidad");
    iMacPage.submitReview();
    iMacPage.nameFaileReviewMessage();
  })

  it("Review Product iMac Fail - Missing Review", ()=>{
    iMacPage.visit();
    iMacPage.writeReviewName("Felipe");
    iMacPage.writeReview("El producto me parecio muy bueno y de buena calidad");
    iMacPage.submitReview();
    iMacPage.ratingMissingReviewMessage();
  })

  it("Ask question in product", ()=>{
    iMacPage.visit();
    iMacPage.askQuestion();
    iMacPage.writeQuestion("Juan","juan@pablo.com","usados","Queria sabes si tienen algun producto usado")
    iMacPage.submitQuestion();
    iMacPage.successQuestionMessage();
  })


})