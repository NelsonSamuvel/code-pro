import { useAuth } from "../features/authentication/useAuth";
import { useProfile } from "../features/profile/useProfile";
import Spinner from "../ui/Spinner";
import ProfileForm from "../features/profile/ProfileForm";

const AccountPage = () => {
  const { user, isLoading: isLoadingUser } = useAuth();
  const { profile, isLoading } = useProfile(user?.id);

  if (isLoading || isLoadingUser) return <Spinner />;

  if (!user || !profile) return null;

  const authImg = new URL("../assets/auth.jpg", import.meta.url).href;
  return (
    <section className="lg:max-w-5xl  mx-auto">
      <div className="flex justify-between gap-4">
        <ProfileForm
          profile={profile}
          user={{ id: user.id, email: user.email as string }}
        />
        <div className="relative hidden md:block">
          <img
            src={authImg}
            alt="auth-img"
            className="object-fit w-[400px] h-[400px] mt-24 rounded-md"
          />
          {/* <img src={authImg2} alt="auth-img" className="object-fit w-[400px] h-[400px] mt-24 rounded-md absolute -top-24 -z-10 -right-24" /> */}
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
