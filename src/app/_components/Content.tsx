'use client'

import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/react";

export const Content: React.FC = () => {

  const session = getServerAuthSession();
  // const utils = api.useUtils()
  // const { topics } = api.topic.getAll.useQuery()

  const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
    undefined,
    {
      enabled: session?.user !=
    }
  )

  return (
    <div>
      <ul>

      </ul>
    </div>
  )
}
