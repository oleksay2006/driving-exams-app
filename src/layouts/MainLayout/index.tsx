import { RouteSectionProps } from "@solidjs/router";
import AppHeader from "@/components/common/AppHeader";
import styles from "./main-layout.module.scss";
import { Show } from "solid-js";
import { isNotFoundLayout } from "@/stores/layoutStore";

export default function MainLayout(props: RouteSectionProps<unknown>) {
  return (
    <>
      <Show when={!isNotFoundLayout()}>
        <AppHeader />
      </Show>
      <main class={isNotFoundLayout() ? styles["main--not-found"] : styles.main__wrapper}>
        {props.children}
      </main>
    </>
  )
}
