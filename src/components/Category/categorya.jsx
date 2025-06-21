import React, { useState } from 'react';
import Images from '../../assets/kadinpaf.webp';
import Image from '../../assets/erkekpar.webp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentsIcon from '@mui/icons-material/Payments';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import Karta from "../../assets/bank.webp"
import Logo from "../../assets/logo.svg"



const Categorya = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleSection = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const services = [
    {
      icon: <LocalShippingIcon style={{ fontSize: 50 }} className="text-white" />,
      title: 'ÜCRETSİZ KARGO',
      description: '500₺ Üzeri Ürünlerde',
    },
    {
      icon: <PaymentsIcon style={{ fontSize: 50 }} className="text-white" />,
      title: 'TAKSİTLİ ÖDEME',
      description: 'Kredi Kartına Taksit İmkanı',
    },
    {
      icon: <WorkspacePremiumIcon style={{ fontSize: 50 }} className="text-white" />,
      title: 'KOLAY İADE',
      description: 'Ücretsiz İade Garantisi',
    },
  ];

  const footerData = [
    {
      title: 'KURUMSAL',
      items: [
        'Hakkımızda',
        'Gizlilik Politikası',
        'Mesafeli Satış Sözleşmesi',
        'Kişisel Verilerin Korunması',
        'İletişim',
        'Çerez Politikası',
      ],
    },
    {
      title: 'TREND KATEGORİLER',
      items: [
        'Erkek Tişört',
        'Erkek Şort',
        'Erkek Gömlek',
        'Kadın Bluz',
        'Kadın Tişört',
        'Kadın Elbise',
        'Kadın Outlet',
        'Urban Beat',
      ],
    },
    {
      title: 'ALIŞVERİŞ',
      items: [
        'Hesabım',
        'Üyelik',
        'Sepetim',
        'Favorilerim',
        'Kadın Elbise',
        'Siparişlerim',
      ],
    },
    {
      title: 'DESTEK',
      items: [
        'Sıkça Sorulan Sorular',
        'İptal İade Koşulları',
        'İade Taleplerim',
        'Kargo Takip',
        'İşlem Rehberi',
        'İmha Politikası',
      ],
    },
  ];

  return (
    <>
      <div className='container max-w-[1220px] w-full mx-auto'>
        <div className='w-full mt-10'>
          <a href="#"><img src={Images} className='w-full h-auto' alt="" /></a>
          <a href="#"><img src={Image} className='w-full h-auto md:mt-5 mt-0' alt="" /></a>
        </div>
      </div>

      <div className="container max-w-[1320px] mx-auto mt-20 px-4">
        <div className="flex flex-col justify-between md:flex-row items-center">
          {services.map((service, idx) => (
            <div key={idx} className="flex justify-center items-center md:w-1/3 mb-6 md:mb-0">
              <div className="flex items-center justify-center bg-gray-800 rounded-full w-[80px] h-[80px] mr-4">
                {service.icon}
              </div>
              <div>
                <strong className="text-gray-900 text-base md:text-lg">{service.title}</strong>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container max-w-[1360px] w-full mx-auto mt-20 px-4">
        {/* Desktop versiyasi */}
        <div className="hidden md:flex justify-between">
          {footerData.map((section, idx) => (
            <div key={idx} className="md:w-1/4">
              <strong className="text-xl font-bold text-black block mb-3">{section.title}</strong>
              {section.items.map((item, i) => (
                <a key={i} href="#" className="text-md block text-gray-700 mb-1">
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Mobil versiyasi */}
        <div className="md:hidden">
          {footerData.map((section, idx) => (
            <div key={idx} className="border-t border-gray-300 py-2">
              <button
                onClick={() => toggleSection(idx)}
                className="w-full flex justify-between items-center text-left text-black font-bold text-lg"
              >
                {section.title}
                <span>{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="mt-2 pl-2">
                  {section.items.map((item, i) => (
                    <a key={i} href="#" className="block text-md text-gray-700 py-1">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white text-center py-6 relative">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl mb-4">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
          <FaWhatsapp />
        </div>

        {/* Payment Icons */}
        <div className="flex justify-center flex-wrap gap-2 mb-4">
          <img src={Karta} alt="mastercard" className="h-6" />
        </div>

        {/* Copyright */}
        <p className="text-sm mb-4">
          Copyright © 2021 grimelange.com.tr Tüm hakları saklıdır.
        </p>

        {/* Whatsapp Support Button */}
        <a href="https://api.whatsapp.com/send/?phone=905302585106&text&type=phone_number&app_absent=0">
          <div className="fixed bottom-6 left-4 flex items-center gap-2 bg-white shadow-md rounded-full px-3 py-1 z-50">
            <div className="bg-green-500 p-2 rounded-full text-white text-xl">
              <FaWhatsapp />
            </div>
            <span className="text-sm font-medium">Whatsapp Destek</span>
          </div>
        </a>

        {/* Ticimax logo */}
        <div className="flex justify-center mt-10">
          <img src={Logo} alt="Ticimax" className="h-8" />
        </div>

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-4 bg-black text-white p-2 rounded"
        >
          <IoIosArrowUp size={20} />
        </button>
      </div>
    </>
  );
};

export default Categorya;
