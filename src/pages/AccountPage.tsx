import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../features/authentication/useAuth";
import { useProfile } from "../features/profile/useProfile";
import { useUpdateProfile } from "../features/profile/useUpdateProfile";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import Spinner from "../ui/Spinner";
import { HiEye } from "react-icons/hi2";
import { HiEyeOff } from "react-icons/hi";

const AccountPage = () => {
  const { user, isLoading: isLoadingUser } = useAuth();
  const { profile, isLoading } = useProfile(user?.id);

  const { updateProfile, isUpdating } = useUpdateProfile();
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword((show) => !show);
  }

  useEffect(() => {
    if (profile) {
      setUsername(profile.username);
      setBio(profile.bio);
    }
  }, [profile?.username, profile?.bio]);

  if (isLoading || isLoadingUser) return <Spinner />;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const profileId = profile ? profile.id : null;

    updateProfile({
      id: user?.id,
      username,
      password,
      bio,
    });

    console.log({
      profileId,
      username,
      bio,
      password,
    });
  }

  // console.log(profile);
  return (
    <section className="max-w-3xl mx-auto">
      <div className="px-6 py-2">
        <h2 className="text-xl font-semibold">Account Settings</h2>
        <form action="" onSubmit={handleSubmit}>
          <FormRow label="Email">
            <input
              type="text"
              id="email"
              className="input cursor-not-allowed disabled-input"
              defaultValue={user?.email}
              disabled={true}
            />
          </FormRow>
          <FormRow label="Username">
            <input
              id="username"
              type="text"
              className="input disabled-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label="Bio">
            <textarea
              name=""
              id="bio"
              defaultValue={bio}
              onChange={(e) => setBio(e.target.value)}
              className="input textarea disabled-input"
              placeholder="Tell About Yourself"
              disabled={isUpdating}
            ></textarea>
          </FormRow>

          <FormRow
            label="Set New Password"
            handleIcon={handleShowPassword}
            icon={
              showPassword ? (
                <HiEyeOff className="fill-stone-500 hover:fill-blue-500" />
              ) : (
                <HiEye className="fill-stone-500 hover:fill-blue-500" />
              )
            }
          >
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="input disabled-input"
              value={password}
              onBlur={() => setShowPassword(false)}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow>
            <Button disabled={isUpdating}>Update</Button>
          </FormRow>
        </form>
      </div>
    </section>
  );
};

export default AccountPage;
