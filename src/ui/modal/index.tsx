import * as React from 'react'
import {
  Modal as OriginalModal,
  ModalProps as OriginalModalProps,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody
} from "@chakra-ui/react";

export interface ModalProps extends OriginalModalProps {
  title: string
  children: React.ReactNode
}

export function Modal({ title, children, isOpen, onClose, ...props }: ModalProps) {
  const handleClose = () => onClose()
  return (
    <OriginalModal isOpen={isOpen} onClose={handleClose} {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton onClick={handleClose} />
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </OriginalModal>
  )
}