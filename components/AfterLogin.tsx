import Link from "next/link";
import { Button } from "@mantine/core";
import Logout from "./Logout";

const AfterLogin = () => {
  return (
    <div>
      <Link href="/">
        <Button variant="subtle" mb="md">
          ← Home
        </Button>
      </Link>
      <h1>You have successfully logged in!</h1>
      <Logout />
    </div>
  );
};

export default AfterLogin;
