import Image from "next/image";

export default function Abledninghovedbilleder() {
  return (
    <div>
      <div>
        <Image
          src="/images/blomster1.jpg"
          alt="Billeder fra Fleur blomsters butik"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div>
        <Image
          src="/images/blomster3.jpg"
          alt="Billeder fra Fleur blomsters butik"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div>
        <Image
          src="/images/blomster2.jpg"
          alt="Billeder fra Fleur blomsters butik"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div>
        <Image
          src="/images/blomster4.jpg"
          alt="Billeder fra Fleur blomsters butik"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}
