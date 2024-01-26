import { createEventDispatcher } from "@solid-primitives/event-dispatcher";
import { Transition } from "solid-transition-group";
import styles from "./app-modal.module.scss";
import { Portal } from "solid-js/web";
import { createEffect, JSX, Show } from "solid-js";

interface AppModalProps {
  isOpen: boolean;
  onCloseEvent: () => boolean;
  slottedContent: JSX.Element;
}

export default function AppModal(props: AppModalProps) {
  const dispatch = createEventDispatcher(props);

  const dispatchCloseEvent = () => {
    return dispatch("closeEvent");
  };
  createEffect(() => {
    if (props.isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });

  return (
    <Portal>
      <Transition
        enterActiveClass={styles["fade--active"]}
        exitActiveClass={styles["fade--active"]}
        enterClass={styles["opacity-0"]}
        enterToClass={styles["opacity-1"]}
        exitToClass={styles["opacity-0"]}
      >
        <Show when={props.isOpen}>
          <div class={styles.modal__wrapper}>
            <div onClick={() => dispatchCloseEvent()} class={styles.modal__backdrop}></div>
            <div class={styles.modal__container}>
              <div onClick={() => dispatchCloseEvent()} class={styles["modal__close-icon"]}></div>
              {props.slottedContent}
            </div>
          </div>
        </Show>
      </Transition>
    </Portal>
  )
}
