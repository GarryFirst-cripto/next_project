import delay from '../components/delay';

export const metadata = {
  title: "Page About Us",
  description: "Page About Us",
};

export default async function About() {

  await delay(3000);

  return (
    <div>
      <h1>Page "About"</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididuntut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididuntut labore et dolore magna aliqua.</p>
    </div>
  )
}
