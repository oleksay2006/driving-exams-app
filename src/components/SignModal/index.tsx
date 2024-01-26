import { createEventDispatcher } from "@solid-primitives/event-dispatcher";
import styles from "./sign-modal.module.scss";
import { Sign } from "@/types/entities/Sign";
import AppModal from "@/components/common/AppModal";

interface SignModalProps {
  isOpen: boolean;
  title?: string;
  image?: string;
  description?: string;
  onCloseEvent: void | boolean;
}

export default function SignModal(props: SignModalProps) {
  const dispatch = createEventDispatcher(props);

  const dispatchCloseEvent = () => {
    return dispatch("closeEvent");
  };

  return (
    <AppModal
      isOpen={props.isOpen}
      onCloseEvent={() => dispatchCloseEvent()}
      slottedContent={
        <>
          <h1 class={styles.modal__title}>{props.title}</h1>
          <img class={styles.modal__image} src={props.image} alt={`${props.title} sign`}></img>
          <div class={styles.modal__description}>{props.description}</div>
        </>
      }
    ></AppModal>
  )
}
