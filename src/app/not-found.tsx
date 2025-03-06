import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] bg-[#ffcb05] text-center px-4 pt-10 pb-16">
      <div className="flex justify-center py-6">
        <Image
          src="/images/logo.png"
          width={1000}
          height={400}
          alt="logo"
          className="w-[80%] md:w-[320px] lg:w-[420px] h-auto"
        />
      </div>
      <h2 className="text-3xl font-bold text-gray-900">404 - Not Found</h2>
      <p className="text-lg text-gray-700 mt-2 mb-6">
        Could not find the requested resource.
      </p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
