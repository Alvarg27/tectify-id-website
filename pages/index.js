import LoginForm from "@/components/Illustrations/LoginForm";
import Button from "@/components/commons/Button";
import ThemeSelector from "@/components/commons/ThemeSelector";
import Image from "next/image";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const Home = () => {
  return (
    <div>
      <section className="w-full absolute h-[60px] flex justify-center items-center">
        <div className="max-w-[1200px] w-[95%] flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-4xl font-bold text-blue-700 mr-1">tectify</p>
            <p className="text-white px-2 rounded-xl bg-gradient-to-bl   from-green-300 via-blue-500 to-purple-600 text-2xl font-bold">
              ID
            </p>
          </div>

          <Button className="text-white bg-black !h-[35px] !px-4 text-sm rounded-md">
            Sign up
          </Button>
        </div>
      </section>
      <section className="flex h-screen max-w-[1200px] mx-auto">
        <div className="w-1/2 h-full flex items-center justify-center">
          <div>
            <p className="text-8xl font-bold">
              User{" "}
              <b className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-bl from-green-300 via-blue-500 to-purple-600">
                auth{" "}
              </b>
              made simple.
            </p>
            <p className="text-gray-500  mt-4">
              Harnessing the power of identity can revolutionize user
              experiences, boost customer acquisition, enhance workforce
              efficiency, and accelerate app launches.
            </p>
            <Button className="border-[1px] border-black mt-8 !px-4">
              <div className="flex items-center mr-4">
                <p className="mr-1">Start building</p>
                <RiArrowRightLine />
              </div>
              <p className="bg-gradient-to-bl from-green-300 via-blue-500 to-purple-600 text-white py-1 rounded-md text-sm px-4">
                Invitation only
              </p>
            </Button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center relative h-full  ">
          <LoginForm />
          <div className="w-[300px] h-[400px] absolute right-0 top-1/2 -translate-y-1/2 -mt-20">
            <Image
              fill
              src="/woman.webp"
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 border-t-[1px]  flex justify-center">
        <div className="max-w-[1200px] w-[95%] pb-2 pt-6">
          <div className="flex justify-between">
            <div>
              <p className="text-blue-700 text-4xl font-bold">tectify</p>
              <div className="flex items-center mt-4 text-sm">
                <p className="mr-2">Status</p>
                <div className="flex items-center">
                  <div className="w-[10px] h-[10px] bg-emerald-500 rounded-full mr-1" />
                  <p className="text-emerald-500">All systems normal</p>
                </div>
              </div>
            </div>
            <div className="flex gap-20">
              <div className="">
                <p className="flex text-gray-400 text-lg">Get started</p>
                <div className=" mt-2">
                  <p className="mt-1">Quickstart</p>
                  <p className="mt-1">Documentation</p>
                  <p className="mt-1">APIs</p>
                </div>
              </div>

              <div>
                <p className="flex text-gray-400 text-lg">Company</p>
                <div className=" mt-2">
                  <p className="mt-1">About us</p>
                  <p className="mt-1">Legal</p>
                  <p className="mt-1">Privacy</p>
                  <p className="mt-1">Terms</p>
                </div>
              </div>

              <div>
                <p className="flex text-gray-400 text-lg">Help and Support</p>
                <div className=" mt-2">
                  <p className="mt-1">Contact support</p>
                  <p className="mt-1">Request early access</p>
                  <p className="mt-1">Frequently asked questions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between mt-20 items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Tectify
            </p>
            <div>
              <ThemeSelector />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
