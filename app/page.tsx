import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 font-sans gap-8 bg-white text-center">
      {/* Logo and Brand Name */}
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/logo.png"
          alt="JointCrest Logo"
          width={170}
          height={170}
          priority
        />
        <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight text-gray-900">
          JointCrest
        </h1>
      </div>

      {/* Description */}
      <div className="text-lg sm:text-xl text-gray-700 leading-relaxed space-y-2 font-mono">
        <p className="tracking-[-.01em]">...Your cooperative and thrift platform</p>
        <p className="tracking-[-.01em]">is coming...</p>
      </div>
    </div>
  );
}
