"use strict";

// const url = "https://api.github.com";

// function getLatestCommit(username) {
//     let userUrl = `https://api.github.com/users/${username}/events/public`;
//     return fetch(userUrl, {headers: {'Authorization': `token ${GIT_TOKEN}`}})
//         .then(response => response.json()
//             .then( data => data[0].created_at )
//         )
// }
//
// getLatestCommit('ryancesutton').then( lastCommitDate => console.log('lastCommitDate', lastCommitDate));
//
// const wait = milliseconds => {
//    return new Promise((resolved, reject) => {
//        setTimeout(() => {
//             resolved(milliseconds);
//        }, milliseconds);
//    });
// };
//
// wait(4000).then((ms) => console.log(`You'll see this after ${ms/1000} seconds`));
// wait(5000).then((ms) => console.log(`You'll see this after ${ms/1000} seconds`));
//
// wait(6000).then((ms) => {
//     console.log(`You'll see this after ${ms/1000} second`)
// });

function getLastEventDateByUsername(username) {
    let GITHUB_API_URL = `https://api.github.com/users/${username}/events/public`
    return fetch(GITHUB_API_URL, {headers: {'Authorization': `token ${GIT_TOKEN}`}})
        .then(response => response.json()
            .then( listOfEvents => {

                return listOfEvents[0].created_at;

            })
        )
}

getLastEventDateByUsername('ryancesutton').then(eventDate => console.log(eventDate))


const wait = milliseconds => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(milliseconds);
        }, milliseconds)});
}

wait(4000).then(ms => console.log(`This will show after ${ms/1000} seconds`))

