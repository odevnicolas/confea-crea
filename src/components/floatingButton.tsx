'use client'

import { Download, FilePlus2, Filter, Minus, Plus } from "lucide-react";
import { useState } from "react";

interface IProps {
  setOpenFilter: (value: boolean) => void;
  handlePrint: () => void;
}

export function Fab({ setOpenFilter, handlePrint }: IProps) {
  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <div className="min-[768px]:hidden flex flex-col fixed size-[56px] -bottom-16 right-0 m-9 z-50 group hover:cursor-pointer" data-expanded={expanded}>
      <div className="flex flex-col-reverse relative [&>div]:transition-all">
        <div
          onClick={() => {}}
          className="flex absolute justify-center items-center text-[50px] size-[56px] text-white rounded-full bg-[#00509B] shadow-none bottom-0 group-data-[expanded=true]:bottom-[216px] group-data-[expanded=true]:shadow-[0px_0px_8px_-2px_#4f4f4f6b] opacity-0 group-data-[expanded=true]:opacity-100">
          <FilePlus2 />
        </div>
        <div
          onClick={() => handlePrint()}
          className="flex absolute justify-center items-center text-[50px] size-[56px] text-[#64646D] rounded-full bg-white shadow-none bottom-0 group-data-[expanded=true]:bottom-[144px] group-data-[expanded=true]:shadow-[0px_0px_8px_-2px_#4f4f4f6b] opacity-0 group-data-[expanded=true]:opacity-100">
          <Download />
        </div>
        <div
          onClick={() => setOpenFilter(true)}
          className="flex absolute justify-center items-center text-[50px] size-[56px] text-[#64646D] rounded-full bg-white shadow-none bottom-0 group-data-[expanded=true]:bottom-[72px] group-data-[expanded=true]:shadow-[0px_0px_8px_-2px_#4f4f4f6b] opacity-0 group-data-[expanded=true]:opacity-100">
          <Filter />
        </div>
        <div
          onClick={() => setExpanded(!expanded)}
          className="flex absolute justify-center items-center text-[50px] size-[56px] text-white rounded-full shadow-[0px_0px_8px_-2px_#4f4f4f6b] transition-colors bg-brand-50 group-data-[expanded=true]:bg-[#00508B]">
          {expanded ? <Minus /> : <Plus />}
        </div>
      </div>
    </div>
  )
}