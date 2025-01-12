import { useState } from 'react';
import { Label } from '../../../../components/ui/label';
import { DayPicker, DateRange } from 'react-day-picker';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../../../components/ui/popover';
import { Button } from '../../../../components/ui/Button/button';
import { cn } from '../../../../lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../components/ui/select';
import 'react-day-picker/dist/style.css';

const DateTimeInputs = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>('12:00');
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Date & Time Inputs</h2>
        <p className="text-muted-foreground mb-6">
          Modern date and time selection components.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Single Date Picker */}
        <div className="space-y-4">
          <Label>Single Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start text-left font-normal',
                  !date && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="border-none"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Time Picker */}
        <div className="space-y-4">
          <Label>Time</Label>
          <div className="flex gap-2">
            <Button variant="outline" className="w-full justify-start">
              <Clock className="mr-2 h-4 w-4" />
              {time}
            </Button>
            <Select value={time} onValueChange={setTime}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 24 }, (_, i) => {
                  const hour = i.toString().padStart(2, '0');
                  return (
                    <>
                      <SelectItem value={`${hour}:00`}>
                        {hour}:00
                      </SelectItem>
                      <SelectItem value={`${hour}:30`}>
                        {hour}:30
                      </SelectItem>
                    </>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Date Range Picker */}
        <div className="space-y-4 md:col-span-2">
          <Label>Date Range</Label>
          <div className="grid gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant="outline"
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !dateRange && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange?.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, 'LLL dd, y')} -{' '}
                        {format(dateRange.to, 'LLL dd, y')}
                      </>
                    ) : (
                      format(dateRange.from, 'LLL dd, y')
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <DayPicker
                  mode="range"
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={(range: DateRange | undefined) => setDateRange(range)}
                  numberOfMonths={2}
                  className="border-none"
                />
              </PopoverContent>
            </Popover>
          </div>
          {dateRange?.from && dateRange?.to && (
            <p className="text-sm text-muted-foreground">
              Selected range: {format(dateRange.from, 'PPP')} to{' '}
              {format(dateRange.to, 'PPP')}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DateTimeInputs;
