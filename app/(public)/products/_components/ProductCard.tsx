import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { formatCurrency } from '@/lib/formatters';
import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
  id: string;
  seller_id: string;
  name: string;
  price: number;
  quantity: number;
  category_id: string;
  image_url: string | null;
};

function ProductCard({
  id,
  seller_id,
  name,
  price,
  quantity,
  category_id,
  image_url,
}: ProductCardProps) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>
          <Link href={`/products/${id}`}>{name}</Link>
        </CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="">
        <div className=" relative h-40 w-full">
          <Image
            src={image_url || '/image-not-available.jpg'}
            // width={200}
            // height={200}
            fill={true}
            style={{ objectFit: 'cover' }}
            alt={name}
          />
        </div>
        <p>{formatCurrency(price / 100)}</p>
        <p className="text-sm text-red-500">left: {quantity}</p>
      </CardContent>
      <CardFooter className="flex w-full  gap-2">
        <Button className="w-full" variant={'secondary'}>
          Add to Cart
        </Button>
        <Button>Buy</Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
