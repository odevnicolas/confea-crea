import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "../ui/dialog"

interface ModalProps {
  title: React.ReactNode
  children: React.ReactNode

  modal?: boolean
  description?: string
  defaultOpen?: boolean
  onOpenChange?: () => void
}

export const Modal = ({ title, description, children }: ModalProps) => {
  return (
    <DialogContent className="flex flex-col md:min-h-[50rem] md:min-w-[75rem]">
      <DialogHeader>
        <DialogTitle>
          {title}
        </DialogTitle>
        <DialogDescription>
          {description}
        </DialogDescription>
      </DialogHeader>
      {children}
    </DialogContent>
  )
}