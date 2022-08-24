$(document).ready(function() {
    $('#reportrange').daterangepicker(
       {
          startDate: moment().subtract('month', 1).add(1, 'days'),
          endDate: moment(),
          minDate: '01/01/2020 0:0:0',
          maxDate: '12/31/2025 23:59:59',
          dateLimit: { days: 60 },
          showDropdowns: true,
          showWeekNumbers: true,
          timePicker: false,
          timePickerIncrement: 1,
          timePicker12Hour: true,
          ranges: {
             'Hôm nay': [moment(), moment()],
             'Hôm qua': [moment().subtract('days', 1), moment().subtract('days', 1)],
             '7 ngày gần đây': [moment().subtract('days', 6), moment()],
             '1 tháng gần đây': [moment().subtract('month', 1).add(1, 'days'), moment()],
             'Tháng này': [moment().startOf('month'), moment().endOf('month')],
             'Tháng trước': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
          },
          opens: 'left',
          buttonClasses: ['btn btn-default'],
          applyClass: 'btn-small btn-primary',
          cancelClass: 'btn-small',
          format: 'DD/MM/YYYY',
          separator: ' to ',
          locale: {
              applyLabel: 'Xem',
              fromLabel: 'From',
              toLabel: 'To',
              customRangeLabel: 'Tùy chỉnh',
              daysOfWeek: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6','T7'],
              monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
              firstDay: 1
          }
       },
       function(start, end) {
        console.log("Callback has been called!");
        $('#reportrange span').html(start.format('D MMMM YYYY') + ' - ' + end.format('D MMMM YYYY'));

       }
    );
    //Set the initial state of the picker label
    $('#reportrange span').html(moment().subtract('days', 29).format('D MMMM YYYY') + ' - ' + moment().format('D MMMM YYYY'));
 });