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
