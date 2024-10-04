import { useNavigate } from "react-router-dom";
import supabase from "./supabase";

type RegisterType = {
  email: string;
  username: string;
  password: string;
  fullName: string;
};

type LoginType = {
  email: string;
  password: string;
};

export async function signUp({
  email,
  password,
  fullName,
  username,
}: RegisterType) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
      },
    },
  });

  if (error) throw new Error("User Sign up failed");

  const { data: profile, error: profileErr } = await supabase
    .from("profiles")
    .insert([
      {
        user_id: data.user?.id,
        username: username,
        bio: "",
        avatar: null,
      },
    ])
    .select()
    .single();

  if (profileErr) throw new Error(profileErr.message);

  return profile;
}

export async function login({ email, password }: LoginType) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error("Invalid Email or Password");
  }

  if (!data.session) {
    throw new Error("session not found");
  }

  return data;
}

export async function checkAuth() {
  const { data: session, error: sessionErr } = await supabase.auth.getSession();
  if (sessionErr || !session.session) {
    console.error("session not found or sessionErr", sessionErr);
    return null;
  }

  const { data: user, error: userErr } = await supabase.auth.getUser();
  if (userErr || !user.user) {
    console.error("failed to get user");
    return null;
  }

  return user?.user??null;
}

export async function logout(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error("Logout failed");
}
