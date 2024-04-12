'use client';

import useWindowdimension from './useWindowDimensions';

export default function BreakPoint() {
  const { height, width } = useWindowdimension();

  return (
    <div className="fixed top-0 z-50 flex h-8 w-full justify-center gap-5 bg-purple-500 sm:bg-red-500 md:bg-green-500 lg:bg-amber-500 xl:bg-orange-500 2xl:bg-pink-500">
      <p>{width && width}</p>
      {width && width < 640 && <p>very small purple</p>}
      {width && width >= 640 && width < 768 && <p>sm red</p>}
      {width && width >= 768 && width < 1024 && <p>md: green</p>}
      {width && width >= 1024 && width < 1280 && <p>lg: amber</p>}
      {width && width >= 1280 && width < 1536 && <p>xl: orange</p>}
      {width && width >= 1536 && width > 1536 && <p>2xl: pink</p>}
    </div>
  );
}
