import Image from "next/image";
import Link from "next/link";
import { SlEnvolope } from "react-icons/sl";
import { CustomIcon } from "./assets/custom-icon";
import { getIcon, getProfile, getSNS } from "@/../libs/client";

export default async function Home() {

  const server = Math.random().toString(32).substring(2);

  const icon = JSON.parse(JSON.stringify((await getIcon()).image));

  const profile = await getProfile();
  const prof_image = JSON.parse(JSON.stringify(profile.profile_image));

  const email = profile.email;

  const { contents } = await getSNS();

  if (!contents) {
    return <h1>No SNS</h1>
  }

  return (
    <main className="flex flex-col items-center justify-between p-3">
      <div className="flex place-items-center">
        <Image 
          className="relative rounded-full "
          src={icon.url}
          alt="Profile icon"
          width={150}
          height={150}
          priority
        />
      </div>
      <div className="flex place-item-center p-2 mt-5">
        <div className="text-2xl text-blue-900 dark:text-blue-100">透湖 -Touko-</div>
      </div>
      <div className="flex place-item-center">
        <p className="text-2xl text-blue-900 dark:text-blue-100">System Engineer / Hacker</p>
      </div>
      <div className="flex place-items-center mt-5">
        <Link href={`mailto:${email}`} >
            <CustomIcon
              icon={SlEnvolope}
              size={24}
              title="Contact E-mail"
            />
        </Link>
      </div>
      <div className="flex place-item-center p-2 mt-5">
        <p className="font-mono text-sm">
          touko127@localhost:~$ hack {server}.com.dummy
        </p>
      </div>
      <div className="flex w-full justify-center mt-5">
        <ul className="ml-5 mr-5 flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
          {contents.map((sns) => (
            <li key={sns.id}>
              <Link href={`${sns.url}`} target="_blank" className="me-4 hover:underline md:me-6">
                {sns.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] mt-7">
        <Image
          className="relative rounded-xl border border-solid"
          src={prof_image.url}
          alt="Profile icon"
          width={600}
          height={600}
          priority
        />
      </div>

      <div className="flex mt-10">
        <div className="font-sans w-full justify-center rounded-md border border-pink-800 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-pink-300 dark:bg-zinc-500/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 leading-relaxed whitespace-pre-wrap "
          dangerouslySetInnerHTML={{ __html: profile.profile_text }}>
        </div>
      </div>

    </main>
  );
}
