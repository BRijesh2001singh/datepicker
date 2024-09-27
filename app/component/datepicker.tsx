"use client";
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getRecurringDates from '../modules/getRecurringDate';
import { useDatePickerStore } from '../store/store';
import {format} from 'date-fns';

const Datepicker = () => {
  const {//get all states from store
    startDate,
    endDate,
    recurrenceType,
    selectedDates,
    check,
    setStartDate,
    setEndDate,
    setRecurrenceType,
    setSelectedDates,
    setCheck,
  } = useDatePickerStore();
   const handleGetrecurringdate=()=>{
    if(!startDate){
      toast.error("Start Date not selected!");
      return;
    }
    if(startDate>endDate && endDate){
      toast.error("End Date Invalid!");
      return;
    }
    getRecurringDates(startDate, endDate, recurrenceType)
   }
  const isDateHighlighted = (date: Date) => {
    return selectedDates.find(
      (selectedDate) => (format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'))
    ) !== undefined;
  };
 const resetCalendar=()=>{
   setSelectedDates([]);
   setStartDate('');
   setEndDate('');
   setCheck(false);
 }

  return (
    <div className="flex justify-center items-center flex-col p-4 bg-white shadow-md rounded-lg mx-auto w-1/2 mt-2">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className='flex flex-row'>
        {/*start date input */}
        <div className="mb-4 mr-3">
          <label htmlFor="start-date" className="block font-semibold">Start Date:</label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded-md p-2 w-full"
          />
        </div>
        {/* end date input */}
        <div className="mb-4 mr-3">
          <label htmlFor="end-date" className="block font-semibold">End Date (optional) :</label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded-md p-2 w-full"
          />
        </div>

        {/* recurrence type selector */}
        <div className="mb-4 mr-3">
          <label htmlFor="recurrence-type" className="block font-semibold">Recurrence Type:</label>
          <select
            id="recurrence-type"
            value={recurrenceType}
            onChange={(e) => setRecurrenceType(e.target.value)}
            className="border rounded-md p-2 w-full"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      
      {/* conditional generationg of buttons*/}
      {!check ? (
        <button
          onClick={() =>handleGetrecurringdate()}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:scale-105 transition-transform duration-200 mb-1"
        >
          Generate Recurring Dates
        </button>
      ) : (//resets calendar startdate enddate and all recurring dates
        <button  
          className="bg-red-500 text-white py-2 px-4 mx-2 rounded-md hover:scale-110 transition-transform duration-200"
          onClick={resetCalendar}
        >
          Reset
        </button>
      )}

      {/* display calendar*/}
      <div className="mt-4">
        <Calendar
          key={selectedDates.length} // Re-render calendar based on selectedDates length
          tileClassName={({ date }) => isDateHighlighted(date) ? 'highlight' : null}
        />
      </div>
    </div>
  );
};

export default Datepicker;
