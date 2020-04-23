const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const userWithThreeLanguages = users.filter( user => user.languages.length >= 3 );
console.log(userWithThreeLanguages);

const emailArray = users.map( user => user.email );
console.log(emailArray);

const getTotalYears = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
console.log(getTotalYears);

const yearsAverage = getTotalYears / users.length;
console.log(yearsAverage);

const longestEmail = users.reduce((longest, user) => {
    return user.email.length > longest.length ? user.email : longest;
},'');
console.log(longestEmail);

const userNamesString = users.reduce((names, user) => {
    if (names !== '') {
        names += ', ';
    }
        return names + user.name;


},'');
console.log(userNamesString);

//An alternative solution

console.log(users.map( user => user.name ).join(', '));

//Solution to bonus

const theLanguages = users.reduce((languages, user) => {
    user.languages.forEach((language) => {
        if (!languages.includes(language)) {
            languages.push(language);
        }
    });
    return languages;
},[]);

console.log(theLanguages);