import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Image } from "../../components/Image";
import repoImages from "./repoImages.json";
import { Headline } from "../../components/Headline";
import { Text } from "../../components/Text";

export const ProjectsCard = ({ repositories }) => {
  const filteredRepo = repositories
    .filter((repos) => repos.name.includes("project"))

    .sort((a, b) => {
      const repoA = new Date(a.created_at);
      const repoB = new Date(b.created_at);

      return repoB - repoA;
    });

  console.log(filteredRepo);

  return (
    <div className="project-card-container">
      {filteredRepo.map((repo) => {
        const repoImage = repoImages.find((img) => img.repoName === repo.name);

        return (
          <div className="project-card-info" key={repo.id}>
            <Image
              section={"project"}
              link={repoImage?.imageUrl}
              imageAltText={repo.name}
            />
            <Headline
              elementClassName={"proj-card-name"}
              text={repo.name.replace("project", "").replace(/-/g, " ")}
            />
            <Text
              elementClassName={"proj-card-description"}
              text={repo.description}
            />
            {repo.topics.map((topic) => (
              <div key={topic}>
                <Tag tag={topic} />
              </div>
            ))}
            <Button
              section={"button-project"}
              iconUrl={"/Icons/globe.svg"}
              iconAlt={"globe"}
              text={"Live demo"}
            />
            <Button
              section={"button-project"}
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