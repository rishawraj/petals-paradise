'use client';

import cartIcon from '@/components/icons/cartIcon.svg';
import leafLogoIcon from '@/components/icons/leafLogoIcon.svg';
import searchIcon from '@/components/icons/searchIcon.svg';
import userIcon from '@/components/icons/userIcon.svg';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MenuIcon, Package, Sprout, Truck, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Footer from './_components/Footer';
import Testimonials from './_components/Testimonials';

export default function Home() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [scrollDisabled, setScrollDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMenuClick = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
    setScrollDisabled(!scrollDisabled);
    document.body.style.overflow = scrollDisabled ? 'auto' : 'hidden';
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // show navbar after scrolling down 100px (100vh)
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* <BreakPoint /> */}

      <div className="flex min-h-screen flex-col pb-5 sm:flex-row">
        {/* navbar start */}
        <div className="border-green-5000 border- absolute  mt-5 h-12 w-full  bg-transparent xl:mt-8 ">
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
              {<MenuIcon />}
            </button>
          </div>
        </div>

        {isVisible && !scrollDisabled && (
          <motion.div
            initial={{ opacity: 0, y: '-20px' }}
            whileInView={{ opacity: 1, y: '0' }}
            {...{
              className:
                'fixed z-20 flex h-12 w-full items-center bg-gray-100 bg-opacity-15 bg-clip-padding py-5 backdrop-blur-sm backdrop-filter ',
            }}
            // className="fixed z-20 flex h-12 w-full items-center bg-gray-100 bg-opacity-15 bg-clip-padding py-5 backdrop-blur-sm backdrop-filter "
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
                {<MenuIcon />}
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
              <button onClick={handleMenuClick}>{<XIcon />}</button>
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
        {/* navbar end */}

        {/* text main */}
        <div className="bg-red-2000 bg-rose-2000 bg-red-5000 mt-16 flex min-h-full w-full flex-[3] flex-col items-start  justify-center pl-[6%] ">
          {/* overlay bg-image sm */}
          <div className="absolute left-0 top-0 -z-10 h-full w-full bg-white opacity-80 md:hidden"></div>
          <div className="absolute left-0 top-0 -z-20 h-full w-full bg-[url('/sm-home-plant.png')] bg-contain bg-center bg-no-repeat md:hidden"></div>
          {/*  */}

          <p className="mt-5 text-sm font-semibold text-muted-foreground opacity-100">
            INDOOR PLANTS
          </p>

          <h1 className="mt-2 text-balance  pr-2 text-3xl font-medium sm:text-4xl md:text-5xl xl:text-7xl">
            We help you keep the world safe with
            <span className="text-primary"> plants</span>
          </h1>

          <p className="my-10 w-1/2 text-lg text-muted-foreground">
            Find your dream plant for your home decoration with us, and we will
            make it happen
          </p>

          {/* buttons */}

          <div className=" flex gap-4">
            <Button className="rounded-none" size="lg">
              <Link href="/products">Explore Now</Link>
            </Button>
            <Button className="rounded-none" size="lg" variant="outline">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>

          {/* cards */}
          <div className=" bg-amber-4000 *:bg-pink-3000 mt-28  flex w-full flex-wrap gap-5">
            <Link href="/" className="group">
              <div className="bg-green-3000 relative flex min-h-48 min-w-48 flex-col items-center justify-center bg-slate-200">
                <Image
                  src="/img1.png"
                  alt="plant"
                  fill={true}
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </div>
              <p className="mt-2 text-lg font-semibold">Microdasys</p>
              <p className="text-sm font-semibold text-gray-600 group-hover:underline">
                shop now +{' '}
              </p>
            </Link>

            {/*  */}
            <Link href="/" className="group">
              <div className="bg-green-3000 relative  flex  min-h-48 min-w-48 flex-col items-center justify-center bg-slate-200">
                <Image
                  src="/bonsai.webp"
                  alt="plant"
                  fill={true}
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </div>
              <p className="mt-2 text-lg font-semibold">Bonsai</p>
              <p className="text-sm font-semibold text-gray-600 group-hover:underline">
                shop now +{' '}
              </p>
            </Link>

            {/*  */}
            <Link href="/" className="group">
              <div className="bg-green-3000 relative  flex  min-h-48 min-w-48 flex-col items-center justify-center bg-slate-200">
                <Image
                  src="/indoor-plant-2.png"
                  alt="plant"
                  fill={true}
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
              <p className="mt-2 text-lg font-semibold">Snake Leaves</p>
              <button className="text-sm font-semibold text-gray-600 group-hover:underline">
                shop now +{' '}
              </button>
            </Link>
            {/*  */}
          </div>

          {/* image and layer */}

          {/*  */}
        </div>

        {/* plant image */}
        <div className="bg-slate-2000 bg-slate-2000 hidden min-h-screen w-full flex-[2] bg-gradient-to-bl from-slate-100 to-slate-300 md:block">
          <div className="relative h-full w-full">
            <Image
              src={'/image-2.png'}
              fill={true}
              alt={'plant'}
              style={{ objectFit: 'contain', padding: '10px' }}
            />
          </div>
        </div>
      </div>

      {/* features */}
      <div className="mt-10 flex max-w-full flex-wrap justify-center gap-5">
        <div className="bg-green-70-0 bg-rose-1000 flex max-w-md items-center justify-start gap-5 p-5 ">
          <div className=" rounded-br-3xl rounded-tl-3xl border bg-green-800 p-3">
            <Package className="h-20 w-20 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Best Packaging</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="bg-green-70-0 bg-rose-1000 flex max-w-md items-center justify-start gap-5 p-5 ">
          <div className=" rounded-br-3xl rounded-tl-3xl border bg-green-800 p-3">
            <Sprout className="h-20 w-20 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Early Sprouts</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="bg-green-70-0 bg-rose-1000 flex max-w-md items-center justify-start gap-5 p-5 ">
          <div className=" rounded-br-3xl rounded-tl-3xl border bg-green-800 p-3">
            <Truck className="h-20 w-20 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Fast Delivery</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>

      {/* testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </>
  );
}
