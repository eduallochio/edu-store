import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon, Badge } from "lucide-react";
import Image from "next/image";

interface ProductItemProps {
	product: ProductWithTotalPrice
}
const ProductItem = ({ product }: ProductItemProps) => {
	return (
		<div className="flex flex-col gap-4 max-w[156px]">

			<div className=" relative flex bg-accent rounded-lg h-[170px] w-[156px] items-center justify-center">
				<Image
					src={product.imageUrls[0]}
					height={0}
					width={0}
					sizes="100vw"
					className="h-auto max-h-[70%] w-auto max-w-[80%]"
					style={{
						objectFit: "contain",
					}}
					alt={product.name}
				/>

				{product.discountPercentage > 0 && (
					<Badge className="absolut left-3 top-3 px-2 py=[2px]">
						<ArrowDownIcon /> {product.discountPercentage}%
					</Badge>
				)}
			</div>
			<div>
				<p className="overFlow-hiddem text-ellipsis whitespace-nowrap texr-sm">{product.name}</p>
			</div>

			<div className="flex-items-center gap-2">
				{product.discountPercentage > 0 ? (
					<>
						<p className="font-semibold">
							R$ {product.totalPrice.toFixed(2)}</p>

						<p className=" text-xs line-through opacity-75">
							R$ {Number(product.basePrice).toFixed(2)}</p>
					</>
				) : (
					<p className="text-sm font-semibold">
						R$ {product.totalPrice.toFixed(2)}</p>
				)}
			</div>

		</div>
	);
}

export default ProductItem;