import Head from "next/head";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  description?: string;
}

export default function NavPage({ children, title, description }: Props) {
  return (
    <>
      <Head>
        <title>{`Dashboard | ${title}`}</title>
        <meta
          name="description"
          content={
            description
              ? description
              : "Full featured blogging website where you can earn money"
          }
        />
      </Head>
      <main className="mt-20 md:mt-5 mx-6">{children}</main>
    </>
  );
}
