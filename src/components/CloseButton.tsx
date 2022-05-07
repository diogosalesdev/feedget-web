import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
    return (
        <Popover.Button className="top-5 right-5 absolute text-[#71717A] hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100" title="Fechar formulário feedback">
         <X weight="bold" className="w-4 h-4"/>
        </Popover.Button>
    )
}