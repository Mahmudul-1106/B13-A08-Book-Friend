"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { checkActiveSession } from "@/app/action/action";

const UpdateProfilePage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    // Check if user are logged out right now
    const stillActive = await checkActiveSession();

    if (!stillActive) {
      toast.error("Please login again.", {
        duration: 2000,
      });
      setTimeout(() => {
        router.push("/auth/login");
      }, 3000);
      return;
    }

    await authClient.updateUser({
      image: imageUrl,
      name: name,
    });

    // 1. Logic to save to your database would go here (e.g., fetch PATCH request)
    console.log("Saving to database...", { name, imageUrl });

    // 2. Show success message
    toast.success("Profile Updated Successfully!");

    // 3. Wait a moment and redirect back to the profile page
    setTimeout(() => {
      // router.push navigates the user back to the profile route
      router.push("/");

      // router.refresh forces Next.js to fetch the latest data from the server
      router.refresh();
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center mt-10 bg-base-100 p-4">
      <div className="card w-full max-w-md shadow-2xl bg-base-200 p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Update Profile</h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black font-semibold">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Your new name"
              className="input input-bordered bg-white text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-black font-semibold">
                Profile Image URL
              </span>
            </label>
            <input
              type="url"
              placeholder="https://..."
              className="input input-bordered bg-white text-black"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Update Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
