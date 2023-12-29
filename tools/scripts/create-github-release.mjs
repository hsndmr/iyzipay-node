async function getLatestRelease({ token, owner, repo }) {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/releases/latest`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error fetching latest release: ${response.statusText}`);
  }

  return await response.json();
}

async function getCommitsAfterRelease({ token, owner, repo, latestRelease }) {
  const headers = {
    Authorization: `token ${token}`,
  };

  const createdAt = new Date(latestRelease.created_at);
  createdAt.setSeconds(createdAt.getSeconds() + 1);

  const commitsResponse = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/commits?since=${createdAt.toISOString()}`,
    {
      headers,
    }
  );
  return commitsResponse.json();
}

function generateMarkdownList(commitList) {
  const markdownList = [];
  commitList.forEach((commit) => {
    const commitMessage = commit.commit.message.split('\n')[0];
    const commitLink = `[${commitMessage}](${commit.html_url})`;
    markdownList.push(`- ${commitLink}`);
  });
  return markdownList.join('\n');
}

export async function createGitHubRelease({
  owner,
  repo,
  token,
  tagName,
  target = 'main',
}) {
  const latestRelease = await getLatestRelease({
    token,
    owner,
    repo,
  });

  const commits = await getCommitsAfterRelease({
    token,
    owner,
    repo,
    latestRelease,
  });

  const releaseNote = generateMarkdownList(commits);

  const releaseData = {
    tag_name: tagName,
    name: tagName,
    body: releaseNote,
    target_commitish: target,
    draft: false,
  };

  return fetch(`https://api.github.com/repos/${owner}/${repo}/releases`, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`,
    },
    body: JSON.stringify(releaseData),
  });
}
