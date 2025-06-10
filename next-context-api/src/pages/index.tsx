import { GetServerSideProps, GetStaticProps } from "next";
import Likes from "@/Components/Likes/Likes";
import Comments from "@/Components/Comments/Comments";

export default function Page() {
  return (
    <div>
      <Likes />
      <br />
      <br />
      <Comments />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  revalidate: 86400
})

export const getServerSideProps: GetServerSideProps = async () => {
  // You can fetch dynamic data here
  const response = await fetch('https://api.example.com/data')
  const data = await response.json()

  // Return the fetched data as props to the page component
  return {
    props: {
      data: data
    }
  }
}