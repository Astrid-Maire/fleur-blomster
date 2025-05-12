import Category from "@/app/components/Category";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Image
          src="/images/shophovedbilledet.png"
          alt="forsidens hovedbilledet for fleur blomster"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
          <h1 className="w-full    font-bold mb-4">Fleur Blomster</h1>
          <h4 className="text-lg sm:text-xl font-medium">
            Trørdvej 67, 2950 Vedbæk, Danmark
          </h4>
        </div>
      </div>

      <div>
        <Category />
      </div>
    </>
  );
}
