import { Link, useParams } from "react-router-dom";
import { ThemeToggler } from "../components/ThemeToggler";

export function AboutItem() {
  const { userId } = useParams();
  return (
    <>
      <main>
        <p>Notandi {userId}</p>
        <ThemeToggler><p>breyta theme</p></ThemeToggler>
        <Link to="/">Heim</Link>
      </main>
    </>
  );
}