import Intro from "./Intro";
import ProjectItems from "./ProjectItems";

const ProfileContainer = () => {
  return (
    <main className="container mx-auto mb-6 md:mb-10 lg:mb-14">
      <Intro />
      <ProjectItems />
    </main>
  );
};

export default ProfileContainer;
