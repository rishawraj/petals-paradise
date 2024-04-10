import cartIcon from '@/components/icons/cartIcon.svg';
import leafLogoIcon from '@/components/icons/leafLogoIcon.svg';
import searchIcon from '@/components/icons/searchIcon.svg';
import userIcon from '@/components/icons/userIcon.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* <BreakPoint /> */}
      <div className="flex ">
        {/* navbar */}
        <div className=" border-green-5000 border-  absolute mt-5 h-12 w-full bg-transparent xl:mt-8">
          <div className="border-rose-4000 border- mx-auto flex w-full justify-between">
            <ul className="border-amber-4000 border- flex w-3/5 justify-evenly px-5">
              <li className="flex gap-1">
                <Image
                  src={leafLogoIcon}
                  height={24}
                  width={24}
                  alt="leaf-logo-icon"
                />
                <span className="font-bold">Petals</span>
              </li>
              <div className=" bg-red-2000 flex w-2/3 justify-evenly font-semibold text-muted-foreground">
                <li className="text-primary">Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact</li>
              </div>
            </ul>
            <ul className="border-purple-4000 border- flex w-2/5 justify-end gap-5 pr-[5%] ">
              <li>
                <Image
                  src={searchIcon}
                  width={24}
                  height={24}
                  alt="search-icon"
                />
              </li>
              <li>
                <Image src={cartIcon} width={24} height={24} alt="cart-icon" />
              </li>
              <li>
                <Image src={userIcon} width={24} height={24} alt="user-icon" />
              </li>
            </ul>
          </div>
        </div>

        {/* text main2 */}
        <div className="bg-red-2000 bg-rose-2000  mt-16 flex min-h-full w-full flex-[3] flex-col items-start justify-center pl-[6%] ">
          <p className="text-sm font-semibold text-muted-foreground">
            INDOOR PLANTS
          </p>

          <h1 className=" mt-2 text-3xl font-medium  sm:text-5xl xl:text-7xl">
            We help you the
            <strong className="mt-4 block font-medium">
              {' '}
              world safe with <span className="text-green-800">
                plants
              </span>{' '}
            </strong>
          </h1>

          <p className="my-10 w-1/2 text-lg text-muted-foreground">
            Find your dream plant for your home decoration with us, and we will
            make it happen
          </p>
          {/* buttons */}

          <div className=" flex gap-4">
            <button className="bg-green-900 px-5 py-3 text-white">
              Explore Now
            </button>
            <button className="border-2 px-5 py-3 text-green-900 hover:border-green-900">
              Learn More
            </button>
          </div>

          {/* cards */}
          <div className="bg-green-4000 bg-amber-4000 mt-28 flex  w-full flex-wrap gap-2">
            <div className="border- border-blac bg-slate-4000 ">
              <div className="bg-green-3000 relative mr-5 flex  min-h-40 min-w-40 flex-col items-center justify-center bg-slate-200">
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
              <p className="text-sm font-semibold text-gray-600">shop now + </p>
            </div>
            {/*  */}
            <div className="border- border-blac bg-slate-4000 ">
              <div className="bg-green-3000 relative mr-5 flex  min-h-40 min-w-40 flex-col items-center justify-center bg-slate-200">
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
              <p className="text-sm font-semibold text-gray-600">shop now + </p>
            </div>
            {/*  */}
            <div className="border- border-blac bg-slate-4000 ">
              <div className="bg-green-3000 relative mr-5 flex  min-h-40 min-w-40 flex-col items-center justify-center bg-slate-200">
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
              <p className="text-sm font-semibold text-gray-600">shop now + </p>
            </div>
            {/*  */}
          </div>

          {/*  */}
        </div>

        {/* image */}
        <div className="bg-slate-2000 bg-slate-2000 min-h-screen w-full flex-[2] bg-gradient-to-bl from-slate-100 to-slate-300">
          <div className="bg-rose-2000 bg-slate-2000 relative flex h-full w-full items-center justify-center">
            <Image
              src="/image-2.png"
              fill={true}
              alt="plant image for home page"
              style={{ objectFit: 'contain', padding: '12%' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
