//Project Files
import house from "../assets/images/house.png";
import { useContent } from "../state/index";

/**
 * Over engineering -5 🚨
 * 
 * I dont see why do you need a context api to load normal text
 * 
 * This actually scares me, because it means we havent understood when to use global state
 *  and when just import a sinmple file.
 * 
 *  We will do a follow up of this doing the mentor meeting.
 */
export default function About() {
  const { content } = useContent();
  // Naming -1 what is paraOne, 2, 3, 4,5
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
