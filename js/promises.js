"use strict";

// const url = "https://api.github.com";

function getLatestCommit(username) {
    let userUrl = `https://api.github.com/users/${username}/events/public`;
    return fetch(userUrl, {headers: {'Authorization': `token ${GIT_TOKEN}`}})
        .then(response => response.json()
            .then( data => data[0].created_at )
        )
}

getLatestCommit('ryancesutton').then( lastCommitDate => console.log('lastCommitDate', lastCommitDate));






