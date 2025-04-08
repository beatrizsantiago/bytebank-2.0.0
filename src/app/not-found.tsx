'use client'

import Image from 'next/image';
import { Button } from 'money-flow';
import { useRouter } from 'next/navigation';

import Landing from '../components/Landing';

export default function NotFound() {
  const router = useRouter()

  return (
    <Landing>
      <h2 className="text-center text-xl mt-3">
        <b>
          Ops! Não encontramos a página...
        </b>
      </h2>

      <p className="text-black text-center mt-4">
        E olha que exploramos o universo procurando por ela!
        <br />
        Que tal voltar e tentar novamente?
      </p>

      <div className="flex justify-center mt-8">
        <Button text="Voltar ao início" onClick={() => router.push('/')} />
      </div>

      <div className="flex justify-center mt-8">
        <Image
          src="/images/404.svg"
          alt="Bytebank logo"
          width={470}
          height={354}
        />
      </div>
    </Landing>
  );
}