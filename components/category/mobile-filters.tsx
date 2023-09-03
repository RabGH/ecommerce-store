"use client";

import { useState, Fragment } from "react";
import { Plus, X } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";

import { Size, Color } from "@/types";
import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import Filter from "@/components/category/filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ colors, sizes }) => {
  const [open, setOpen] = useState(true);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={onClose}>
          {/* Background */}
          <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-in" />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Dialog position */}
            <div className="fixed inset-0 z-40 flex">
              <Dialog.Panel
                className="relative ml-auto flex h-full w-full max-w-xs flex-col 
            overflow-y-auto bg-white py-4 pb-6 shadow-xl"
              >
                {/* Close Button */}
                <div className="flex items-center justify-end px-4">
                  <IconButton icon={<X size={15} />} onClick={onClose} />
                </div>

                {/* Render the filter */}
                <div className="p-4">
                  <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                  <Filter valueKey="colorId" name="Colors" data={colors} />
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileFilters;
