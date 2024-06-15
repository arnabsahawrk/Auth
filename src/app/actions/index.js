"use server";
import { signIn, signOut } from "@/auth";

export const doSocialLogIn = async (formatData) => {
  const action = formatData.get("action");
  await signIn(action, { redirectTo: "/home" });
};

export const doSocialLogOut = async () => {
  await signOut({ redirectTo: "/" });
};
