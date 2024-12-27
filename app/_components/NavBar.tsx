'use client';

import cartIcon from '@/components/icons/cartIcon.svg';
import leafLogoIcon from '@/components/icons/leafLogoIcon.svg';
import menuIcon from '@/components/icons/menuIcon.svg';
import searchIcon from '@/components/icons/searchIcon.svg';
import userIcon from '@/components/icons/userIcon.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function NavBar() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [scrollDisabled, setScrollDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const pathname = usePathname();

  const handleMenuClick = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
    setScrollDisabled(!scrollDisabled);
    document.body.style.overflow = scrollDisabled ? 'auto' : 'hidden';
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className="border-green-5000 border- flex h-12  w-full items-center  bg-transparent xl:mt-2 ">
        <div className="border-rose-4000 border- mx-auto flex w-full justify-between">
          <ul className="border-amber-4000 border- flex w-3/5 px-5 md:justify-evenly">
            <li className="z-20">
              <Link href="/" className="flex gap-1">
                <Image
                  src={leafLogoIcon}
                  height={24}
                  width={24}
                  alt="leaf-logo-icon"
                />
                <span className="font-bold">Petals</span>
              </Link>
            </li>
            <div className=" bg-red-2000  hidden w-2/3 font-semibold text-muted-foreground md:flex md:justify-evenly">
              <li className="">
                <Link href="/">Home</Link>
              </li>
              <li className={pathname === '/about' ? 'text-primary' : ''}>
                <Link href="/about">About</Link>
              </li>
              <li className={pathname === '/products' ? 'text-primary' : ''}>
                <Link href="/products">Products</Link>
              </li>
              <li className={pathname === '/contact' ? 'text-primary' : ''}>
                <Link href="/contact">Contact</Link>
              </li>
            </div>
          </ul>
          <ul className="border-purple-4000 border- z-10 hidden w-2/5 justify-end gap-5 pr-[5%] md:flex">
            <li>
              <Link href="/search">
                <Image
                  src={searchIcon}
                  width={24}
                  height={24}
                  alt="search-icon"
                />
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <Image
                  src={cartIcon}
                  width={24}
                  height={24}
                  alt="cart-icon"
                  className="text-primary"
                />
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <Image src={userIcon} width={24} height={24} alt="user-icon" />
              </Link>
            </li>
          </ul>
          <button onClick={handleMenuClick} className=" pr-5 md:hidden">
            <Image
              src={menuIcon}
              width={24}
              height={24}
              alt="cart-icon"
              className="text-primary"
            />
          </button>
        </div>
      </div>

      {isVisible && !scrollDisabled && (
        <motion.div
          initial={{ opacity: 0, y: '-20px' }}
          whileInView={{ opacity: 1, y: '0' }}
          {...{
            className:
              'fixed z-20 -mt-12 flex h-12 w-full items-center bg-gray-100 bg-opacity-15 bg-clip-padding backdrop-blur-sm backdrop-filter',
          }}
        >
          <div className="border- mx-auto flex w-full justify-between ">
            <ul className="border-amber-4000 border- flex w-3/5 px-5 md:justify-evenly">
              <li className="z-20">
                <Link href="/" className="flex gap-1">
                  <Image
                    src={leafLogoIcon}
                    height={24}
                    width={24}
                    alt="leaf-logo-icon"
                  />
                  <span className="font-bold">Petals</span>
                </Link>
              </li>
              <div className=" bg-red-2000  hidden w-2/3 font-semibold text-muted-foreground md:flex md:justify-evenly">
                <li className="text-primary">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </div>
            </ul>
            <ul className="border-purple-4000 border- z-10 hidden w-2/5 justify-end gap-5 pr-[5%] md:flex">
              <li>
                <Link href="/search">
                  <Image
                    src={searchIcon}
                    width={24}
                    height={24}
                    alt="search-icon"
                  />
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <Image
                    src={cartIcon}
                    width={24}
                    height={24}
                    alt="cart-icon"
                  />
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <Image
                    src={userIcon}
                    width={24}
                    height={24}
                    alt="user-icon"
                  />
                </Link>
              </li>
            </ul>
            <button onClick={handleMenuClick} className=" pr-5 md:hidden">
              {'<XIcon />'}
            </button>
          </div>
        </motion.div>
      )}

      {isSideMenuOpen && (
        <div
          style={{
            height: '1000px',
            overflowY: 'scroll',
            scrollbarWidth: scrollDisabled ? 'auto' : 'thin', // Hide the scrollbar thumb
            msOverflowStyle: 'none', // Hide scrollbar in IE and Edge
          }}
          className="fixed left-0 top-0 z-10 flex h-screen w-full flex-col items-center justify-start  bg-white p-5 md:hidden"
        >
          {/* overlay bg-image sm */}
          <div className="absolute left-0 top-0 -z-10 h-full w-full bg-white opacity-80 md:hidden"></div>
          <div className="absolute left-0 top-0 -z-20 h-full w-full bg-[url('/sm-home-plant.png')] bg-contain bg-center bg-no-repeat md:hidden"></div>
          {/*  */}
          <div className="bg-rose-2000 mb-10 flex w-full justify-end">
            <button onClick={handleMenuClick}>{'XIcon'}</button>
          </div>

          <div className="flex flex-col justify-center p-5">
            <ul className="mb-10 flex flex-col justify-center gap-10">
              <button className="border-b-2 text-4xl hover:border-black">
                Home
              </button>
              <button className="border-b-2 text-4xl hover:border-black">
                About
              </button>
              <button className="border-b-2 text-4xl hover:border-black">
                Products
              </button>
              <button className="border-b-2 text-4xl hover:border-black">
                Contact
              </button>
            </ul>
          </div>

          <div className="bg-rose-3000 pr-5">
            <ul className="flex  justify-center gap-10">
              <li>
                <Link href="/search">
                  <Image
                    src={searchIcon}
                    width={24}
                    height={24}
                    alt="search-icon"
                  />
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <Image
                    src={cartIcon}
                    width={24}
                    height={24}
                    alt="cart-icon"
                  />
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <Image
                    src={userIcon}
                    width={24}
                    height={24}
                    alt="user-icon"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
