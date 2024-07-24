import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
import Logo from '../../images/logo/logo.svg';
import { Settings, Home, FileText, DollarSign, AlertTriangle, LogOut } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  const [selectedCrea, setSelectedCrea] = useState("CE");

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  const showToast = () => {
    toast('Ainda está em desenvolvimento', {
      icon: <AlertTriangle />,
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const handleLogout = () => {
    // Logic for logging out
    navigate('/auth/signin');
  };

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-10 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-[#090E14] lg:static lg:translate-x-0 border-r-2 border-[#333] ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <Toaster />
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <div className='flex items-center gap-4'>
          <NavLink to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
          <h1 className='text-2xl font-extrabold text-white'>CONFEA</h1>
        </div>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Select CREA --> */}
          <div className="mb-10 px-6 ml-[-1em]">
            <div className="relative">
              <select
                value={selectedCrea}
                onChange={(e) => setSelectedCrea(e.target.value)}
                className="block appearance-none w-full bg-[#14171C] text-white py-4 px-4 pr-12 rounded leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
              >
                <option value="CE">CREA - CE</option>
                <option value="SP">CREA - SP</option>
                <option value="RS">CREA - RS</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293L10 12l4.707-4.707a1 1 0 011.414 0z"/></svg>
              </div>
            </div>
          </div>

          <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
            MENU
          </h3>

          <ul className="mb-6 flex flex-col gap-1.5">
            <li>
              <NavLink
                to="/"
                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  pathname === '/' ? 'bg-graydark dark:bg-meta-4' : ''
                }`}
              >
                <Home className="h-5 w-5" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <button
                onClick={showToast}
                className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 w-full text-left"
              >
                <FileText className="h-5 w-5" />
                Contratantes
              </button>
            </li>
            <li>
              <button
                onClick={showToast}
                className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 w-full text-left"
              >
                <FileText className="h-5 w-5" />
                ART
              </button>
            </li>
            <li>
              <button
                onClick={showToast}
                className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 w-full text-left"
              >
                <DollarSign className="h-5 w-5" />
                Financeiro
              </button>
            </li>
          </ul>

          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              Outros
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <button
                  onClick={showToast}
                  className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 w-full text-left"
                >
                  <Settings className="h-5 w-5" />
                  Configurações
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 w-full text-left"
                >
                  <LogOut className="h-5 w-5" />
                  Sair da Conta
                </button>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
