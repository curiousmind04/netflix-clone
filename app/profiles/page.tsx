import getCurrentUser from "../actions/getCurrentUser";
import ProfilesClient from "./ProfilesClient";

const Profiles = async () => {
  const currentUser = await getCurrentUser();
  return <ProfilesClient currentUser={currentUser} />;
};
export default Profiles;
