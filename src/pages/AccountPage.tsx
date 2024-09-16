import { useAuth } from "../features/authentication/useAuth";
import { useProfile } from "../features/profile/useProfile";
import Spinner from "../ui/Spinner";
import ProfileForm from "../features/profile/ProfileForm";

const AccountPage = () => {
  const { profile, isLoading } = useProfile();

  if (isLoading) return <Spinner />;

  if (!profile) return null;

  return (
    <section className="max-w-3xl lg:max-w-4xl  mx-auto">
      <div className="flex justify-between gap-4">
        <ProfileForm
          profile={profile}
        />
        <div className="relative hidden lg:flex items-center">
          <img
            src="/assets/svg/profile-update.svg"
            alt="auth-img"
            className="object-fit lg:w-[400px] lg:h-[400px]  rounded-md"
          />
          {/* <img src={authImg2} alt="auth-img" className="object-fit w-[400px] h-[400px] mt-24 rounded-md absolute -top-24 -z-10 -right-24" /> */}
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
