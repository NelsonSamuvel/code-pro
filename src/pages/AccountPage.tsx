import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../features/authentication/useAuth";
import { useProfile } from "../features/profile/useProfile";
import { useUpdateProfile } from "../features/profile/useUpdateProfile";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import Spinner from "../ui/Spinner";
import { HiEye } from "react-icons/hi2";
import { HiEyeOff } from "react-icons/hi";
import ProfileForm from "../features/profile/ProfileForm";

const AccountPage = () => {
  const { user, isLoading: isLoadingUser } = useAuth();
  const { profile, isLoading } = useProfile(user?.id);

  if (isLoading || isLoadingUser) return <Spinner />;

  const authImg = new URL("../assets/auth.jpg", import.meta.url).href;
  const authImg2 = new URL("../assets/auth2.jpg", import.meta.url).href;

  // console.log(profile);
  return (
    <section className="max-w-5xl mx-auto">
      <div className="flex justify-between gap-4">
        <ProfileForm profile={profile} user={user} />
        <div className="relative">
          <img src={authImg} alt="auth-img" className="object-fit w-[400px] h-[400px] mt-24 rounded-md" />
          {/* <img src={authImg2} alt="auth-img" className="object-fit w-[400px] h-[400px] mt-24 rounded-md absolute -top-24 -z-10 -right-24" /> */}

        </div>
      </div>
    </section>
  );
};

export default AccountPage;
