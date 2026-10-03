import { NavbarClient } from "@/components/layout/NavbarClient";
import { getSession } from "@/lib/session";

export async function Navbar() {
  const session = await getSession();
  return <NavbarClient loggedIn={Boolean(session)} />;
}
