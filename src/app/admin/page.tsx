'use client'

import { firebaseAuth } from "@/dataLayer/initFirebase";
import {useRouter } from "next/navigation"
import { onAuthStateChanged } from 'firebase/auth';

export default function Home() {
    const router = useRouter();

    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        router.push('/admin/main');
      } else {
        router.push('/admin/login');
      }
    });
  
    return (
      <main className="flex items-center justify-center h-screen flex-col">
        <h1 className="text-3xl font-bold ">
          Loading....
        </h1>
      </main>
    )
}
