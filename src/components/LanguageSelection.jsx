//Node Modules
import { useEffect, useState } from "react";

//Project Files
import Swedish from "../data/swedish.json";
import English from "../data/english.json";
import { useContent } from "../state/ContentContext";

export default function LanguageSelection() {
  const { setContent } = useContent();
  const [languageCurrent, setLanguageCurrent] = useState("EN");

  function setContentLanguage() {
    languageCurrent === "EN" ? setContent(English) : setContent(Swedish);
  }

  useEffect(() => {
    setContentLanguage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageCurrent]);

  return (
    <select
      className="language-select"
      value={languageCurrent}
      onChange={(e) => setLanguageCurrent(e.target.value)}
    >
      <option>EN</option>
      <option>SE</option>
    </select>
  );
}
