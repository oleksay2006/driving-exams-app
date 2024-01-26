import { createEffect, createSignal, Show } from "solid-js";
import styles from "./app-header.module.scss";
import { A, useLocation } from "@solidjs/router";

export default function AppHeader() {
  const [title, setTitle] = createSignal<string>("");
  const [color, setColor] = createSignal<string>("");
  const [backPath, setBackPath] = createSignal<string>("/");
  const location = useLocation();

  const showBackButton = () => {
    return location.pathname !== "/";
  };


  createEffect(() => {
    switch (location.pathname) {
      case "/":
        setTitle("Home");
        setColor("#4378DB");
        break;
      case "/practice-questions":
        setTitle("Practice Questions");
        setColor("#4378DB");
        break;
      case "/test":
        setTitle("Test");
        setColor("#FDCD55");
        break;
      case "/road-signs":
        setTitle("Дорожні знаки");
        setColor("#28A164");
        setBackPath("/");
        break;
      case "/road-signs/warning-signs":
        setTitle("Попереджувальні знаки");
        setColor("#28A164");
        setBackPath("/road-signs");
        break;
      case "/road-signs/priority-signs":
        setTitle("Знаки пріоритету");
        setColor("#28A164");
        setBackPath("/road-signs");
        break;
      case "/study":
        setTitle("Study Course");
        setColor("#F35555");
        break;
      case "/test-history":
        setTitle("Test History");
        setColor("#F38E55");
        break;
    }
  });

  return (
    <header class={styles.header__wrapper} style={`background-color: ${color()};`}>
      <Show
        when={showBackButton()}
      >
        <A href={backPath()} class={styles.header__icon}></A>
      </Show>
      <h1 class={styles.header__title}>{title()}</h1>
    </header>
  )
}
