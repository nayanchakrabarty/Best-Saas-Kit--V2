"use client"

import { signInAction } from "@/lib/auth-actions"
import { Button, ButtonProps } from "@/components/ui/button"

interface SignInButtonProps extends ButtonProps {
  children?: React.ReactNode
}

export function SignInButton({ children, className, ...props }: SignInButtonProps) {
  return (
    <form action={signInAction}>
      <Button type="submit" className={className} {...props}>
        {children || "Sign In with Google"}
      </Button>
    </form>
  )
}
