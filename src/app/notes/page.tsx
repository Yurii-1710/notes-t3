
import Head from "next/head"
import { Header } from "../_components/Header"
import { Content } from "../_components/Content"


const Notes = () => {
  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>
      <main>
        <Header />
        <Content />
      </main>
    </>
  )
}

export default Notes