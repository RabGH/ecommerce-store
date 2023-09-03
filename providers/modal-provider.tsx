"use client";

import PreviewModal from "@/components/preview-modal";
import { useMount } from "@/hooks/mount-hook";

const ModalProvider = () => {
  const isMounted = useMount();

  if (!isMounted) return null;
  
  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
