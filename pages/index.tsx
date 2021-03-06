import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import styles from "../styles/Home.module.css";
import myPhoto from "../public/me.jpg";
// import myResume from "../public/resume.pdf";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>William Helmrath</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <div className="flex flex-col items-center">
          <div className="relative w-80 h-80 border-yellow-300 border-8 rounded-md">
            <Image
              src={myPhoto}
              layout="fill"
              objectFit="cover"
              quality={90}
              priority={true}
              placeholder="blur"
              alt="My headshot"
            />
          </div>
          <div className="md:text-5xl text-2xl font-bold my-6">
            <h1>
              {"Hello, I'm "}
              <span className="text-yellow-300">William Helmrath</span>.
            </h1>
          </div>
          <div className="flex justify-evenly w-80">
            <SocialIcon
              network="github"
              url="https://github.com/williamhelmrath"
              target="_blank"
            />
            <SocialIcon
              network="linkedin"
              url="https://linkedin.com/in/williamhelmrath"
              target="_blank"
            />
            <SocialIcon
              network="email"
              url="mailto:william.helmrath@live.com"
            />
          </div>
          <a
            className="border-yellow-300 border-4 px-4 py-2 mt-6 rounded-sm"
            href="/resume.pdf"
          >
            View my resume
          </a>
        </div>
      </main>

      <footer
        className={clsx(
          styles.footer,
          "h-8 w-screen border-t border-white bg-black flex justify-center items-center"
        )}
      >
        Made with ????
      </footer>
    </div>
  );
}
