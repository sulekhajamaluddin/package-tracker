import pageNotFound from "../assets/images/page-not-found.png";
import { useTranslation } from "../state/TranslationContext";

export default function PageNotFound() {
  const { content } = useTranslation();
  const { page_not_found } = content;
  return (
    <div className="page-not-found">
      <span>{page_not_found}</span>
      <img src={pageNotFound} alt="A door with 404 written on it" />
    </div>
  );
}
