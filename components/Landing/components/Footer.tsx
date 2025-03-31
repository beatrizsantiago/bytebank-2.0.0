import Image from 'next/image';
import { InstagramOutlined, WhatsAppOutlined, YoutubeFilled } from '@ant-design/icons';

const Footer = () => (
  <footer className="w-full min-h-56 p-8 bg-black flex justify-center items-center text-white p-4">
    <div className="w-full max-w-6xl flex justify-center flex-wrap md:items-center md:justify-between">
      <div className="m-2 w-56 md:w-auto">
        <b className="m-2"><b>Serviços</b></b>
        <p className="m-2">Conta corrente</p>
        <p className="m-2">Conta PJ</p>
        <p className="m-2">Cartão de crédito</p>
      </div>

      <div className="m-2 w-56 md:w-auto">
        <b className="m-2"><b>Contato</b></b>
        <p className="m-2">0800 004 250 08</p>
        <p className="m-2">meajuda@bytebank.com.br</p>
        <p className="m-2">ouvidoria@bytebank.com.br</p>
      </div>

      <div className="flex flex-col justify-center items-center m-2 w-56 md:w-auto">
        <p><b>Desenvolvido por Alura</b></p>
        <Image
          src="/images/white_logo.svg"
          alt="Bytebank logo"
          width={145}
          height={32}
          style={{ margin: '18px' }}
        />
        <div className="flex justify-between items-center w-36 text-3xl">
          <InstagramOutlined />
          <WhatsAppOutlined />
          <YoutubeFilled />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
