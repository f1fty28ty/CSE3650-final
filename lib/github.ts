export async function getRepoContents(repo: string, path: string = "") {
  try {
    const username = "f1fty28ty";
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repo}/contents/${path}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      console.error("GitHub API Response:", {
        status: response.status,
        statusText: response.statusText,
      });
      // Return an empty array instead of attempting to parse invalid JSON
      return [];
    }

    const contents = await response.json();
    // Validate the contents to ensure it is an array
    if (!Array.isArray(contents)) {
      console.warn("Unexpected API response format:", contents);
      return [];
    }

    return contents;
  } catch (error) {
    console.error("Error fetching repo contents:", error);
    return []; // Return an empty array on error
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