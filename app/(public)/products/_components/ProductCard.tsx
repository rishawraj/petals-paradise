import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

type ProductCardParams = {
  title: string;
};

function ProductCard({ title }: ProductCardParams) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Card Title: {title}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src="/bonsai.webp" width={200} height={200} alt="bonsai" />
        <p>Card Content</p>
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
