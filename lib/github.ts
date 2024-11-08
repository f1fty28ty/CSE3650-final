export async function getRepoContents(repo: string, path: string = '') {
  try {
    const username = "f1fty28ty";
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repo}/contents/${path}`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          ...(process.env.GITHUB_TOKEN && {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
          })
        },
        next: { revalidate: 3600 }
      }
    );

    if (!response.ok) {
      console.error('GitHub API Response:', {
        status: response.status,
        statusText: response.statusText
      });
      return [];
    }

    const contents = await response.json();
    return contents;
  } catch (error) {
    console.error('Error fetching repo contents:', error);
    return [];
  }
}

export async function getRepos() {
  try {
    const username = "f1fty28ty";
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          ...(process.env.GITHUB_TOKEN && {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
          })
        },
        next: { revalidate: 3600 }
      }
    );

    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error('Error fetching repos:', error);
    return [];
  }
}