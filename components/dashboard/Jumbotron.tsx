'use client';

import { useState } from 'react';
import { EyeFilled, EyeInvisibleFilled, LoadingOutlined } from '@ant-design/icons';
import { formatDate } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Image from 'next/image';
import useSWR from 'swr';

import { DashboardService } from '../../services/dashboard';
import { money } from '../../utils/formats';
import LocalStorageService from '../../services/localStorage';

const Jumbotron = () => {
  const dashboardService = new DashboardService();
  const localStorageService = new LocalStorageService();

  const { data } = useSWR('dashboard', () => dashboardService.getData());

  const [showBalance, setShowBalance] = useState(false)

  const today = new Date();

  const userInfo = localStorageService.getUserInfoFromToken();

  return (
    <div className="w-full h-[655px] bg-primary-main rounded-lg p-8 flex flex-col text-white sm:flex-row sm:h-[400px] relative">
      <Image
        src="/images/pixels_1.svg"
        alt="pixels"
        width={180}
        height={177}
        className="absolute top-0 xs:left-0 sm:right-0 z-0"
      />

      <Image
        src="/images/pixels_1.svg"
        alt="pixels"
        width={180}
        height={177}
        className="absolute bottom-0 right-0 rotate-180 sm:left-0 z-0"
      />

      <Image
        src="/images/account_balance.svg"
        alt="Jumbotron"
        width={280}
        height={220}
        className="absolute left-8 bottom-8 z-0"
      />

      {!data ? (
        <div className="w-full flex flex-col items-center justify-center">
          <LoadingOutlined className="text-xl" />
          <p className="text-sm">Carregando...</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center mb-6 sm:mr-6 sm:mb-0 sm:items-start z-10">
            <h1 className="font-semibold text-xl leading-6">
              Olá,
              {' '}
              {userInfo.user_name.split(' ')[0]}
              {' '}
              :)
            </h1>
            <p className="text-sm mt-6">
              {formatDate(today, 'EEEE, dd/MM/yyyy', { locale: ptBR })}
            </p>
          </div>

          <div className="flex justify-center sm:flex-1 sm:items-center z-10">
            <div>
              <div className="flex items-center">
                <p className="text-lg font-semibold mr-5">Saldo</p>
                <div className="cursor-pointer" onClick={() => setShowBalance((current) => !current)}>
                  {showBalance ? (
                    <EyeInvisibleFilled className="text-lg" />
                  ) : (
                    <EyeFilled className="text-lg" />
                  )}
                </div>
              </div>
              <div className="bg-white w-[180px] h-[2px] my-4" />
              <p className="mb-2">
                Conta Corrente
              </p>
              <p className="text-3xl">
                {showBalance ? money(data.totalValue) : 'R$ ********'}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Jumbotron;
