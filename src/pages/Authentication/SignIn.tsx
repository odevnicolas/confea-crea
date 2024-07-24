'use client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import GovIcon from '../../icons/gov';
import { Input, InputProps } from '../../ui/input';
import { Button } from '../../ui/button';
import CreaLogoIcon from '../../icons/logo';
import SupportIcon from '../../icons/support';
import LoginGreetingIMG from '../../assets/loginGreeting.jpg';
import { Dialog, DialogContent, DialogTrigger } from '../../ui/dialog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../contexts/AuthContext';
import { JSX } from 'react/jsx-runtime';

const LoginForm: React.FC = () => {
  const [govLoginModalIsOppened, setGovLoginModalIsOppened] = useState(false);
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [modalCpf, setModalCpf] = useState('');
  const [modalPassword, setModalPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    if (cpf === '000.000.000-00' && password === '123456789') {
      toast.success('Login foi um sucesso!', {
        onClose: () => {
          setTimeout(() => {
            login();
            navigate('/');
          }, 1000);
        },
      });
    } else {
      toast.error('Cadastro inválido!');
    }
  };

  const handleModalLogin = () => {
    if (modalCpf === '000.000.000-00' && modalPassword === '123456789') {
      toast.success('Login foi um sucesso!', {
        onClose: () => {
          setTimeout(() => {
            login();
            navigate('/');
          }, 1000);
        },
      });
    } else {
      toast.error('Cadastro inválido!');
    }
  };

  return (
    <main className='flex-1 flex w-screen h-dvhp overflow-hidden bg-white'>
      <div className='w-1/2 pl-24 h-screen'>
        <header className='w-full flex justify-between mt-9 items-center'>
          <div className='flex items-center'>
            <CreaLogoIcon />
            <h1 className='text-2xl font-semibold ml-6 leading-[42px] tracking-[0.10rem]'>CONFEA.</h1>
          </div>

          <div className='w-12 h-12 rounded bg-brand/15 flex items-center justify-center cursor-pointer'>
            <SupportIcon />
          </div>
        </header>

        <div className='pl-[4.68rem]'>
          <div className="flex flex-col h-screen bg-white justify-center">
            <div className='flex flex-col gap-3'>
              <h1 className='text-3xl font-medium text-grays-100'>Bem-vindo de volta.</h1>
              <p className='text-grays-50 text-lg'>faça login inserindo as informações abaixo</p>
            </div>

            <Dialog
              open={govLoginModalIsOppened}
              onOpenChange={setGovLoginModalIsOppened}
            >
              <DialogTrigger>
                <div className='w-full border border-grays-10 cursor-pointer flex py-3 rounded px-6 justify-center items-center mt-10 relative'>
                  <div className='w-fit absolute flex left-6'>
                    <GovIcon />
                  </div>
                  <p className='text-grays-50 text-sm'>Continuar com o <span className='font-semibold'>gov.br</span></p>
                </div>
              </DialogTrigger>
              <DialogContent className='bg-white'>
                <div className='w-full border-b border-grays-10'>
                  <GovIcon />
                  <p className='text-grays-100 font-medium text-sm mb-4'>Identifique-se no GOV BR</p>
                </div>

                <div>
                  <p className='text-base font-medium'>Número do CPF</p>
                  <p className='text-grays-30 text-sm mt-4'>Digite seu CPF para criar ou acessar sua conta gov.br</p>
                </div>

                <div className='mt-6'>
                  <h1 className='text-grays-100 text-base font-medium mb-4'>CPF</h1>
                  <InputMask
                    mask="999.999.999-99"
                    value={modalCpf}
                    onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setModalCpf(e.target.value)}
                  >
                    {(inputProps: JSX.IntrinsicAttributes & InputProps & React.RefAttributes<HTMLInputElement>) => (
                      <Input
                        {...inputProps}
                        placeholder="000.000.000-00"
                        style={{ color: 'black' }}
                      />
                    )}
                  </InputMask>

                  <h1 className='text-grays-100 text-base font-medium mt-6 mb-4'>Senha</h1>
                  <Input
                    type='password'
                    placeholder='Senha'
                    value={modalPassword}
                    onChange={(e) => setModalPassword(e.target.value)}
                    style={{ color: 'black' }}
                  />
                </div>

                <Button
                  onClick={handleModalLogin}
                  className='mt-10 bg-brand text-white h-12'>
                  <p>Acessar</p>
                </Button>
              </DialogContent>
            </Dialog>

            <div className='w-full mt-10 flex justify-center items-center'>
              <div className='w-full h-[1px] bg-grays-10' />
              <p className='px-5 absolute bg-white text-grays-40'>ou</p>
            </div>

            <div className='mt-6'>
              <h1 className='text-grays-100 text-base font-medium mb-4'>CPF</h1>
              <InputMask
                mask="999.999.999-99"
                value={cpf}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setCpf(e.target.value)}
              >
                {(inputProps: JSX.IntrinsicAttributes & InputProps & React.RefAttributes<HTMLInputElement>) => (
                  <Input
                    {...inputProps}
                    placeholder="000.000.000-00"
                    style={{ color: 'black' }}
                  />
                )}
              </InputMask>

              <h1 className='text-grays-100 text-base font-medium mt-6 mb-4'>Senha</h1>
              <Input
                type='password'
                placeholder='Senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ color: 'black' }}
              />
            </div>
            <p className='text-sm text-grays-60 mt-6 self-end'>Esqueceu sua senha? <span className='text-brand cursor-pointer'>Clique aqui</span></p>

            <Button className='mt-10 bg-brand text-white h-12' onClick={handleLogin}>
              <p>Login</p>
            </Button>

            <p className='text-sm text-grays-60 mt-6 self-center'>Ainda não tem cadastro? <span className='text-brand cursor-pointer'>Clique aqui</span></p>
            <p className='text-sm text-grays-60 mt-4 self-center'>CREA © 2024</p>
          </div>
        </div>
      </div>

      <div className='w-1/2 pl-[4.68rem] p-2 h-screen'>
        <p className='absolute text-white text-2xl pl-8 mt-20 font-medium  leading-[45px]'>
          Agora você pode se conectar ao CREA de<br />
          qualquer lugar e de qualquer dispositivo com<br />
          acesso à internet.
        </p>
        <img
          className='h-full'
          alt='Login Greeting'
          src={LoginGreetingIMG}
        />
      </div>

      <ToastContainer />
    </main>
  );
};

export default LoginForm;
