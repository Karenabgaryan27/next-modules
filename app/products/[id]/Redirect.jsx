"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ButtonDemo } from "@/components/index";

export default function Redirect() {
    const router = useRouter();

    return (
        <div>
            <ButtonDemo variant="link" name="Back"   onClick={() => router.back()}/>
        </div>
    );
}
