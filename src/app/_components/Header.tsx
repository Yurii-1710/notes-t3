
import { api, HydrateClient } from "~/trpc/server";
import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";

export const Header = async () => {

  const session = await getServerAuthSession();

  return (
    <HydrateClient>
      <div className="navbar bg-primary text-primary-content">
        <div className="flex-1 pl-5 text-3xl font-bold">
          {session?.user.name ? `Notes for ${session.user.name}` : ""}
        </div>

        {/* <div className="flex-none gap-2">
          <div className="dropdown-end dropdown">
            {session?.user ? (
              <label
                tabIndex={0}
                className="btn-ghost btn-circle avatar btn"
                onClick={async () => { 'use server'; await signOut() }}
              >
                <div className="w-10 rounded-full">
                  <img
                    src={session?.user?.image ?? ""}
                    alt={session?.user?.name ?? ""}
                  />
                </div>
              </label>
            ) : (
              <button
                className="btn-ghost rounded-btn btn"
                onClick={
                  async () => { 'use server'; await signIn() }
                }
              >
                Sign in
              </button>
            )
            }
          </div>
        </div> */}

        <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
          className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        >
          {session ? "Sign out" : "Sign in"}
        </Link>
      </div>
    </HydrateClient>
  )
}
