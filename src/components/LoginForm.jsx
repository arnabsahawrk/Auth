import { doSocialLogIn } from "@/app/actions";

const LoginForm = () => {
  return (
    <form
      action={doSocialLogIn}
      className="text-lg text-white *:rounded *:px-2 *:py-1 grid grid-cols-2 gap-4"
    >
      <button
        className="bg-[#ffc107]"
        type="submit"
        name="action"
        value="google"
      >
        Login With Google
      </button>
      <button className="bg-black" type="submit" name="action" value="github">
        Login With GitHub
      </button>
      <button
        className="bg-[#1DA1F2]"
        type="submit"
        name="action"
        value="twitter"
      >
        Login With Twitter
      </button>
      <button
        className="bg-[#5865F2]"
        type="submit"
        name="action"
        value="discord"
      >
        Login With Discord
      </button>
      <button
        className="bg-[#0866FF]"
        type="submit"
        name="action"
        value="facebook"
      >
        Login With Facebook
      </button>
    </form>
  );
};

export default LoginForm;
