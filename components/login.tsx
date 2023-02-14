import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const [login, setLogIn] = useState<boolean>(false);
  //   const { signIn, signUp, logOut, loading, error } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (login) {
      //   await signIn(data.email, data.password);
      return;
    } else {
      //   await signUp(data.email, data.password);
      return;
    }
  };

  return (
    <div className=" relative flex h-screen w-screen flex-col md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>NetMovie</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        fill
        className="-z-10 !hidden opacity-60 sm:!inline"
        style={{ objectFit: "cover" }}
        alt="login"
      />

      <form
        className="mt-24 items-center justify-center space-y-8 rounded bg-black/75 py-10 px-6
          md:max-w-md md:px-14"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-orange-600">Please enter a valid email</p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="password"
              className="input"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-orange-500">
                Password must contain between 4 and 60 characters!
              </p>
            )}
          </label>
        </div>
        <button
          className="h-12 w-full rounded bg-[#1b2636]"
          onClick={() => setLogIn(true)}
        >
          Sign In
        </button>
        <div>
          <h1 className="pb-1 text-center text-gray-500">
            New to{" "}
            <span className="italic text-white underline">NetMovie?</span>
          </h1>
          <button
            type="submit"
            className="h-12 w-full rounded bg-[#47f35866]"
            onClick={() => setLogIn(false)}
          >
            Sign Up
          </button>
          <p className="mt-4 border bg-white text-center font-mono font-semibold text-slate-600">
            NetMovie
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
