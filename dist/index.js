
// Function to fetch user data from GitHub API
async function fetchGitHubUserData(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
} 

// Function to fetch user repositories from GitHub API
async function fetchGitHubUserRepos(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const reposData = await response.json();
    return reposData;
  } catch (error) {
    console.error('Error fetching user repositories:', error);
    return null;
  }
}

// Function to fetch user data from GitHub API
async function fetchGitHubUserData(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

// Function to update user info in the UI
async function updateUserInfo(username) {
  const defaultUsername = 'Hafsazouhair'; 

  const usernameElement = document.getElementById('username');
  const followerCountElement = document.getElementById('follower-count');
  const followingCountElement = document.getElementById('following-count');
  const repoCountElement = document.getElementById('repo-count');

  const userData = await fetchGitHubUserData(username); // Use the provided username

  if (userData) {
    usernameElement.textContent = userData.name || 'Full Name not provided';
    followerCountElement.textContent =  `${userData.followers}`;
    followingCountElement.textContent =  `${userData.following}`;
    repoCountElement.textContent = `${userData.public_repos}` ;
  }

  // Display user repos if available
  // displayUserRepos(reposData);
}

// Event listener for search input
const searchInput = document.getElementById("mySearch");
searchInput.addEventListener("input", async (e) => {
  const username = e.target.value.trim();
  if (username !== '') {
    await updateUserInfo(username);
  } else {
    await updateUserInfo('Hafsazouhair'); 
  }
});

// Initialize user info with default username
updateUserInfo('Hafsazouhair');
