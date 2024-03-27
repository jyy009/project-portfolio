import { Tag } from "../components/Tag";
import { Button } from "../components/Button";
import { Image } from "../components/Image";
import repoImages from "./repoImages.json";

export const ProjectCard = ({ repositories }) => {
  const filteredRepo = repositories
    .filter((repos) => repos.name.includes("project"))

    .sort((a, b) => {
      const repoA = new Date(a.created_at);
      const repoB = new Date(b.created_at);

      return repoB - repoA;
    });

  console.log(filteredRepo);

  return (
    <div>
      {filteredRepo.map((repo) => {
        const repoImage = repoImages.find((img) => img.repoName === repo.name);

        return (
          <div className="proj-info" key={repo.id}>
            <Image
              divClassName={"proj-image-section"}
              elementClassName={"proj-image"}
              link={repoImage?.imageUrl}
              imageAltText={repo.name}
            />
            <p>{repo.name}</p>
            <p>{repo.description}</p>

            {repo.topics.map((topic) => (
              <div key={topic}>
                <Tag tag={topic} />
              </div>
            ))}
            <Button
              iconUrl={"/Icons/globe.svg"}
              iconAlt={"globe"}
              text={"Live demo"}
            />
            <Button
              iconUrl={"/Icons/github.svg"}
              iconAlt={"octocat"}
              text={"Live demo"}
            />
          </div>
        );
      })}
    </div>
  );
};
