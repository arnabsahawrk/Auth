import { doSocialLogOut } from "@/app/actions";

const LogOut = () => {
  return (
    <form action={doSocialLogOut}>
      <button
        className="text-lg text-white rounded px-2 py-1 bg-slate-600"
        type="submit"
        name="action"
        value="google"
      >
        Logout
      </button>
    </form>
  );
};

export default LogOut;
