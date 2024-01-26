import { createSignal } from "solid-js";

const [isNotFoundLayout, setIsNotFoundLayout] = createSignal<boolean>(false);

export {
  isNotFoundLayout,
  setIsNotFoundLayout
};
