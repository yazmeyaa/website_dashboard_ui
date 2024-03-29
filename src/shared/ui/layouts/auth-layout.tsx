import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex">
      <aside className="min-w-52 flex flex-col gap-4 py-3 px-2 bg-zinc-900">
        <Link className="text-lg" to={"/"}>
          Управление проектами
        </Link>
        <Link className="text-lg" to={"/files"}>
          Файлы
        </Link>
      </aside>
      <main className="grow">{children}</main>
    </div>
  );
};
