import Image from 'next/image';
import Landing from '../components/Landing';

export default function Home() {
  return (
    <Landing>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <h1 className="text-center text-lg font-semibold m-3 max-w-[300px] leading-7 lg:text-xl lg:max-w-[430px] md:text-left">
          Experimente mais liberdade no
          controle da sua vida financeira.
          Crie sua conta com a gente!
        </h1>
        <div className="w-[350px] h-[200px] sm:w-[500px] sm:h-[350px] md:w-[660px] md:h-[410px] relative m-4 z-0">
          <Image
            src="/images/banner.svg"
            alt="Banner"
            objectFit="contain"
            fill
          />
        </div>
      </div>

      <h2 className="text-lg text-center my-5">
        <b>Vantagens do nosso banco:</b>
      </h2>

      <div className="flex justify-center gap-4 flex-wrap">
        <div className="flex flex-col items-center max-w-[282px]">
          <Image
            src="/images/gift.svg"
            alt="Vantagem 1"
            width={73}
            height={56}
          />
          <p className="text-lg text-center text-secondary-main font-bold my-2">
            Conta e cartão gratuitos
          </p>
          <p className="text-center text-gray-600 leading-5">
            Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.
          </p>
        </div>

        <div className="flex flex-col items-center max-w-[282px]">
          <Image
            src="/images/withdraw.svg"
            alt="Vantagem 1"
            width={73}
            height={56}
          />
          <p className="text-lg text-center text-secondary-main font-bold my-2">
            Saques sem custo
          </p>
          <p className="text-center text-gray-600 leading-5">
            Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.
          </p>
        </div>

        <div className="flex flex-col items-center max-w-[282px]">
          <Image
            src="/images/star.svg"
            alt="Vantagem 1"
            width={73}
            height={56}
          />
          <p className="text-lg text-center text-secondary-main font-bold my-2">
            Programa de pontos
          </p>
          <p className="text-center text-gray-600 leading-5">
            Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!
          </p>
        </div>

        <div className="flex flex-col items-center max-w-[282px]">
          <Image
            src="/images/devices.svg"
            alt="Vantagem 1"
            width={73}
            height={56}
          />
          <p className="text-lg text-center text-secondary-main font-bold my-2">
            Seguro Dispositivos
          </p>
          <p className="text-center text-gray-600 leading-5">
            Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.
          </p>
        </div>
      </div>
    </Landing>
  );
}