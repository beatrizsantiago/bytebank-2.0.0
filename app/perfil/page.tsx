'use client';

import Image from 'next/image';

import Header from '../../components/Header';
import InlineMenu from '../../components/InlineMenu';
import Sidebar from '../../components/Sidebar';
import EditUser from '../../components/perfil/EditUser';

export default function Dashboard() {
  return (
    <div>
      <Header />

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1300px] flex flex-col gap-6 p-6 lg:flex-row">
          <Sidebar />
          <InlineMenu />

          <div className="flex-1">
            <div className="w-full max-w-[996px] bg-gray-medium rounded-lg p-8">
              <p className="text-xl font-bold mb-6">
                Minha conta
              </p>

              <div className="w-full flex flex-col-reverse items-center md:flex-row">
                <Image
                  src="/images/edit_profile.svg"
                  alt="Edição de perfil"
                  width={440}
                  height={380}
                />

                <EditUser />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
