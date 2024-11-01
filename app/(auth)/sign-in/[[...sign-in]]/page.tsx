import { SignIn } from "@clerk/nextjs";
import { Card } from "@/components/ui/card";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6">
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 mt-1">Sign in to your account</p>
        </div>
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary: 
                "bg-primary hover:bg-primary/90 text-primary-foreground",
              card: "shadow-none",
              headerTitle: "hidden",
              headerSubtitle: "hidden",
              socialButtonsBlockButton: 
                "border-gray-300 hover:bg-gray-50 text-gray-900",
              formFieldInput: 
                "h-10 px-3 rounded-md border border-input bg-background",
              footerActionLink: "text-primary hover:text-primary/90",
            },
          }}
          redirectUrl="/dashboard"
          signUpUrl="/sign-up"
        />
      </Card>
    </div>
  );
}