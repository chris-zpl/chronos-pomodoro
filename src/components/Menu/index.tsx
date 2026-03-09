import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

type AvaliableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvaliableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvaliableThemes) || "dark";
    return storageTheme;
  });
  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  }

  function handleThemeChange(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    e.preventDefault(); // Não segue o link
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  /* useEffect(() => {
    console.log('useEffect sem dependência');
  }) */ // Executado toda vez que o componenete renderiza na tela

  /* useEffect(() => {
    console.log('useEffect com array deps vazio');
  }, []) */ // Executa apenas quando o react monta o componenete na tela pela primeira vez

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]); //Executa apenas quando o valor de theme muda

  return (
    <nav className={styles.menu}>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Ver Histórico"
        title="Ver histórico"
      >
        <HistoryIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Configurações"
        title="IConfigurações"
      >
        <SettingsIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
