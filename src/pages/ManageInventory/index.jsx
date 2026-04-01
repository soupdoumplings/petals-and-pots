import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { supabase } from '../../supabase'; // Getting ready for Backend integration

const ManageInventory = () => {
  // We will hook this up to the backend next!
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBF9F4] flex flex-col items-center overflow-x-hidden w-full relative">
      <Navbar />
      
      <main className="w-full max-w-[1920px] mx-auto flex-grow mt-[82px] px-6 md:px-12 pt-24 pb-32">
        <div className="max-w-4xl mx-auto w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
           
           {/* Header Section */}
           <div className="flex items-center gap-4 mb-6">
               <Link to="/archive" className="material-symbols-outlined text-[#31332C]/60 hover:text-[#31332C] transition-colors bg-[#EFEEE6] p-2 rounded-full cursor-pointer hover:bg-[#E2E3D9]">arrow_back</Link>
               <span className="font-label text-[11px] tracking-[0.2em] uppercase text-[#785A1A] font-bold">New Plant Listing</span>
           </div>
           
           <h1 className="font-headline text-5xl md:text-6xl leading-tight text-[#31332C] tracking-tight mb-12">Add Plant for Sale</h1>
           
           <div className="w-full h-[1px] bg-[#B1B3A9]/20 mb-14"></div>

           {/* Interactive Layout Section */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
               
               {/* Left Column Data */}
               <div className="space-y-10">
                  <div className="flex flex-col gap-3 group">
                     <label className="font-label text-[10px] tracking-widest uppercase text-[#5E6058] font-black group-focus-within:text-[#785A1A] transition-colors">Specimen Common Name</label>
                     <input type="text" placeholder="e.g. Monstera Deliciosa" className="bg-transparent border-b border-[#31332C]/20 py-2 outline-none font-headline text-3xl text-[#31332C] placeholder:text-[#31332C]/20 focus:border-[#785A1A] transition-all w-full" />
                  </div>

                  <div className="flex flex-col gap-3 group">
                     <label className="font-label text-[10px] tracking-widest uppercase text-[#5E6058] font-black group-focus-within:text-[#785A1A] transition-colors">Botanical/Scientific Name</label>
                     <input type="text" placeholder="e.g. Araceae Monstera" className="bg-transparent border-b border-[#31332C]/20 py-2 outline-none font-body text-xl italic text-[#31332C] placeholder:text-[#31332C]/20 focus:border-[#785A1A] transition-all w-full" />
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                      <div className="flex flex-col gap-3 group">
                         <label className="font-label text-[10px] tracking-widest uppercase text-[#5E6058] font-black group-focus-within:text-[#785A1A] transition-colors">Inventory ID</label>
                         <input type="text" placeholder="SPEC-000-KTM" className="bg-[#EFEEE6] border border-[#B1B3A9]/20 p-4 outline-none font-label text-[12px] text-[#31332C] font-bold tracking-widest uppercase focus:border-[#785A1A] hover:border-[#B1B3A9]/50 transition-all w-full" />
                      </div>
                      <div className="flex flex-col gap-3 group">
                         <label className="font-label text-[10px] tracking-widest uppercase text-[#5E6058] font-black group-focus-within:text-[#785A1A] transition-colors">Market Valuation (रू)</label>
                         <input type="number" placeholder="0.00" className="bg-transparent border-b border-[#31332C]/20 py-4 outline-none font-headline text-2xl text-[#31332C] placeholder:text-[#31332C]/20 focus:border-[#785A1A] transition-all w-full" />
                      </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                      <div className="flex flex-col gap-3 group">
                         <label className="font-label text-[10px] tracking-widest uppercase text-[#5E6058] font-black group-focus-within:text-[#785A1A] transition-colors">Curation Health</label>
                         <select className="bg-transparent border-b border-[#31332C]/20 py-3 outline-none font-body text-sm uppercase tracking-wide text-[#31332C] font-bold focus:border-[#785A1A] cursor-pointer">
                            <option>Optimal</option>
                            <option>Stable</option>
                            <option>Critical</option>
                            <option>Quarantine</option>
                         </select>
                      </div>
                      <div className="flex flex-col gap-3 group">
                         <div className="flex justify-between items-center">
                            <label className="font-label text-[10px] tracking-widest uppercase text-[#5E6058] font-black group-focus-within:text-[#785A1A] transition-colors">Maturity Progress %</label>
                            <span className="font-label text-[10px] tracking-widest font-black text-[#785A1A]">50%</span>
                         </div>
                         <input type="range" min="0" max="100" defaultValue="50" className="mt-4 accent-[#785A1A] cursor-pointer" />
                      </div>
                  </div>
               </div>

               {/* Right Column Assets/Photos */}
               <div className="space-y-8 h-full">
                   <div className="flex flex-col gap-3 h-full">
                     <label className="flex items-center gap-2 font-label text-[10px] tracking-widest uppercase text-[#5E6058] font-black">
                        <span className="material-symbols-outlined text-[14px]">photo_camera</span>
                        Asset Photography
                     </label>
                     <div className="flex-grow w-full border border-dashed border-[#B1B3A9] bg-[#EFEEE6]/50 flex flex-col items-center justify-center p-12 hover:bg-[#EFEEE6] hover:border-[#785A1A] transition-all cursor-pointer group min-h-[350px]">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                           <span className="material-symbols-outlined text-[28px] text-[#B1B3A9] group-hover:text-[#785A1A] transition-colors">upload</span>
                        </div>
                        <p className="font-label text-[11px] uppercase tracking-widest text-[#5E6058] font-bold text-center mb-2">Click to upload raw asset</p>
                        <p className="font-body text-xs text-[#5E6058]/60 text-center max-w-[200px]">High-resolution botanical scan required for archive compliance.</p>
                     </div>
                   </div>
               </div>
           </div>
           
           <div className="w-full h-[1px] bg-[#B1B3A9]/20 mt-16 mb-8"></div>
           
           {/* Action Handlers */}
           <div className="flex justify-between items-center bg-[#EFEEE6]/50 p-6 border border-[#B1B3A9]/10">
              <Link to="/archive" className="font-label text-[11px] font-bold tracking-[0.2em] uppercase text-[#9F403D] hover:text-[#31332C] transition-colors flex items-center gap-2">
                 <span className="material-symbols-outlined text-[16px]">close</span>
                 Abort Procedure
              </Link>
              <button className="bg-[#5F5E5E] text-[#FAF7F6] px-10 py-4 font-label text-[12px] tracking-[1.5px] font-black uppercase flex items-center gap-3 hover:bg-[#31332C] transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-xl shadow-black/10">
                 Commence Acquisition
                 <div className="w-[1px] h-4 bg-white/20"></div>
                 <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
           </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ManageInventory;
