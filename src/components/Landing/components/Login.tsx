'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { Input, Button } from 'money-flow';
import { useRouter } from 'next/navigation';
import { login } from '@usecases/auth/login';
import { authApi } from '@infrastructure/api/authApi';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Modal = dynamic(() => import('@components/Modal'));

type Props = {
  onClose: () => void;
};

const Login = ({ onClose }:Props) => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onLoginClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      await login({ email, password }, authApi);
      router.push('/dashboard');
      
    } catch {
      setLoading(false);
      toast.error('Ocorreu um erro ao fazer login! Tente novamente mais tarde.');
    }
  };

  return (
    <Modal isVisible onClose={onClose}>
      <form className="flex justify-center my-4" onSubmit={onLoginClick}>
        <div className="w-11/12 md:w-10/11 flex flex-col items-center z-10 relative">
          <Image
            src="/images/login.svg"
            alt="Login"
            width={330}
            height={260}
          />

          <h2 className="font-bold text-center text-lg my-7">
            Login
          </h2>

          <div className="w-full flex flex-col mb-6">
            <label className="mb-1"><b>E-mail</b></label>
            <Input
              placeholder="Digite seu e-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="w-full flex flex-col mb-6">
            <label className="mb-1"><b>Senha</b></label>
            <Input
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="max-w-[280px]"
              required
              minLength={6}
            />
            <p className="text-secondary-main underline">Esqueci a senha!</p>
          </div>

          <Button
            text="Acessar"
            className="max-w-[250px]"
            color="secondary"
            type="submit"
            loading={loading}
            disabled={loading}
          />
        </div>
      </form>
    </Modal>
  );
};

export default Login;
