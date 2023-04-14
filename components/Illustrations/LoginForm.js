import React from "react";
import Button from "../commons/Button";
import Image from "next/image";
import {
  RiBracesLine,
  RiGithubFill,
  RiGithubLine,
  RiStarFill,
} from "react-icons/ri";

const LoginForm = () => {
  return (
    <div className="bg-white w-[400px] border-[1px] shadow-xl p-6 rounded-2xl mt-[150px] relative z-[1] scale-75 select-none pointer-events-none flex flex-col items-center">
      <div className="flex flex-col items-center">
        <p className="text-4xl">
          <RiBracesLine />
        </p>
        <p className="font-medium">Your company</p>
      </div>
      <p className="text-3xl font-medium mt-4">Acceder</p>
      <p className="text-gray-500 text-sm mt-4">
        ¿No tienes cuenta?{" "}
        <b className="text-blue-500 font-normal">Regístrate</b>
      </p>
      <input
        disabled
        value="sophie.wang@gmail.com"
        className="w-full bg-transparent border-[2px] border-blue-500  rounded-lg h-[50px] px-2 mt-8 select-none"
      />

      <Button className="text-white bg-blue-500 w-full mt-2">Continuar</Button>
      <p className="text-blue-500 text-sm mt-4">¿Ha olvidado la contraseña?</p>
      <Button className="border-[1px] w-full mt-4">
        <div className="flex h-[38px] aspect-square relative rounded-[2px] items-center justify-center">
          <Image
            src="/sign-in-google.svg"
            alt="Sign in with google"
            width={20}
            height={20}
            priority
          />
        </div>
        <p className="px-4">Regístrate con Google</p>
      </Button>
      <Button className="border-[1px] w-full mt-2">
        <div className="flex h-[38px] aspect-square relative rounded-[2px] items-center justify-center">
          <RiGithubFill className="text-[24px]" />
        </div>
        <p className="px-4">Regístrate con Google</p>
      </Button>
      <p className="mt-6 text-gray-500 text-sm">
        powered by <b className="text-blue-500">tectify</b>
      </p>
    </div>
  );
};

export default LoginForm;
