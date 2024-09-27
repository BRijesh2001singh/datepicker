// getRecurringDates.ts
import {addDays, addWeeks, addMonths, addYears } from 'date-fns';
import { useDatePickerStore } from '../store/store'; 

const getRecurringDates = (
  startDate: string,
  endDate: string,
  recurrenceType: string
) => {
  const { setSelectedDates, setCheck } = useDatePickerStore.getState(); 
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : addDays(startDate,500)
  const dates: Date[] = [];
  let currentDate = start;
  while (currentDate < end) {
    dates.push(new Date(currentDate));
//check which recurrence type is selected
    switch (recurrenceType) {
      case 'daily':
        currentDate = addDays(currentDate, 1);
        break;
      case 'weekly':
        currentDate = addWeeks(currentDate, 1);
        break;
      case 'monthly':
        currentDate = addMonths(currentDate, 1);
        break;
      case 'yearly':
        currentDate = addYears(currentDate, 1);
        break;
      default:
        break;
    }
  }

  setSelectedDates(dates); //update values in store
  setCheck(true); 
};

export default getRecurringDates;
