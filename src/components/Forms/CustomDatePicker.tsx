import { CustomDatePickerProps } from '@/types/CustomDatePickerProps'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from "@/components/ui/calendar";
import { ChevronDownIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const CustomDatePicker = ({ date, setDate }: CustomDatePickerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id="date"
          className="w-48 justify-between font-normal"
        >
          {date ? date : "اختر تاريخ"}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Calendar
          mode="single"
          selected={date ? parse(date, "yyyy-MM-dd", new Date()) : undefined}
          captionLayout="dropdown"
          onSelect={(date) => {
            setDate(format(date!, "yyyy-MM-dd"));
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

export default CustomDatePicker
