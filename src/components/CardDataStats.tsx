import React, { ReactNode } from 'react';

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className='flex'>
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
          {children}
        </div>
        <div className='ml-4'>
          <h1 className="font-extrabold text-black dark:text-white">{title}</h1>
          <p>( 0 cadastros )</p>
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between">

        <span className='flex items-center gap-1 text-sm font-medium' >
          {rate}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
