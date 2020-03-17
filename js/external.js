console.log('Hello from external JavaScript!');

alert('Welcome to my Website!');

var favoriteColor = prompt('What is your favorite color?');

    alert('Great, ' + favoriteColor + ' is my favorite color too!');

// Movie Rental Exercise

var littleMermaid = prompt('How many days will you need The Little Mermaid?');
var brotherBear = prompt('How many days will you need Brother Bear?');
var hercules = prompt('How many days will you need Hercules?');

littleMermaid = parseInt(littleMermaid);
brotherBear = parseInt(brotherBear);
hercules = parseInt(hercules);

var price = (littleMermaid * 3) + (brotherBear * 3) + (hercules * 3);

    alert('Your total is: $' + price);


// Contract Work Exercise

var googleHours = prompt('How many hours did you work for google?');
var amazonHours = prompt('How many hours did you work for amazon?');
var facebookHours = prompt('How many hours did you work for facebook?');

googleHours = parseInt(googleHours);
amazonHours = parseInt(amazonHours);
facebookHours = parseInt(facebookHours);

var googleRate = googleHours * 400,
    amazonRate = amazonHours * 380,
    facebookRate = facebookHours * 350;

var paycheck = googleRate + amazonRate + facebookRate;

    alert('Net Check: $' + paycheck);


// Enrolled Student Exercise

var isClassFull = false;
var isClassConflict = false;

var enrolledInClass = (!isClassFull && !isClassConflict);
    alert('Student enrolled in class: ' + enrolledInClass);

// Product Offer Exercise

var numberOfItems = prompt('How many items do you want to purchase?');

numberOfItems = parseInt(numberOfItems);

var isOfferExpired = false;
var isMemberPremium = false;

var isOfferValid = (isMemberPremium && !isOfferExpired) || (numberOfItems >= 2 && !isOfferExpired);

    alert('Offer is valid: ' + isOfferValid);




