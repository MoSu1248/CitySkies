import React from "react";
import type { ReactNode } from "react";
import Header from "../header/Header";
import Title from "../Title/Title";
import Search from "../search/Search";
import "./Layout.scss";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout__wrapper">
      <Header />
      <Title />
      <Search />
      <main className="content">{children}</main>
    </div>
  );
}
