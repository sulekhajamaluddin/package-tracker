//Project Files
import house from "../assets/images/house.png";
import { useContent } from "../state/index";

export default function About() {
  const { content } = useContent();
  const {
    aboutTitle,
    paraOne,
    paraTwo,
    paraThree,
    paraFour,
    paraFive,
    paraSix,
  } = content;

  return (
    <main id="about">
      <img src={house} alt="A house"></img>
      <h1>{aboutTitle}</h1>
      <p>{paraOne}</p>
      <p>{paraTwo}</p>
      <p>{paraThree}</p>
      <p>{paraFour}</p>
      <p>{paraFive}</p>
      <p>{paraSix}</p>
    </main>
  );
}
