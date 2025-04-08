import Navbar from './components/Nav';
import Footer from './components/Footer';

type Props = {
  children: React.ReactNode;
}

const Landing = ({ children }:Props) => (
  <div className="flex flex-col justify-between min-h-screen">
    <Navbar />
    <div className="flex flex-col align-center p-6 bg-blue-white-gradient flex-1">
      {children}
    </div>
    <Footer />
  </div>
);

export default Landing;
