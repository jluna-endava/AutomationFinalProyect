Given I go to the iMac Product page
And I select a rating to review the product
And I write my name in the 'Your Name' field with length between 3 and 25 characters
And I write an review in the 'Your Review' field in leght between 25 and 1000 character
When I click the 'Write Review' button
Then A green message should appear saying 'Thank you for your review. It has been submitted to the webmaster for approval.'

Given I go to the iMac Product page
And I select a rating to review the product
And I write an invalid name in the 'Your Name' field with less than 3 or more than 25 characters
And I write an review in the 'Your Review' field in leght between 25 and 1000 character
When I click the 'Write Review' button
Then A red message should appear saying 'Warning: Review Name must be between 3 and 25 characters!'

Given I go to the iMac Product page
And I select a rating to review the product
And I write my name in the 'Your Name' field with length between 3 and 25 characters
And I write an invalid review in the 'Your Review' field with less than 25 and more than 1000 characters
When I click the 'Write Review' button
Then A red message should appear saying 'Warning: Review Text must be between 25 and 1000 characters!'

Given I go to the iMac Product page
And I don't select a rating to review the product
And I write my name in the 'Your Name' field with length between 3 and 25 characters
And I write an review in the 'Your Review' field in leght between 25 and 1000 character
When I click the 'Write Review' button
Then A red message should appear saying 'Warning: Please select a review rating!'

Given I go to the iMac Product page
And I click on 'Ask Question'
And I write my name in the 'Your Name' field in lenght between 3 and 32 characters
And I write a valid email in the 'Your Email' field
And I white a subject in the 'Subject' field with length between 3 and 78 characters
And I white a message in the 'Message' field with length between 10 and 3000 characters
When I click the 'Send Message' button
Then A green message should appear saying 'Your enquiry has been successfully sent to the store owner!'
