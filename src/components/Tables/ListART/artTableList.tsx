'use client';

import { Dialog, DialogContent } from '../../../ui/dialog';

// import { useArtListStore } from '@/stores/artFilters';
// import { parseArtListDataModel } from '@/utils/parseArtListDataModel';
import { useState } from 'react';
// import { useReactToPrint } from 'react-to-print';
// import DonwloadReports from '../../downloadReports';
import { columnsArtList } from './columnsArtList';
import { DatagetFiTableArt } from './data-table-art';
// import { TableAction } from './table-actions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { Download, Plus } from 'lucide-react';

const dataList = [
  {
    "id": "ART123456",
    "detail": "Instalação Elétrica",
    "status": "Aprovado",
    "paymentType": "Boleto",
    "paid": 'Pago',
    "createdAt": "2023-07-01",
    "details": "Detalhes adicionais aqui"
  },
  {
    "id": "ART654321",
    "detail": "Construção Civil",
    "status": "Em análise",
    "paymentType": "Cartão",
    "paid": 'Não pago',
    "createdAt": "2023-06-15",
    "details": "Mais detalhes aqui"
  }
]

interface ArtTableProps {
  artsPendentesData?: [] | any[];
  artsRegistradasData?: [] | any[];
  artsTodasData?: [] | any[];
  artsVinculadasData?: [] | any[];
  page: 'home' | 'art';
  activeTab: string;
  loading?: boolean;
  setTableActive: (newState: string) => void;
}

export function ArtTableList({
  setTableActive,
  activeTab,
  loading,
}: ArtTableProps) {
  const [loaded] = useState<boolean>(true);
  const defaultActiveTab = activeTab;

  return (
    <div>
      <div className='flex justify-between items-center mb-2'>
        <p>Resumo de ARTs</p>
        <div className='flex gap-4'>
          <button className='flex items-center gap-2 bg-transparent text-[#187BF0] px-4 py-1 border-[#187BF0] border-2'>
				    <Download size={14} className='text-blue-500'/>
            Baixar relatório
          </button>
          <button className='flex items-center gap-2 bg-[#187BF0] px-4 py-1 text-white'>
            <Plus size={14} className='text-white'/>
            Nova ART
          </button>
        </div>
      </div>
      <Tabs
        defaultValue={defaultActiveTab}
        className="w-full h-full bg-white dark:bg-[#20242C52]"
        onValueChange={(value: any) => setTableActive(value)}
        value={activeTab}
      >
        <div className="flex items-start rounded-sm dark:bg-[#20242C52] flex-col lg:w-auto lg:ml-auto">
          {/* <Dialog
            onOpenChange={setIsDownloadModalOpen}
            open={isDownloadModalOpen}>
            <DialogContent className='min-w-[90%] max-h-[80%]'>
              <DonwloadReports
                actualPageIndex={actualPageIndex}
                actualPageSize={actualPageSize}
                loading={loading || false}
                activeTab={activeTab}
                artsPendentesData={artsPendentesData}
                artsRegistradasData={artsRegistradasData}
                artsTodasData={artsTodasData}
                setIsDownloadModalOpen={setIsDownloadModalOpen}
                artsVinculadasData={artsVinculadasData}
                page={page}
              /> 
            </DialogContent>
          </Dialog> */}
          {/* <TableAction
            handleDownloadModal={setIsDownloadModalOpen}
            handlePrint={handlePrint} /> */}
          <TabsList className="flex items-start overflow-x-auto scrollbar-hide">
            <TabsTrigger
              value="registered"
              className="border-transparent p-4 rounded-full xl:rounded-none data-[state=active]:text-font-size-base/M data-[state=active]:border-brand-50 data-[state=active]:bg-brand-50 data-[state=active]:text-blue-500 xl:data-[state=active]:text-brand-50 xl:data-[state=active]:border-b-2"
            >
              ARTs ( Registradas )
            </TabsTrigger>
            <TabsTrigger
              value="pending"
              className={`border-transparent p-4 rounded-full xl:rounded-none data-[state=active]:font-medium data-[state=active]:border-brand-50 data-[state=active]:bg-brand-50 data-[state=active]:text-blue-500 xl:data-[state=active]:text-brand-50 xl:data-[state=active]:border-b-2`}
            >
              ARTs ( Elaboradas / Pendentes )
            </TabsTrigger>
            <TabsTrigger
              value="all"
              className="border-transparent p-4 rounded-full xl:rounded-none data-[state=active]:text-font-size-base/M data-[state=active]:border-brand-50 data-[state=active]:bg-brand-50 data-[state=active]:text-blue-500 xl:data-[state=active]:text-brand-50 xl:data-[state=active]:border-b-2"
            >
              ARTs ( Todas )
            </TabsTrigger>
            <TabsTrigger
              value="linked"
              className="border-transparent p-4 rounded-full  xl:rounded-none data-[state=active]:text-font-size-base/M data-[state=active]:border-brand-50 data-[state=active]:bg-brand-50 data-[state=active]:text-blue-500 xl:data-[state=active]:text-brand-50 xl:data-[state=active]:border-b-2"
            >
              ARTs ( Vinculadas )
            </TabsTrigger>
          </TabsList>
        </div>

        {loaded ? (
          <div className="w-screen ml-[-18px] lg:w-full lg:ml-0 dark:bg-[#20242C52]">
            <TabsContent value="pending">
              <DatagetFiTableArt
                loading={loading || false}
                columns={columnsArtList}
                data={dataList}
              />
            </TabsContent>
            <TabsContent value="registered">
              <DatagetFiTableArt
                loading={loading || false}
                columns={columnsArtList}
                data={dataList}
              />
            </TabsContent>
            <TabsContent value="all">
              <DatagetFiTableArt
                loading={loading || false}
                columns={columnsArtList}
                data={dataList}
              />
            </TabsContent>
            <TabsContent value="linked">
              <DatagetFiTableArt
                loading={loading || false}
                columns={columnsArtList}
                data={dataList}
              />
            </TabsContent>
          </div>
        ) : (
          <div className="flex justify-center mt-20">
            Carregando informações...
          </div>
        )}
      </Tabs>
    </div>
  );
}
