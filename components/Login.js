import Image from 'next/image';
import { signIn } from 'next-auth/react';
function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        className="rounded-2xl"
        src="/images/headerlogo.png"
        width={120}
        height={120}
        alt="logo"
      />
      <h1
        onClick={signIn}
        className="p-5
        bg-gray-700
        rounded-full
        text-orange-500
        text-center
        cursor-pointer
        hover:text-blue-500"
      >
        Feeling Somewhat Social?
      </h1>
    </div>
  );
}

export default Login;
