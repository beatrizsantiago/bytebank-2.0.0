'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Menu } from 'money-flow';
import { toast } from 'react-toastify';

type Props = {
  inline?: boolean;
}

const activeIndex:{[key: string]:number} = {
  '/dashboard': 0,
  '/transferencias': 1,
  '/investimentos': 2,
  '/outros': 3,
};

const NavigationMenu = ({ inline = false }:Props) => {
  const router = useRouter();

  const pathname = usePathname();

  return (
    <Menu
      activeIndex={activeIndex[pathname]}
      items={[
        { title: 'Início', onClick: () => router.push('/dashboard') },
        { title: 'Transferências', onClick: () => toast.warning('Página ainda não implementada!') },
        { title: 'Investimentos', onClick: () => toast.warning('Página ainda não implementada!') },
        { title: 'Outros serviços', onClick: () => toast.warning('Página ainda não implementada!') },
      ]}
      inline={inline}
    />
  );
};

export default NavigationMenu;
