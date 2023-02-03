//Project Files
import house from "../assets/images/house.png";
export default function About() {
  return (
    <div id="about">
      <img src={house} alt="A house"></img>
      <h1>We are the Insta Tracker</h1>
      <p>
        InstaTracker is an order tracking service for the customers of
        InstaPacket.
      </p>
      <p>
        InstaPacket delivers what you ordered online to you. Since 2010, when it
        was first established, InstaPacket has been delivering smiles to house
        located far and wide in Sweden.
      </p>
      <p>
        In a constantly evolving world, the company is dedicated to refining
        itself into a climate responsible solution to the logistics needs of the
        society. Thus we are moving more and more towards Insta Parcels, where
        we bring the packages to your nearest parcel locker and you collect it
        from there, thus saving the last mile energy and lots of fossil fuel. We
        are also trying to achieve fossil free delivery zones as part of our
        nature care.
      </p>
      <p>Don’ t worry !! We also deliver to your door step.</p>
      <p>
        With an ever growing network, the reach of this logistics group has
        spread every mile, reaching all the major cities and small town areas.
        We are on a constant journey to become more and more earth friendly.
      </p>
      <p>Let's preserve the smiles for the future houses too...</p>
    </div>
  );
}
