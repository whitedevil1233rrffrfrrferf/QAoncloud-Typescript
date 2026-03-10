import PrivacyPolicy from '@/components/Policies/PrivacyPolicy';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | QAonCloud',
  description: 'Read the QAonCloud Privacy Policy to understand how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}