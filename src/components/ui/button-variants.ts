import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
        // ── Grajo Estudio brand variants ──────────────────────────────
        // Primary: orange bg + neo-shadow. Use for main CTAs on light backgrounds.
        // Note: white (#FFFDF9) on orange (#E8724A) = 2.9:1 — acceptable for large/bold text only.
        "grajo-primary":
          "bg-orange text-white border-earth [box-shadow:4px_4px_0_var(--earth)] font-semibold hover:bg-orange-hover hover:translate-x-[2px] hover:translate-y-[2px] hover:[box-shadow:2px_2px_0_var(--earth)] focus-visible:ring-orange-accessible/50",
        // Secondary: white bg + neo-shadow. Use alongside primary.
        "grajo-secondary":
          "bg-white text-earth border-earth [box-shadow:4px_4px_0_var(--earth)] font-semibold hover:bg-sand hover:translate-x-[2px] hover:translate-y-[2px] hover:[box-shadow:2px_2px_0_var(--earth)] focus-visible:ring-orange-accessible/50",
        // Ghost: transparent, arrow suffix, used for inline CTAs.
        "grajo-ghost":
          "bg-transparent border-transparent text-earth px-0 hover:text-orange focus-visible:ring-orange-accessible/50",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
        // Grajo pill size — matches .btn base from HTML prototype
        pill: "h-10 gap-2 rounded-[var(--radius-pill)] px-7 text-[0.95rem] font-semibold tracking-[0.01em]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
