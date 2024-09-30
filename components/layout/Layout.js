import Navbar from '../Navbar';
import Footer from '../Footer';


export const metadata = {
  title: "Tulio",
  description: "Erect By Atmosoft",
};

export default function Layout({ children }) {
  return (
    
    <div>
      {/* <Navbar /> */}

      <main>{children}</main>
      <Footer />
    </div>
  );
}
