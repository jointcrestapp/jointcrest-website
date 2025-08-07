import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] items-center justify-items-center p-8 pb-20 sm:p-20 font-sans gap-16 bg-white">
      <main className="row-start-2 flex flex-col items-center sm:items-start gap-6 text-center sm:text-left">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
          JointCrest
        </h1>
        <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-1 font-mono">
          <p className="tracking-[-.01em]">...Your cooperative and thrift platform</p>
          <p className="tracking-[-.01em]">is coming...</p>
        </div>
      </main>
    </div>
  );
}
