// components/Common/ContentWrapper/ContentWrapper.tsx
import React from 'react'
import styles from './ContentWrapper.module.css'

interface ContentWrapperProps {
  children: React.ReactNode
  className?: string
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={`${styles.wrapper} ${className || ''}`}>
      {children}
    </div>
  )
}