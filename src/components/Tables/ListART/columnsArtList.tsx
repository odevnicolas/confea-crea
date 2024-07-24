/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { Dialog, DialogContent } from '../../../ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../../../ui/dropdown-menu';
// import { TArtDataModel } from '@/models/arts/art-data.model';
import { ColumnDef } from '@tanstack/react-table';
import { CopyPlus, DollarSign, FolderSearch, MoreVertical, PrinterIcon } from 'lucide-react';
import { useState } from 'react';
// import { toast } from 'sonner';
// import GenerateBoleto from '../../GenerateBoleto';
// import GenerateRascunho from '../../GenerateRascunho';
// import { ModalDetailsArt } from '../../modalDetailsArt';

export const columnsArtList: ColumnDef<any>[] = [
  {
    accessorKey: 'id',
    header: 'Numero',
  },
  {
    accessorKey: 'detail',
    header: 'Detalhe',
    cell: ({ row }) => {
      return (
        <div className="flex w-44 gap-1 text-global-gray-70">
          <span className="text-global-gray-100 text-font-size-base/R">
            Tipo:
          </span>
          <p className="flex w-full">
            {row.getValue('detail')}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: 'state',
    header: 'Estado',
    cell: ({ row }) => {
      return (
        <div className="flex w-20 gap-1 text-global-gray-70">
          <span className="text-global-gray-100 text-font-size-base/R">
            Tipo:
          </span>
          <p className="flex w-full">
            {row.getValue('state')}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Análise',
    cell: ({ row }) => {
      return <div>{row.getValue('status')}</div>;
    },
  },
  {
    accessorKey: 'paymentType',
    header: 'Boleto',
    cell: ({ row }) => {
      return (
        <div className="">
          {row.getValue('paymentType')}
        </div>
      );
    },
  },
  {
    id: 'paid',
    accessorKey: 'paid',
    header: 'Pagamento',
  },
  {
    accessorKey: 'createdAt',
    header: 'Cadastro',
  },
  {
    accessorKey: 'details',
    header: 'Todos os detalhes',
    cell: ({ row }) => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [generateBoletoModal, setGenerateBoletoModal] = useState(false);
      const [generateRascunhoModal, setGenerateRascunhoModal] = useState(false);

      return (
        <DropdownMenu>
          <DropdownMenuTrigger className='ml-5'>
            <MoreVertical className='size-6 hover:text-brand-50 duration-75 transition-colors' />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='rounded-[2px] py-3 '>
            <div
              onClick={() => setGenerateRascunhoModal(true)}
              className='w-full h-8 flex items-center px-3 cursor-pointer hover:bg-[#ededed] transition-colors duration-100'>
              <PrinterIcon
                strokeWidth={3}
                className='text-global-gray-70 size-4' />
              <p className='text-global-gray-70 ml-3 text-sm'>Imprimir ART</p>
            </div>
            <div
              onClick={() => setGenerateBoletoModal(true)}
              className='w-full h-8 flex items-center px-3 cursor-pointer hover:bg-[#ededed] transition-colors duration-100'>
              <DollarSign
                strokeWidth={3}
                className='text-global-gray-70 size-4' />
              <p className='text-global-gray-70 ml-3 text-sm'>Gerar boleto</p>
            </div>
            <div
              onClick={() => null}
              className='w-full h-8 flex items-center px-3 cursor-pointer hover:bg-[#ededed] transition-colors duration-100'>
              <CopyPlus
                strokeWidth={3}
                className='text-global-gray-70 size-4' />
              <p className='text-global-gray-70 ml-3 text-sm'>Clonar ART</p>
            </div>
            <div className='border-t mt-2'>
              <div
                onClick={() => {
                  setIsModalOpen(true)
                }}
                className='w-full h-8 flex items-center mt-1 px-3 cursor-pointer hover:bg-[#ededed] transition-colors duration-100'>
                <FolderSearch
                  strokeWidth={3}
                  className='text-global-gray-70 size-4' />
                <p className='text-global-gray-70 ml-3 text-sm'>Ver detalhes</p>
              </div>
            </div>
            <Dialog
              onOpenChange={setIsModalOpen}
              open={isModalOpen}>
              {/* <ModalDetailsArt
                numeroArt={row.getValue('id')}
              /> */}
            </Dialog>

            <Dialog
              onOpenChange={setGenerateBoletoModal}
              open={generateBoletoModal}>
              <DialogContent className='min-w-[80%] min-h-[40%]'>
                {/* <GenerateBoleto
                  artNumber={row.getValue('id')}
                /> */}
              </DialogContent>
            </Dialog>

            <Dialog
              onOpenChange={setGenerateRascunhoModal}
              open={generateRascunhoModal}>
              <DialogContent className='min-w-[80%] min-h-[40%]'>
                {/* <GenerateRascunho
                  artNumber={row.getValue('id')}
                /> */}
              </DialogContent>
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
];
