import Main from "./Main";
import Bank from "./pages/Bank";
import Client from "./pages/Client";

export default function Root(props: any) {
  const CLIENT = "client";
  const BANK = "bank";

  if (props?.client === CLIENT) {
    return <Client />;
  }
  if (props?.bank === BANK) {
    return <Bank />;
  }
}
