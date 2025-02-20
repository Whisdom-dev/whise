import { useEffect, useState } from "react";

function GithubProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Whisdom-dev/repos")
      .then(res => res.json()) // ✅ Convert response to JSON
      .then(data => {
        console.log("GitHub API Response:", data); // ✅ Debugging

        const selectedRepos = data.filter(repo => 
          ["E-Grocery", "uber-clone", "ai-text-processor"].includes(repo.name) // ✅ Updated with actual repo names
        );

        console.log("Filtered Repos:", selectedRepos); // ✅ Check if filtering works
        setRepos(selectedRepos);
      })
      .catch(error => console.error("Error fetching repos:", error)); // ✅ Handle errors
  }, []);

  return (
    <section id="github" className="py-20">
      <h2 className="text-3xl font-bold text-center" data-aos="fade-up">GitHub Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-6">
        {repos.length > 0 ? (
          repos.map(repo => (
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
          ))
        ) : (
          <p className="text-center text-gray-500">No repositories found.</p>
        )}
      </div>
    </section>
  );
}

export default GithubProjects;
