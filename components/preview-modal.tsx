"use client";

import usePreviewModal from "@/hooks/use-preview";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) return null;

  
  return <div>PreviewModal</div>;
};

export default PreviewModal;
