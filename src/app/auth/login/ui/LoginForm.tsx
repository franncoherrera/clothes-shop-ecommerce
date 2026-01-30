'use client';
import { authenticate } from '@/actions';
import clsx from 'clsx';
import Link from 'next/link';
import { useActionState } from 'react';
import { IoInformationOutline } from 'react-icons/io5';

export const LoginForm = () => {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="flex flex-col">
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        name="email"
      />

      <label htmlFor="email">Contraseña</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
        name="password"
      />

      <div
        className="flex h-8 items-end space-x-1 mb-4"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <>
            <IoInformationOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">
              Las credenciales no son correctas
            </p>
          </>
        )}
      </div>
      <LoginButton isPending={isPending} />

      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary text-center">
        Crear una nueva cuenta
      </Link>
    </form>
  );
};

type LoginButtonProps = {
  isPending: boolean;
};

function LoginButton({ isPending }: LoginButtonProps) {
  return (
    <button
      type="submit"
      className={clsx(isPending ? 'btn-disabled' : 'btn-primary')}
      disabled={isPending}
    >
      Ingresar
    </button>
  );
}
