import { useEffect, useState } from "react";

function GithubProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Whisdom-dev/repos")
    .then(data => {
        const selectedRepos = data.filter(repo => 
          ["repo1", "repo2", "repo3"].includes(repo.name)  // Change "repo1", "repo2" to actual repo names
        );
        setRepos(selectedRepos);
      })
      
  }, []);

  return (
    <section id="github" className="py-20">
      <h2 className="text-3xl font-bold text-center" data-aos="fade-up">GitHub Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-6">
        {repos.map(repo => (
          <a key={repo.id} href={repo.html_url} className="block p-4 border rounded-md shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <h3 className="text-lg font-semibold">{repo.name}</h3>
            <p className="text-gray-500">{repo.description || "No description available."}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default GithubProjects;
