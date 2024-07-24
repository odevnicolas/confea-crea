'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../ui/alertTooltip"
import { Button } from "../../../ui/button"
import { Dialog, DialogTrigger } from "../../../ui/dialog"
import { Input } from "../../../ui/input"
// import { useArtListStore } from "@/stores/artFilters"
import { ClipboardPen, Download, Filter, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Fab } from "../../floatingButton"
// import { ModalFilters } from "../../modalFilters"

export const TableAction = ({ handlePrint, handleDownloadModal }: { handlePrint: () => void, handleDownloadModal: (asOpen: boolean) => void }) => {
  const [openFilters, setOpenFilters] = useState<boolean>(false)
  const [filterCount, setFilterCount] = useState<number>(0)
  // const [artFilters, clearFilter, artAdrres] = useArtListStore(state => [
  //   state.artFilter,
  //   state.action.clearArtFilter,
  //   state.artAdrres
  // ])

  // useEffect(() => {
  //   const filledItemsCount = Object.values(artFilters).filter(value => value !== "").length;
  //   setFilterCount(filledItemsCount)
  // }, [artFilters, artAdrres, clearFilter]);

  return (
    <div className="flex gap-4 w-full justify-between p-2.5">
      <div className="flex items-center gap-2 w-full">
        <div className="relative pr-4 border rounded-[2px] flex items-center w-4/5">
          <Input
            placeholder="Buscar ART ( Número da ART )"
            className="w-full border-0 h-9 disabled:cursor-not-allowed disabled:opacity-50 rounded"
          />
          
        </div>

        <div className="md:flex items-center gap-x-2 h-full hidden mr-8">
          <Dialog open={openFilters} onOpenChange={setOpenFilters}>
            {filterCount === 0 && (
              <DialogTrigger
                onClick={() => {
                  setOpenFilters(true)
                }}
                className="border h-11 flex items-center justify-center w-12 rounded-sm hover:bg-blue-400/40 hover:rounded-sm text-blue-700">
                <Filter className="size-4" />
              </DialogTrigger>
            )}
            {/* <ModalFilters modalOppen={openFilters} /> */}
          </Dialog>

          {filterCount > 0 && (
            <div
              onClick={() => setOpenFilters(true)}
              className="w-32 h-9 bg-white border border-global-gray-30 rounded-[2px] flex items-center justify-between px-4 cursor-pointer">
              <Filter className="size-4 text-blue-700" />
              <p className="text-brand-50 text-sm font-medium">{filterCount} filtro</p>

              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        // clearFilter();
                      }}
                      className="flex items-center justify-center w-4 h-4 rounded-[2px] hover:bg-brand-50/10">
                      <X
                        strokeWidth={3}
                        className="size-4 text-[#C4C4C4] hover:text-brand-50" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Limpar filtros</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )}
        </div>
      </div>

      <Fab setOpenFilter={setOpenFilters} handlePrint={handlePrint} />
      {/* <div className="hidden min-[768px]:flex gap-4">
        <Actions handleDownloadModal={handleDownloadModal} />
      </div> */}
    </div>
  )
}

const Actions = ({ handleDownloadModal }: { handleDownloadModal: (asOpen: boolean) => void }) => {
  return (
    <div className="flex mr-4 gap-x-4">
      <Button
        onClick={() => handleDownloadModal(true)}
        variant="outline"
        className="text-brand-50 font-normal h-11 hover:bg-brand-50/10 hover:text-brand-50">
        <Download className="mr-2 h-4 w-4 text-brand-50" /> Baixar relatório
      </Button>

      <Button
        className="font-normal h-11 rounded-[2px]"
        asChild>
        {/* <Link href="/cadastrar">
          <ClipboardPen className="mr-2 h-4 w-4" /> Cadastrar ART
        </Link> */}
      </Button>
    </div>
  )
}