import { useEffect, useState } from "react";

function GithubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Whisdom-dev/repos", {
      headers: {
        Authorization: `token YOUR_GITHUB_PERSONAL_ACCESS_TOKEN`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data.slice(0, 3));
        } else {
          setError("Unexpected API response format");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch repositories");
        setLoading(false);
      });
  }, []);
  
  
  if (loading) {
    return <p className="text-center text-gray-500">Loading GitHub projects...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <section id="github" className="py-20">
      <h2 className="text-3xl font-bold text-center" data-aos="fade-up">GitHub Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-6">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-md shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <h3 className="text-lg font-semibold">{repo.name}</h3>
            <p className="text-gray-500">{repo.description || "No description available."}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default GithubProjects;
