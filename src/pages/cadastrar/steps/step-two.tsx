import React, { useRef, useState } from 'react';
import { Checkbox } from '../../../ui/checkbox';
import { Button } from '../../../ui/button';
import AddFileIcon from '../../../icons/addFile';
import { UploadCloud, X } from 'lucide-react';

type TStepTwo = {
  setActualStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepTwo: React.FC<TStepTwo> = ({ setActualStep }) => {
  const [selectedMode, setSelectedMode] = useState<string>('');
  const [description, setDescription] = useState<boolean>(false);
  const [contract, setContract] = useState<boolean>(false);
  const [manual, setManual] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileUploaded, setFileUploaded] = React.useState<{ nome: string, arquivo: string }>();

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<any> | any) => {
    const files = event.type === "drop" ? event.dataTransfer.files : event.target.files;

    if (files.length > 0) {
      const file = files[0];

      const reader = new FileReader();
      reader.onloadend = function () {
        if (reader.result) {
          const base64String = reader.result.toString().split(',')[1];
          setFileUploaded({ nome: file.name, arquivo: base64String || '', });
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className='overflow-hidden'>
      <h1 className='text-white text-2xl'>Escolha como será sua ART</h1>
      <p className='text-[#C8C8C8]'>Selecione o modelo de ART e o estado de criação.</p>

      <div className='flex items-center gap-6 mt-6'>
        <div className='w-full h-48 flex items-center justify-center flex-col bg-[#080C10] rounded border border-[#333333]'>
          <div className='w-full h-full flex items-center justify-center'>
            <AddFileIcon />
          </div>
          <div className='w-full h-11 rounded gap-3 bg-[#181C21] flex items-center px-4 mt-auto border-[#333333] border-t '>
            <Checkbox
              checked={contract}
              onCheckedChange={() => {
                setSelectedMode('contract')
                setDescription(false)
                setContract(true)
                setManual(false)
              }}
              className='rounded-full border-brand' />
            <p className='text-white font-medium'>Leitura de contrato através de IA</p>
          </div>
        </div>

        <div className='w-full h-48 flex items-center justify-center flex-col bg-[#080C10] rounded border border-[#333333]'>
          <div className='w-full h-full flex items-center justify-center'>
            <AddFileIcon />
          </div>
          <div className='w-full h-11 rounded gap-3 bg-[#181C21] flex items-center px-4 mt-auto border-[#333333] border-t '>
            <Checkbox
              checked={description}
              onCheckedChange={() => {
                setSelectedMode('description')
                setDescription(true)
                setContract(false)
                setManual(false)
              }}
              className='rounded-full border-brand' />
            <p className='text-white font-medium'>Descrição da ART através de IA</p>
          </div>
        </div>

        <div className='w-full h-48 flex items-center justify-center flex-col bg-[#080C10] rounded border border-[#333333]'>
          <div className='w-full h-full flex items-center justify-center'>
            <AddFileIcon />
          </div>
          <div className='w-full h-11 rounded gap-3 bg-[#181C21] flex items-center px-4 mt-auto border-[#333333] border-t '>
            <Checkbox
              checked={manual}
              onCheckedChange={() => {
                setSelectedMode('')
                setDescription(false)
                setContract(false)
                setManual(true)
              }}
              className='rounded-full border-brand' />
            <p className='text-white font-medium'>ART manual</p>
          </div>
        </div>
      </div>

      <div className='w-full h-[1px] bg-[#333333] mt-8' />
      
      <div>
        {selectedMode === 'description' && (
          <div className='mt-7'>
            <h1 className='text-white font-medium text-lg'>Descrição da ART</h1>

            <p className='text-white mt-6'>Descrição <span className='text-red-500'>*</span></p>
            <textarea
              placeholder='Descrição'
              className='w-full h-40 resize-none outline-none mt-5 py-3 px-5 rounded  border border-[#333333] bg-[#181C21]'
            />
          </div>
        )}
      </div>

      <div>
        {selectedMode === 'contract' && (
          <div className='mt-7'>
            <h1 className='text-white font-medium text-lg'>Selecionar contrato</h1>

            <p className='text-white mt-6'>Adicione aqui o contrato referente a ART</p>
            
            {!fileUploaded ? (
              <div
                onClick={handleFileUpload}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  handleFileChange(e);
                }}
                className='w-full border bg-[#181C21] cursor-pointer border-dashed h-28 hover:border-brand-50 transition-colors duration-150 gap-8 flex items-center justify-center mt-10'>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                  accept=".pdf"
                  multiple
                />
                <div
                  className='w-8 h-8 flex items-center justify-center rounded-full bg-brand-50/15'>
                  <UploadCloud
                    className='text-brand-50 size-5' />
                </div>
                <p className='text-global-gray-50'>Arraste e solte arquivos aqui ou <span className='text-brand'>escolha arquivos</span></p>
              </div>
            ) : (
                <div
                  onClick={handleFileUpload}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    handleFileChange(e);
                  }}
                  className='w-full border bg-[#181C21] cursor-pointer border-dashed h-28 hover:border-brand-50 transition-colors duration-150 gap-8 flex items-center justify-center mt-10'>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                    accept=".pdf"
                    multiple
                  />
                  <div className='py-2 px-4 flex items-center rounded gap-4 bg-brand'>
                    <p className='text-xs text-white font-medium'>{fileUploaded.nome}</p>
                    <X
                      onClick={(e) => {
                        setFileUploaded(undefined)
                        e.stopPropagation()
                      }}
                    strokeWidth={3}
                    className='text-white size-5'
                    />
                  </div>
                </div>
            )}
          </div>
        )}
      </div>


      <div className='flex items-center justify-between mt-20 '>
        <Button
          onClick={() => setActualStep(1)}
          className='bg-brand/5'>
          <p className='text-brand font-medium'>Voltar</p>
        </Button>

        <Button
          onClick={() => setActualStep(3)}
          className='bg-brand'>
          <p className='text-white font-medium'>Continuar</p>
        </Button>
      </div>
    </div>
  )
}

export default StepTwo;