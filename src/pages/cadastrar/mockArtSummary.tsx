import { UserModel } from './models/authentication.model';
import { useRegisterArt } from './models/storeRegisterArt';
import React, { useEffect, useState } from 'react';
import GovLogo from '../../icons/govIcon.png';
import { Button } from '../../ui/buttonMock';
import { Table, TableBody, TableCell, TableHead, TableRow } from '../../ui/table';

interface MockArtSummaryProp {
  handleBack: () => void;
  handleContinue?: () => void;
  artType?: string;
}

const MockArtSummary: React.FC<MockArtSummaryProp> = ({ handleBack, handleContinue, artType }) => {
  const artRegistered = useRegisterArt();
  const userLocal = localStorage.getItem('user');
  const [user, setUser] = useState<UserModel>({});

  useEffect(() => {
    if (userLocal !== null) {
      const userString = JSON.parse(userLocal);
      setUser(userString);
    }
  }, []);

  return (
    <div className="flex flex-col p-6 gap-5 w-full text-black">
      <div className=' flex flex-col border-[#333333] py-16 px-24 justify-center bg-white '>
        <div className='w-full flex justify-center'>
          <img src={GovLogo} alt="Gov Logo" height={80} width={80}  className='px-2 py-2'/>
          <div className='ml-2'>
            <h1 className='font-bold text-xl'>Anotação de Responsabilidade Técnica - ART</h1>
            <h1 className='font-bold text-xl'>Lei n° 6.496, de 7 de dezembro de 1977</h1>
            <p className='font-bold text-lg mt-5'>Conselho Regional de Engenharia e Agronomia do Ceará</p>
          </div>
          <h1 className='font-bold text-4xl text-global-gray-70 ml-6'>CREA-CE</h1>

          <div className='w-2 h-14 bg-global-gray-30 ml-5' />

          <div className='text-center ml-10'>
            <h1 className='font-bold text-xl'>ART preview</h1>
            <p className='text-lg'>ART preview</p>
          </div>
        </div>

        <div className='w-full mt-12'>
          <div>
            <div className='w-fit z-50'>
              <p className='font-medium bg-white -mt-4 '>1. Responsável Técnico</p>
            </div>
            <div className='w-full h-[1px] bg-black z-0' />
          </div>

          <div className='mt-5 ml-4'>
            <h1 className='font-bold'>{user.nome}</h1>
            <p>Título profissional: <span className='font-bold'>{user.tituloPrincipal}</span></p>
          </div>
        </div>

        <div className='w-full mt-12'>
          <div>
            <div className='w-fit z-50'>
              <p className='font-medium bg-white -mt-4'>2. Dados do Contrato</p>
            </div>
            <div className='w-full h-[1px] bg-black z-0' />
          </div>

          <div className='w-full mt-5 ml-4 grid grid-cols-2'>
            <p>Contratante: <span className='font-bold'>-</span></p>
            <p>Proprietário: <span className='font-bold'>-</span></p>
            <p>Bairro: <span className='font-bold'>-</span></p>
            <p>CEP: <span className='font-bold'>-</span></p>
            <p>Cidade: <span className='font-bold'>-</span></p>
            <p>UF: <span className='font-bold'>-</span></p>
            <p>Nº: <span className='font-bold'>-</span></p>
            <p>Complemento: <span className='font-bold'>-</span></p>
            <p>Tipo de coordenada: <span className='font-bold'>-</span></p>
            <p>Coordenadas Geográficas: <span className='font-bold'>-, -</span></p>
            <p>Data de Início: <span className='font-bold'>-</span></p>
            <p>Previsão de término: <span className='font-bold'>-</span></p>
            <p>Data do contrato: <span className='font-bold'>-</span></p>
            <p>Valor: <span className='font-bold'>-</span></p>
            <p>Celebrado em: <span className='font-bold'>-</span></p>
            <p>Finalidade: <span className='font-bold'>-</span></p>
          </div>
        </div>

        <div className='w-full mt-12'>
          <div>
            <div className='w-fit z-50'>
              <p className='font-medium bg-white -mt-4'>3. Atividade Técnica</p>
            </div>
            <div className='w-full h-[1px] bg-black z-0' />
          </div>

          <div className='w-full mt-5'>
            <Table className='w-full'>
              <TableRow className='border-0 hover:bg-transparent'>
                <TableHead className="text-black">
                  Atividades
                </TableHead>
                <TableHead className="text-black">Nível de atividade</TableHead>
                <TableHead className="text-black">
                  Atividade Profissional
                </TableHead>
                <TableHead className="text-black">Unidade de medida</TableHead>
                <TableHead className="text-black">Quantidade</TableHead>
              </TableRow>
              <TableBody>
                <TableRow className='border-0 hover:bg-transparent'>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className='w-full mt-12'>
          <div>
            <div className='w-fit z-50'>
              <p className='font-medium bg-white absolute -mt-4 ml-20'>4. Observações</p>
            </div>
            <div className='w-full h-[1px] bg-black z-0' />
          </div>

          <div className='mt-5 ml-4'>
            <p>{artRegistered.observacao.length > 1 ? artRegistered.observacao : "-"}</p>
          </div>
        </div>

        <div className='w-full mt-12'>
          <div>
            <div className='w-fit z-50'>
              <p className='font-medium bg-white absolute -mt-4 ml-20'>5. Entidade de Classe</p>
            </div>
            <div className='w-full h-[1px] bg-black z-0' />
          </div>

          <div className='mt-5 ml-4'>
            <p>-</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-t w-ful p-6">
        <Button
          onClick={() => handleBack()}
          className='bg-brand/5'>
          <p className='text-brand font-medium'>Voltar</p>
        </Button>
        <Button
          onClick={() => {
            if (handleContinue) {
              handleContinue();
            }
          }}
          className="flex gap-2 rounded-sm h-10"
          type="button"
        >
          <p>{artType === 'COD104' ? 'Continuar' : 'Gerar rascunho'}</p>
        </Button>
      </div>
    </div>
  )
}

export default MockArtSummary;
