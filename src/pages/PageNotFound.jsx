import pageNotFound from "../assets/images/page-not-found.png";
import { useContent } from "../state/ContentContext";

export default function PageNotFound() {
  const { content } = useContent();
  const { notFound } = content;
  return (
    <div className="page-not-found">
      <span>{notFound}</span>
      <img src={pageNotFound} alt="A door with 404 written on it" />
    </div>
  );
}
