import React from "react";

const LoginForm = () => {
  return (
    <form className="flex ">
      <button
        className="btn btn-secondary mx-auto"
        type="submit"
        name="action"
        value="google"
      >
        Sign in With Google
      </button>
      <button
        className="btn btn-error mx-auto"
        type="submit"
        name="action"
        value="github"
      >
        Sign in With Google
      </button>
    </form>
  );
};

export default LoginForm;
