'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { Input, Button } from 'money-flow';

import LocalStorageService from '../../services/localStorage';
import { UserService, UserData } from '../../services/user';

const EditUser = () => {
  const localStorageService = new LocalStorageService();

  const userData = localStorageService.getUserInfoFromToken();

  const [fullName, setFullName] = useState(userData.user_name);
  const [password, setPassword] = useState('');

  const onSaveClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const localStorageService = new LocalStorageService();
    const userService = new UserService();

    try {
      const token = await userService.update(new UserData(password, fullName));
      localStorageService.setToken(token);
      window.location.reload();
      
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Ocorreu um erro ao atualizar seus dados de perfil! Tente novamente mais tarde.');
      }
    }
  };

  return (
    <form className="w-full flex justify-center" onSubmit={onSaveClick}>
      <div className="w-full flex flex-col items-center z-10 relative">
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
            value={userData.email}
            required
            disabled
          />
        </div>

        <div className="w-full flex flex-col mb-6">
          <label className="mb-1"><b>Nova senha</b></label>
          <Input
            placeholder="Digite sua senha"
            type="password"
            className="w-full sm:max-w-[300px] md:max-w-[250px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
        </div>

        <div className="w-full flex flex-col items-center mb-6 md:items-start">
          <Button
            text="Salvar alterações"
            className="w-full sm:max-w-[250px]"
            color="secondary"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default EditUser;
