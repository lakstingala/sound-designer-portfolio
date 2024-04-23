'use client';

import { browserLocalPersistence, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from 'next/navigation'
import { firebaseAuth } from "@/dataLayer/initFirebase";

export default function Login() {
  const router = useRouter();

  const login = async () => {
    await firebaseAuth.setPersistence(browserLocalPersistence);

    const provider = new GoogleAuthProvider();
  
    signInWithPopup(firebaseAuth, provider)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        router.push('/admin/main')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <div className="flex h-screen bg-gray-100 bg-gray-900 p-2">
      <div className="m-auto">
        <div className="flex flex-col content-center justify-around">
          <h1 className="text-6xl uppercase font-extrabold text-center">Hey there</h1>

          <button className="m-5" onClick={login} >Identify yourself</button>
          
        </div>
      </div>
    </div>
  )
}