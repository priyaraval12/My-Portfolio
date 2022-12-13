import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href=`mailto:priyanshiraval26@gmail.com?subject=${formData.subject}&body=Hello, My Name's ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      {/* <h3 className="absolute uppercase top-24 xl:top-12 tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3> */}
      <div className="flex flex-col space-y-5">
        <h4 className=" text-2xl md:text-4xl font-semibold text-center">
          I Love to{" "}
          <span className="animate-pulse text-[#171a17] md:text-6xl text-4xl">
            Socialize
          </span>
          , Let's talk.
        </h4>
        <div className="space-y-5">
          {/* <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7" />
            <p className="text-lg md:text-2xl">+91-</p>
          </div> */}
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7" />
            <p className="text-lg md:text-2xl">Surat, Gujarat, India</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7" />
            <p className="text-lg md:text-2xl">priyanshiraval26@gmail.com</p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 w-screen md:w-full mx-auto "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("name")}
            className="contactInput"
            placeholder="Name"
            type="text"
          />
          <input
            {...register("email")}
            className="contactInput"
            placeholder="Email"
            type="email"
          />

          <input
            {...register("subject")}
            className="contactInput"
            placeholder="Subject"
            type="text"
          />
          <textarea className="contactInput" placeholder="Message" {...register('message')}/>
          <button
            type="submit"
            className="bg-[#010800] py-5 px-10 rounded-md text-[#effaed] font-bold text-lg"
          >
            Submit
          </button>
          
        </form>
      </div>
    </div>
  );
}
