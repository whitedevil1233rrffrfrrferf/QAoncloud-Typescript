import TermsOfUse from '@/components/Policies/TermsOfUse';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | QAonCloud',
  description: 'Review the QAonCloud Terms of Use governing your access to and use of our services and website.',
}

export default function TermsOfUsePage() {
  return <TermsOfUse />;
}