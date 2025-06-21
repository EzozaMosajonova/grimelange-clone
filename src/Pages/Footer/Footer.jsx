import { FaHome, FaHeart, FaShoppingCart, FaUser, FaWhatsapp } from 'react-icons/fa';

export default function MobileBottomNav() {
  return (
    <>
      {/* Bottom Navbar - only on mobile */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around py-2 text-center z-40 md:hidden">
        <div className="flex flex-col items-center text-sm">
          <FaHome className="text-xl" />
          <span>Anasayfa</span>
        </div>
        <div className="flex flex-col items-center text-sm">
          <FaHeart className="text-xl" />
          <span>Favorilerim</span>
        </div>
        <div className="flex flex-col items-center text-sm">
          <FaShoppingCart className="text-xl" />
          <span>Sepetim</span>
        </div>
        <div className="flex flex-col items-center text-sm">
          <FaUser className="text-xl" />
          <span>Üye Girişi</span>
        </div>
      </nav>
    </>
  );
}
