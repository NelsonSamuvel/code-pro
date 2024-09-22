import { FormEvent, useEffect, useState } from "react";
import FormRow from "../../ui/FormRow";
import { useUpdateProfile } from "./useUpdateProfile";
import { HiEyeOff } from "react-icons/hi";
import { HiEye } from "react-icons/hi2";
import Button from "../../ui/Button";
import { ProfilesType } from "../../services/apiProfiles";
import { useAuth } from "../authentication/useAuth";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type PropsType = {
  profile: ProfilesType;
};

type FormDataType = {
  email: string;
  username: string;
  bio: string;
  avatar: FileList;
  password: string;
};

const ProfileForm = ({ profile }: PropsType) => {
  const { user } = useAuth();

  const { updateProfile, isUpdating } = useUpdateProfile();
  const [showPassword, setShowPassword] = useState(false);

  const { username, bio, avatar } = profile;

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<FormDataType>({
    defaultValues: {
      email: user?.email,
      username,
      bio,
    },
  });

  const currentAvatar = watch("avatar");

  let avatarState = "no file chosen";

  if (avatar) {
    const avatarArr = avatar.split("/");
    avatarState = avatarArr[avatarArr.length - 1].split("?")[0];
  } else if (currentAvatar?.length) {
    avatarState = currentAvatar[0].name;
  }

  function handleShowPassword() {
    setShowPassword((show) => !show);
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { username, password, bio, avatar } = data;

    updateProfile({
      username,
      password,
      bio,
      avatar: avatar[0],
    });
  };

  return (
    <div className="px-6 py-2 grow">
      <h2 className="text-xl font-semibold">Account Settings</h2>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Email">
          <input
            type="text"
            id="email"
            className="input cursor-not-allowed disabled-input"
            {...register("email")}
            disabled={true}
          />
        </FormRow>
        <FormRow label="Username" error={errors.username?.message}>
          <input
            id="username"
            type="text"
            className="input disabled-input"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
            disabled={isUpdating}
          />
        </FormRow>
        <FormRow label="Bio">
          <textarea
            id="bio"
            {...register("bio")}
            className="input textarea disabled-input"
            placeholder="Tell About Yourself"
            disabled={isUpdating}
          ></textarea>
        </FormRow>

        <div className="flex flex-col mt-5 space-y-3 relative mb-8">
          <label className="text-stone-900 md:text-lg cursor-pointer">
            Set Avatar
          </label>
          <div className="flex items-center gap-4">
            <label
              htmlFor="avatar"
              className="w-max bg-stone-800 text-white px-2 py-1 cursor-pointer"
            >
              Choose File
            </label>
            <p className="text-lg">{avatarState}</p>
          </div>
          <input
            type="file"
            className="hidden"
            id="avatar"
            {...register("avatar")}
          />
        </div>

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
            {...register("password")}
            onBlur={() => setShowPassword(false)}
            disabled={isUpdating}
          />
        </FormRow>
        <FormRow>
          <Button disabled={isUpdating}>Update</Button>
        </FormRow>
      </form>
    </div>
  );
};

export default ProfileForm;
