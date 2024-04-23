'use client'

import {useRouter } from "next/navigation"
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        if(firebaseAuth.currentUser) {
            router.push("/main")
        }
    }, [firebaseAuth.currentUser]
    )

    return <div>
        Login
    </div>
}
