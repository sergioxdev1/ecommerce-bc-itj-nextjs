import { Container, TableContainer } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Header title="ITJ Funko Store">
        <Link href="/">Home</Link>
        <Link href="/projects">Store</Link>
        <Link href="/admin">Admin</Link>
      </Header>
      <Container fixed>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
}
