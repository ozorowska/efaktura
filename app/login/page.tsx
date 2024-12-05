import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "../utils/auth";

export default function Login(){
    return(
       <>
        
        <div className= "flex h-screen w-full items-center justify-center px-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">
                        Logowanie
                    </CardTitle>
                    <CardDescription>
                        Zaloguj się do swojego konta wpisując swój adres e-mail poniżej
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={async (formData) => {
                     "use server"
                    await signIn("nodemailer", formData ) }}
                     className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                        <Label>E-mail</Label>
                            <Input name="email" type="email" required placeholder="uzykowink@email.com"></Input>
                        
                        </div>
                        <div>
                        <Button>Zaloguj</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
        </>);
    }
