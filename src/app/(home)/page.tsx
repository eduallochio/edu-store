
import Image from "next/image"
import Carigories from "./components/categories";
import ProductList from "./components/product-list";
import { prismaClient } from "@/lib/prisma";

export default async function Home() {
    const deals = await prismaClient.product.findMany({
        where: {
            discountPercentage: {
                gt: 0,
            },
        },
    });


    return (
        <div>
            <Image
                src="/banner-home-01.png"
                height={0}
                width={0}
                className="h-outo w-full px-5"
                sizes="100vw"
                alt="Até 55% de desconto esse mês!"
            />
            <div className="px-5">
                <Carigories />
            </div>

            <div className="mt-8 px-5">
                <ProductList products={deals} />
            </div>
        </div>
    )

}
