// src/utils/DateRangePicker.js
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {/* 시작일/시간 선택 */}
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        showTimeSelect           // 시간까지 선택
        timeFormat="HH:mm"       // 24시간 형식
        timeIntervals={30}       // 30분 단위
        dateFormat="yyyy-MM-dd HH:mm"
        placeholderText="시작일을 선택하세요"
      />

      {/* 종료일/시간 선택 */}
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}      // 종료일은 시작일 이후만
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        dateFormat="yyyy-MM-dd HH:mm"
        placeholderText="종료일을 선택하세요"
      />
    </div>
  );
};

export default DateRangePicker;
