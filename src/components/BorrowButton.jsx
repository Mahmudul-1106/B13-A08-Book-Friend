"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { checkActiveSession } from "@/app/action/action";

const BorrowButton = () => {
  const router = useRouter();

  const handleBorrow = async () => {
    // 1. Clear any existing toasts immediately
    toast.dismiss();

    try {
      // 2. Only call the session check ONCE
      const stillActive = await checkActiveSession();

      if (!stillActive) {
        toast.error("Please login again!", {
          id: "login-toast", // This ID strictly enforces only ONE toast
          duration: 2000,
        });

        // 3. Navigate after a short delay
        setTimeout(() => {
          router.push("/auth/login");
        }, 1000);
        return;
      }

      toast.success("Borrowing successful!");
    } catch (err) {
      console.error("Borrowing Error:", err);
      toast.error("Something went wrong.");
    }
  };

  return (
    <button onClick={handleBorrow} className="btn btn-primary mt-10">
      Borrow This Book
    </button>
  );
};

export default BorrowButton;
