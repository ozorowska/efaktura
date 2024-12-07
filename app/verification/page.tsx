import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export default function Verification() {
    return(
        <div className="min-h-screen w-full flex items-center justify-center">
            <Card className="w-[380px] px-5">
                <CardHeader className="text-center">
                   <div className="mb-4 mx-auto flex size-20 items-center justify-center rounded-full bg-green-100">
                    <Mail className="size-12 text-green-500"/>
                   </div>

                   <CardTitle className="text-2xl font-bold">
                    Sprawdź swojego maila!
                   </CardTitle>
                   <CardDescription>
                    Wysłaliśmy na Twój adres link do weryfikacji.
                   </CardDescription>
                </CardHeader>
            
                <CardFooter>
                   <Link 
                   href="/" 
                   className={buttonVariants({
                    className: "w-full",
                   })}
                   >
                    <ArrowLeft/>
                    </Link>
                   
                </CardFooter>
            </Card>
        </div>
    )
}