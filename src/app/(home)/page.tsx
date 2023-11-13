import Carigories from "./components/categories";
import ProductList from "./components/product-list";
import { prismaClient } from "@/lib/prisma";
import PromoBanner from "./components/promo-banner";
import SectionTitle from "./components/selection-title";

export default async function Home() {
    const deals = await prismaClient.product.findMany({
        where: {
            discountPercentage: {
                gt: 0,
            },
        },
    });

    const keyboards = await prismaClient.product.findMany({
        where: {
            category: {
                slug: "keyboards",
            },
        },
    });


    return (
        <div>
            <PromoBanner
                src="/banner-home-01.png"
                alt="Até 55% de desconto esse mês!"
            />
            <div className="px-5">
                <Carigories />
            </div>

            <div className="mt-8">
                <SectionTitle>Ofertas</SectionTitle>
                <ProductList products={deals} />
            </div>

            <PromoBanner
                src="/banner-home-02.png"
                alt="Até 55% de desconto em mouses!"
            />

            <div className="mt-8">
                <SectionTitle>Teclados</SectionTitle>
                <ProductList products={keyboards} />
            </div>
        </div>
    )

}
