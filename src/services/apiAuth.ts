import supabase from "./supabase";

//types
import { User } from "../types/api/auth.type";

export async function signUp({ email, password, fullName }: User) {
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

  return data;
}

export async function login({ email, password }: User) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error("Invalid Email or Password");
  }

  console.log(data);

  return data;
}

export async function checkAuth() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data: user, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error("Invalid login");
  }
  return user.user;
}

export async function logout(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error("Logout failed");
}
