import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type {Todo} from "../../types/type"

interface Props {
  todo: Todo
}

export function AccordionTodo({todo}:Props) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full">
        
      <AccordionItem value="todo">
        <AccordionTrigger className="w-full text-left whitespace-normal break-words leading-relaxed ">{todo.title}</AccordionTrigger>
        <AccordionContent className="whitespace-normal break-words leading-relaxed">
          {todo.body!}
        </AccordionContent>
      </AccordionItem>

    </Accordion>
  )
}
