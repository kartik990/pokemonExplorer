import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 shadow-lg text-[#003a70] flex items-center">
      <Image
        src="/images/footerImg.jpg"
        width={1000}
        height={1000}
        alt="footer image"
        className="w-1/2 h-auto "
      />
      <div className="px-4 mx-auto text-center">
        <p className="text-xs md:text-lg">
          © 2025 Pokemon. All Rights Reserved.
        </p>
        <p className="text-xs md:text-sm">Catch &apos;Em All!</p>
      </div>
    </footer>
  );
};

export default Footer;
