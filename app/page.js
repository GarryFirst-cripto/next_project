import Head from "next/head";
import Heading from "./components/Heading";
import Socials from "./components/Socials";

// export const getStaticProps = async () => {
//   try {
//     const response = await fetch(`${process.env.API_HOST}/socials`);
//     const data = await response.json();

//     if (!data) {
//       return {
//         notFound: true,
//       }
//     }

//     return {
//       props: { socials: data },
//     }
//   } catch {
//     return {
//       props: { socials: null },
//     }
//   }
// };

export async function generateStaticParams() {
  try {
    const socials = await fetch(`${process.env.API_HOST}/socials`)
      .then(data => data.json());

    if (!socials) {
      return {
        notFound: true,
      }
    }

    return { props: { socials }}   
  } catch {
    return {
      props: { socials: null },
    }
  }

}

const Home = ({ socials }) => (
  <div>
    <Heading text="Next.js Application" />
    <Socials socials={socials} />
  </div>
);

export default Home;
