import { donSocialLogIn } from "@/app/actions";

const LoginForm = () => {
  return (
    <form
      action={donSocialLogIn}
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
    </form>
  );
};

export default LoginForm;
