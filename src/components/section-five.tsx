'use client'

import React, { useEffect, useState } from 'react';

export const SectionFive = () => {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        console.log('isOpen:', isOpen);
      }, [isOpen]);
      
      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

  return (
    <section className="text-gray-600 body-font bg-gray-100 mx-0">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-12">
      <h1 className="sm:text-3xl text-2xl font-semibold text-center title-font uppercase text-gray-900 mb-4">Kop soralgan savollar</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Прежде чем брать студентов на наши курсы для начинающих, мы проверяем их навыки английского языка, математики и решения задач.</p>
    </div>
    <div className='flex lg:flex-row flex-col md:mx-24'>
    <div className="flex flex-col items-center w-full sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 w-full">
        <div className="bg-white rounded-3xl flex flex-col p-4 h-full cursor-pointer" onClick={toggleMenu}>
          <div className='flex flex-row justify-between'>
            <span className="title-font font-medium">Bu sohada mening bilimim va tajribam yoq. Darslarni ozlashtirishda  menda qiyinchiliklar bolmaydimi?</span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
            </div>
          </div>
          <div>
            {isOpen && (
                <p className='text-xs pt-6'>Raqamli malumotlar hajmi osishda davom etar ekan, qaror qabul qilish jarayonlari murakkablashmoqda. Aynan shu yerda biznes tahlili (business intelligence) texnologiyalari, malumotlarni qidirish, bashoratli tahlillar va boshqa vositalar juda foydali bolishi mumkin.</p>
            )}
          </div>
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="bg-white rounded-3xl flex flex-col p-4 h-full cursor-pointer">
          <div className='flex flex-row justify-between'>
            <span className="title-font font-medium">Dasturlash foundation kursini boshlashdan oldin nimalarni bilish kerak?</span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="bg-white rounded-3xl flex flex-col p-4 h-full cursor-pointer">
          <div className='flex flex-row justify-between'>
            <span className="title-font font-medium">Dasturlash foundation kursini bitirib oquvchi qanday konikmalarga ega bolishi kerak?</span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center w-full sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 w-full">
        <div className="bg-white rounded-3xl flex flex-col p-4 h-full cursor-pointer">
          <div className='flex flex-row justify-between'>
            <span className="title-font font-medium">Kurs tugatkandan song sertifikat beriladimi?</span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="bg-white rounded-3xl flex flex-col p-4 h-full cursor-pointer">
          <div className='flex flex-row justify-between'>
            <span className="title-font font-medium">Kursdan foyda olmasam, pulim qaytarib beriladimi?</span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="bg-white rounded-3xl flex flex-col p-4 h-full cursor-pointer">
          <div className='flex flex-row justify-between'>
            <span className="title-font font-medium">kursni sotib olsam, undan doim foydalana olamanmi?</span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="bg-white rounded-3xl flex flex-col p-4 h-full cursor-pointer">
          <div className='flex flex-row justify-between'>
            <span className="title-font font-medium">Kursda oqish ucun kompyuterim bolishi kerakmi?</span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>
  )
};
