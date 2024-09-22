import { HiOutlineUser, HiUserCircle } from "react-icons/hi2";
import { ProfilesType } from "../../services/apiProfiles";

type PropsType = {
  profile: ProfilesType;
};

const UserCard = ({ profile }: PropsType) => {
  return (
    <div className="hidden absolute -bottom-[15%] right-0  z-10 w-[250px] group-hover:flex items-start gap-4 bg-white px-2 py-4 shadow-lg">
      {profile.avatar ? (
        <img src={profile.avatar} alt="" className="profile-img w-12" />
      ) : (
        <HiUserCircle className="w-12 h-12 fill-stone-500" />
      )}
      <div className="">
        <h3 className="text-lg font-semibold">{profile.username}</h3>
        <p className="text-base">{profile.bio}</p>
      </div>
    </div>
  );
};

export default UserCard;
