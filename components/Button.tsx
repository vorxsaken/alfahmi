import type { buttonProps } from "@/lib/types"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { ReactNode } from "react"

const buttonVariant = cva(
    "flex-center text-center",
    {
        variants: {
            variant: {
                default: 'py-1 text-xs relative after:absolute active:scale-105 hover:scale-105',
                full: 'w-full py-2 shadow-bold-lite active:scale-105 hover:scale-105'
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
)

interface ButtonProps extends buttonProps, VariantProps<typeof buttonVariant> { children: ReactNode }

function Button({ children, className, variant, ...props }: ButtonProps) {

    return (
        <button className={cn(buttonVariant({ variant, className }))} {...props}>
            {children}
        </button>
    )
}

export default Button