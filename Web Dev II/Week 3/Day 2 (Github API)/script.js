

let githubUser;
let followersList;

// Will be fired on first load
window.addEventListener("load", () => {
    callAPIS('knowprabhjyot');
});

function callAPIS(keyword) {
    fetchGithubUser(keyword).then((response) => {
        githubUser = response;
        console.log(githubUser, "GITHUB USER!");
        generateGithubUser(githubUser);
    }).catch((error) => {
        console.log(error);
    })

    fetchGithubFollowers(keyword).then((response) => {
        followersList = response;
        generateGithubFollowers(followersList);
    }).catch((error) => {
        console.log(error);
    })
}

async function fetchGithubUser(keyword) {

    try {
        return await axios.get(`https://api.github.com/users/${keyword}`);
    } catch (error) {
        alert("There was an error" + error );
    }
} 

async function fetchGithubFollowers(keyword) {
    try {
        return await axios.get(`https://api.github.com/users/${keyword}/followers`);
    } catch (error) {
        alert("There was an error" + error );
    }
}

function generateGithubUser({ data }) {
    let userSearchedSection = document.getElementById('user-searched');
    userSearchedSection.innerHTML = "";

    userSearchedSection.innerHTML = `
    <img class="avatar" src=${data.avatar_url}>
    <div class="text-container">
        <h2>Followers : ${data.followers}</h2>
        <h2>Following : ${data.following}</h2>
        <h2>Created At: ${new Date(data.created_at).toLocaleDateString()}</h2>
        <a href=${data.html_url} target="_blank">Github Url</a>
        <h2>Repos: ${data.public_repos} </h2>
    </div>
`
}


function generateGithubFollowers({ data }) {
    let userFollowersSection = document.getElementById('user-followers');
    userFollowersSection.innerHTML = "";
    data.forEach((follower) => {
        userFollowersSection.innerHTML += `
            <div class="follower-card">
                <img src=${follower.avatar_url}>
                <h1>${follower.login}</h1>
                <a href=${follower.html_url}>Github Url</a>
            </div>
        `
    })
     

}


function searchUser() {
    const keyword = document.getElementById('search-keyword');
    callAPIS(keyword.value);

}