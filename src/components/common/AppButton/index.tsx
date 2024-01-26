import { createEventDispatcher } from "@solid-primitives/event-dispatcher";
import styles from "./app-button.module.scss";

interface AppButtonProps {
  text: string;
  backgroundColor: string;
  textColor: string;
  disabled?: boolean;
  onClickEvent: () => void;
}

export default function AppButton(props: AppButtonProps) {
  const dispatch = createEventDispatcher(props);

  const dispatchClickEvent = () => {
    return dispatch("clickEvent");
  };

  return (
    <button
      onClick={() => dispatchClickEvent()}
      class={styles.button}
      style={`background-color: ${props.backgroundColor}; color: ${props.textColor}; border-color: ${props.backgroundColor};`}
    >
      {props.text}
    </button>
  )
}
