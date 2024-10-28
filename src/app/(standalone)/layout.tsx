import { UserButton } from "@/features/auth/components/user-button";
import Image from "next/image";
import Link from "next/link";

interface StandaloneProps {
  children: React.ReactNode;
}

const StandaloneLayout = ({ children }: StandaloneProps) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center h-[73px]">
            <Link href="/">
            <Image src="/logo5.webp" alt="Logo" height={56} width={154}/>
            
            </Link>
            <UserButton />

        </nav>
        <div className="flex flex-col items-center justify-center py-4">
          {children}
        </div>
      </div>
    </main>
  );
};
export default StandaloneLayout;
