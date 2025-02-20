import { useEffect, useState } from "react";

function GithubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    console.log("GitHub Token:", token); // Debugging token usage

    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    fetch("https://api.github.com/users/Whisdom-dev/repos", { headers })
      .then((res) => res.json())
      .then((data) => {
        console.log("GitHub API Response:", data);

        if (!Array.isArray(data)) {
          throw new Error("Unexpected API response format");
        }

        // Normalize repo names (trim and lowercase)
        const filteredRepos = data.filter((repo) => {
          const repoName = repo.name.trim().toLowerCase();
          return ["e-grocery", "uber-clone", "ai-text-processor"].includes(repoName);
        });

        console.log("Filtered Repos:", filteredRepos); // Check filtering

        setRepos(filteredRepos);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching repos:", err);
        setError("Failed to fetch repositories");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500 py-10">Loading GitHub projects...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 py-10">{error}</p>;
  }

  return (
    <section id="github" className="py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center" data-aos="fade-up">
        GitHub Projects
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-gray-900"
            >
              <h3 className="text-lg font-semibold">{repo.name}</h3>
              <p className="text-gray-500">{repo.description || "No description available."}</p>
            </a>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No matching repositories found.
          </p>
        )}
      </div>
    </section>
  );
}

export default GithubProjects;
