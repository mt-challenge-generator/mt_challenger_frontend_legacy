import { Store } from "vuex";
import { State } from "@/interfaces/state.interface";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
