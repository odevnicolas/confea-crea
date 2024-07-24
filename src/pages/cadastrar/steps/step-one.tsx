import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select';
import { Input } from '../../../ui/input';
import { Checkbox } from '../../../ui/checkbox';
import { Button } from '../../../ui/button';

type TStepOne = {
  setActualStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepOne: React.FC<TStepOne> = ({ setActualStep }) => {

  return (
    <div className='overflow-hidden'>
      <h1 className='text-white text-2xl'>Escolha como será sua ART</h1>
      <p className='text-[#C8C8C8]'>Selecione o modelo de ART e o estado de criação.</p>

      <div className='w-full mt-8'>
        <div className='mb-8'>
          <h1 className='text-white font-bold mb-3'>Estado de origem da ART <span className='text-red-500'>*</span></h1>
          <Select>
            <SelectTrigger className='text-[#909090]'>
              <SelectValue
                className='text-white'
                placeholder="Estado de origem" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="ce">Ceará - CE</SelectItem>
                <SelectItem value="df">Brasília - DF</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className='mb-8'>
          <h1 className='text-white font-bold mb-3'>Tipo de ART <span className='text-red-500'>*</span></h1>
          <Select>
            <SelectTrigger className='text-[#909090]'>
              <SelectValue
                className='text-white'
                placeholder="Selecionar tipo de ART" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="COD101">OBRA / SERVIÇO</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className='mb-8'>
          <h1 className='text-white font-bold mb-3'>Forma de registro <span className='text-red-500'>*</span></h1>
          <Select>
            <SelectTrigger className='text-[#909090]'>
              <SelectValue
                className='text-white'
                placeholder="Selecionar forma de registro" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="initial">INICIAL</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className='mb-8'>
          <h1 className='text-white font-bold mb-3'>Participação <span className='text-red-500'>*</span></h1>
          <Select>
            <SelectTrigger className='text-[#909090]'>
              <SelectValue
                className='text-white'
                placeholder="Selecionar participação" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="individual">INDIVIDUAL</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className='mb-8'>
          <h1 className='text-white font-bold mb-3'>Finalidade</h1>
          <Input
            placeholder='Finalidade'
            className='h-10 border border-[#333333] bg-[#181C21]' />
        </div>
      </div>

      <div className='w-full mt-24 bg-[#181C21] p-6 rounded'>
        <p className='text-white font-medium'>Não é obrigatório marcar as opções abaixo. Ao selecionar, você confirmar que os textos aparecerão na ART.</p>

        <div className='flex items-center mt-6 gap-4'>
          <Checkbox className='border-[#909090]' />
          <p className='text-[#909090]'>Declaro que estou cumprindo as regras de acessibilidade previstas nas normas técnicas da ABNT, na legislação específica e no decreto n. 5296/2004.</p>
        </div>

        <div className='flex mt-6 gap-4'>
          <Checkbox className='border-[#909090] mt-2' />
          <p className='text-[#909090]'>
            Cláusula Compromissória: Qualquer conflito ou litígio originado do presente contrato, bem como sua interpretação ou execução, será resolvido por <br />
            arbitragem, de acordo com a Lei no. 9.307, de 23 de setembro de 1996, por meio do Centro de Mediação e Arbitragem - CMA vinculado ao Crea-CE, nos termos<br />
            do respectivo regulamento de arbitragem que, expressamente, as partes declaram concordar.
          </p>
        </div>
      </div>

      <div className='flex items-center justify-between mt-20'>
        <Button className='bg-brand/5'>
          <p className='text-brand font-medium'>Cancelar</p>
        </Button>

        <Button
          onClick={() => setActualStep(2)}
          className='bg-brand'>
          <p className='text-white font-medium'>Continuar</p>
        </Button>
      </div>
    </div>
  )
}

export default StepOne;
