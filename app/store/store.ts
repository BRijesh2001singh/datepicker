import { create } from 'zustand';

type DatePickerState = {
  startDate: string;
  endDate: string;
  recurrenceType: string;
  selectedDates: Date[];
  check: boolean;
  setSelectedDates: (date: Date[]) => void;
  setCheck: (check: boolean) => void;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  setRecurrenceType: (type: string) => void;
};

export const useDatePickerStore = create<DatePickerState>((set) => ({//start initalizing each state and define set function for each state
  startDate: '',
  endDate: '',
  recurrenceType: 'daily',
  selectedDates: [],
  check: false,
  setSelectedDates: (dates) => set({ selectedDates: dates }),
  setCheck: (check) => set({ check }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrenceType: (type) => set({ recurrenceType: type }),
}));
