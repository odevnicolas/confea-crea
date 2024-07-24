import React from 'react';
import CardDataStats from '../../components/CardDataStats';
// import ChartOne from '../../components/Charts/ChartOne';
// import ChartThree from '../../components/Charts/ChartThree';
// import ChartTwo from '../../components/Charts/ChartTwo';
// import ChatCard from '../../components/Chat/ChatCard';
// import MapOne from '../../components/Maps/MapOne';
// import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';

const ECommerce: React.FC = () => {
  return (
    <DefaultLayout>
      <div className='flex justify-between mb-8'>
        <p>Inicio / Dashboard</p>
        <p>Precisando de ajuda consulte? <span className='text-blue-500'>Manual de Área de Serviços</span></p>
      </div>

      <p className='mb-2'>Acesso rápido</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Contratantes" total="$3.456K" rate="Cadastre, pesquise e gerencie seus contratantes aqui." levelUp>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#187BF0"/>
            <path d="M20 18C22.2091 18 24 16.2091 24 14C24 11.7909 22.2091 10 20 10C17.7909 10 16 11.7909 16 14C16 16.2091 17.7909 18 20 18Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M29 30C29 25.0294 24.9706 21 20 21C15.0294 21 11 25.0294 11 30" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 30L22 27.5L20 21L18 27.5L20 30Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </CardDataStats>
        <CardDataStats title="ARTs" total="$45,2K" rate="gerencie suas ARTs de forma fácil e prática" levelUp>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#733DF2"/>
            <path d="M28 18.4211V11C28 10.4477 27.5523 10 27 10H13C12.4477 10 12 10.4477 12 11V29C12 29.5523 12.4477 30 13 30H21" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 16.5H18" stroke="white" stroke-linecap="round"/>
            <path d="M22 16.5H25" stroke="white" stroke-linecap="round"/>
            <path d="M15 22H18" stroke="white" stroke-linecap="round"/>
            <path d="M15 25H18" stroke="white" stroke-linecap="round"/>
            <path d="M16.5 18V15" stroke="white" stroke-linecap="round"/>
            <path d="M26.864 26.864L28.9854 28.9853" stroke="white" stroke-linecap="round"/>
            <path d="M22.6214 26.864C23.7929 28.0355 25.6924 28.0355 26.864 26.864C28.0356 25.6924 28.0356 23.7929 26.864 22.6213C25.6924 21.4498 23.7929 21.4498 22.6214 22.6213C21.4498 23.7929 21.4498 25.6924 22.6214 26.864Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </CardDataStats>
        <CardDataStats title="Financeiro" total="2.450" rate="Verificar e acompanhar relatórios financeiro" levelUp>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#2DC26D"/>
            <path d="M10 14.5H30V26.5H10V14.5Z" stroke="white" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18.5C12.2091 18.5 14 16.7092 14 14.5H10V18.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 22.5C12.2091 22.5 14 24.2908 14 26.5H10V22.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30 22.5V26.5H26C26 24.2908 27.7908 22.5 30 22.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30 18.5C27.7908 18.5 26 16.7092 26 14.5H30V18.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 23.5C21.3807 23.5 22.5 22.1568 22.5 20.5C22.5 18.8432 21.3807 17.5 20 17.5C18.6193 17.5 17.5 18.8432 17.5 20.5C17.5 22.1568 18.6193 23.5 20 23.5Z" stroke="white" stroke-linejoin="round"/>
          </svg>
        </CardDataStats>
      </div>

      {/* <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div> */}
    </DefaultLayout>
  );
};

export default ECommerce;
