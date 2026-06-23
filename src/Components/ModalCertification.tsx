import { Cancel01Icon } from "hugeicons-react";
import { X } from "lucide-react";
import { useEffect } from "react";

const ModalCertification = ({ image, onClose }: { image?: string; onClose: () => void }) => {

  // Menambahkan event listener untuk ESC key
  useEffect(() => {
    const handleEscPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    };

    // Menambahkan listener saat komponen dipasang
    document.addEventListener('keydown', handleEscPress);

    // Membersihkan listener saat komponen dilepas
    return () => {
      document.removeEventListener('keydown', handleEscPress);
    };
  }, []);

  return (
    <section className='w-screen h-screen fixed left-0 bottom-0 bg-slate-900 bg-opacity-[0.7] lg:flex items-center justify-center z-[999999999999]'>
      <div className="relative md:left-[-16px] w-ful md:w-max h-full md:h-[80vh] bg-white/20 backdrop-blur-2xl md;p-4 md:rounded-[24px]">
        <div className="relative w-full h-full bg-white md:rounded-[20px] shadow-lg z-[999999999999]">
          <div className="w-full h-max md:h-full mb-4 p-4">
            <img src={image} alt="image" className={`w-auto h-[90%] rounded-[16px] object-contain`} />
            <div onClick={() => onClose()} className="rounded-xl mt-2 w-full cursor-pointer active:scale-[0.98] hover:brightness-90 relative bg-red-500 text-white h-14 justify-center flex items-center gap-2">
              <X />
              <p>Tutup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModalCertification
