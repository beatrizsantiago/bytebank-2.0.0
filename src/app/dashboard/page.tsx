'use client';

import dynamic from 'next/dynamic';

import Jumbotron from './components/Jumbotron';
import StatementList from './components/StatementList';
import NewTransaction from './components/NewTransaction';
import { DashboardProvider } from './context';

const Header = dynamic(() => import('@components/Header'));
const InlineMenu = dynamic(() => import('@components/InlineMenu'));
const Sidebar = dynamic(() => import('@components/Sidebar'));

const Dashboard = () => (
  <DashboardProvider>
    <div>
      <Header />

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1300px] flex flex-col gap-6 p-6 lg:flex-row">
          <Sidebar />
          <InlineMenu />

          <div className="flex-1">
            <Jumbotron />
            <NewTransaction />
          </div>

          <StatementList />
        </div>
      </div>
    </div>
  </DashboardProvider>
);

export default Dashboard;
