'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { Input, Button } from 'money-flow';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { AuthenticationService, UserData } from '../../../services/authentication';
import LocalStorageService from '../../../services/localStorage';
import Modal from '../../Modal';

type Props = {
  onClose: () => void;
};

const SignUp = ({ onClose }:Props) => {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSignUpClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const authService = new AuthenticationService();
    const localStorageService = new LocalStorageService();

    try {
      const token = await authService.register(new UserData(email, password, fullName));
      localStorageService.setToken(token);
      router.push('/dashboard');
      
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Ocorreu um erro ao criar conta! Tente novamente mais tarde.');
      }
    }
  };

  return (
    <Modal isVisible onClose={onClose}>
      <form className="flex justify-center my-4" onSubmit={onSignUpClick}>
        <div className="w-11/12 md:w-10/12 flex flex-col items-center z-10 relative">
          <Image
            src="/images/sign_up.svg"
            alt="Cadastrar"
            width={350}
            height={260}
          />

          <h2 className="font-bold text-center text-lg my-7 leading-5">
            Preencha os campos abaixo para criar sua conta corrente!
          </h2>

          <div className="w-full flex flex-col mb-6">
            <label className="mb-1"><b>Nome</b></label>
            <Input
              placeholder="Digite seu nome completo"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              minLength={3}
              required
            />
          </div>

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
              className="max-w-[280px]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
            />
            <p className="text-secondary-main underline">Esqueci a senha!</p>
          </div>

          <div className="w-full flex items-center mb-8">
            <input
              type="checkbox"
              className="appearance-none min-w-6 min-h-6 bg-gray-100 border-2 border-secondary-main rounded checked:bg-secondary-main checked:border-transparent"
              required
            />
            <label htmlFor="checkbox" className="leading-4 ml-3">
              Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco.
            </label>
          </div>

          <Button
            text="Criar conta"
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

export default SignUp;
