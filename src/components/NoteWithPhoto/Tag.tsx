interface TagProps {
  label: string
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="rounded-md bg-black/5 px-2 py-0.5 text-xs font-medium text-muted-foreground">
      {label}
    </span>
  )
}
