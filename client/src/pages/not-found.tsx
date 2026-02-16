import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center space-y-4 text-center p-8">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
          <AlertCircle className="w-10 h-10 text-muted-foreground" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-foreground">404 - Page Not Found</h1>
        <p className="text-muted-foreground max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/">
          <Button className="mt-6">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
