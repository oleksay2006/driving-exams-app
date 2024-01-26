import { setIsNotFoundLayout } from "@/stores/layoutStore";
import AppButton from "@/components/common/AppButton";
import { useNavigate } from "@solidjs/router";
import styles from "./not-found.module.scss";

export default function NotFound() {
  const navigate = useNavigate();
  setIsNotFoundLayout(true);

  const redirectToHome = () => {
    navigate("/", { replace: true });
    setIsNotFoundLayout(false);
  };

  return (
    <div class={styles.page__wrapper}>
      <h1 class={styles.page__numbers}>404</h1>
      <h1 class={styles.page__title}>Page not found</h1>
      <AppButton
        onClickEvent={redirectToHome}
        text="Go to home page"
        textColor="white"
        backgroundColor="#4378DB"
      />
    </div>
  )
}
