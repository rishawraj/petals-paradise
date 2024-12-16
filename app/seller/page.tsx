import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/lib/formatters';
import Link from 'next/link';
import NavBar from '../_components/NavBar';

export default function SellerHomePage() {
  return (
    <>
      <NavBar />
      <div className="container w-full">
        <h1 className="mt-5 text-3xl font-bold">Seller</h1>
        <div className=" my-5 flex gap-5">
          <Card className="relative w-1/3">
            <CardHeader>
              <CardTitle>Total Products</CardTitle>
              <CardContent>50</CardContent>
            </CardHeader>
          </Card>
          <Card className="relative w-1/3">
            <CardHeader>
              <CardTitle>Total Sales</CardTitle>
              <CardContent>{formatCurrency(5000)}</CardContent>
            </CardHeader>
          </Card>
          <Card className="relative w-1/3">
            <CardHeader>
              <CardTitle>Total Customers</CardTitle>
              <CardContent>5</CardContent>
            </CardHeader>
          </Card>
        </div>

        <div className="mx-auto flex w-1/2 flex-col gap-2">
          {/* <Button>Go to Dashboard</Button> */}
          <Button>
            <Link href="/seller/createProduct">create a Product</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
