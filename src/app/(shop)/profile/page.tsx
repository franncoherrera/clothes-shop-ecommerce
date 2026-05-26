import { auth } from "@/auth.config";
import { Title } from "@/components";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  const user = session.user;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Title title="Perfil" />

      <div className="grid gap-4 p-8 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Nombre</p>

          <p className="mt-2 text-lg font-semibold text-slate-800">
            {user.name}
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Correo electrónico</p>

          <p className="mt-2 text-lg font-semibold text-slate-800 break-all">
            {user.email}
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Rol</p>

          <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium capitalize">
            {user.role}
          </span>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Email verificado</p>

          <div className="mt-2 flex items-center gap-2">
            <div
              className={`w-2.5 h-2.5 rounded-full ${
                user.emailVerified ? "bg-green-500" : "bg-red-500"
              }`}
            />

            <span className="text-sm font-medium text-slate-700">
              {user.emailVerified ? "Verificado" : "No verificado"}
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 md:col-span-2">
          <p className="text-sm text-slate-500">Imagen de perfil</p>

          <div className="mt-3 flex items-center gap-4">
            {user.image ? (
              <img
                src={user.image}
                alt={user.name ?? "Usuario"}
                className="w-16 h-16 rounded-full object-cover border border-slate-200"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold text-xl">
                {user.name
                  ?.split(" ")
                  .map((word) => word[0])
                  .join("")}
              </div>
            )}

            <span className="text-sm text-slate-500">
              {user.image ? "Imagen cargada" : "Sin imagen de perfil"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
