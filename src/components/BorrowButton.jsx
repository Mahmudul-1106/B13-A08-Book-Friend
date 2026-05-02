"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { checkActiveSession } from "@/app/action/action";

const BorrowButton = ({ isLoggedIn }) => {
  const router = useRouter();

  const handleBorrow = async () => {
    // Check if they are logged out right now
    const stillActive = await checkActiveSession();

    if (!isLoggedIn || !stillActive) {
      toast.error("Please login first.");

      setTimeout(() => {
        router.push("/auth/login");
      }, 1000);
      return;
    }

    toast.success("Borrowing successful!");
  };

  return (
    <button onClick={handleBorrow} className="btn btn-primary mt-10">
      Borrow This Book
    </button>
  );
};

export default BorrowButton;
