import CareerPage from '@/components/CareerPage/CareerPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career | QAonCloud',
  description: 'Apply to join the QAonCloud team.',
};

export default function Page() {
  return <CareerPage />;
}
