import Head from "next/head";
import { getServerAuthSession } from "~/server/auth";
import Todos from "../_components/Todos";

async function TodoPage() {
  const session = await getServerAuthSession();
  return (
    <>
      <Head>
        <title>Full stack todo app</title>
        <meta name="description" content="Full stack todo app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0f1235] to-[#090920]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 text-white">
            <h3 className="text-xl font-bold">Todos</h3>

            <Todos />
          </div>
        </div>
      </main>
    </>
  );
}

export default TodoPage;
