'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { logout } from '../_actions/logout';

export function UserLogout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <>
      {children}
      <Button variant={'destructive'} onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
}
