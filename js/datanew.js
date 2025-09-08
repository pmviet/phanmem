 $(document).ready(function() {
    $('#reportrange').daterangepicker(
       {
          startDate: moment().subtract(1, 'month').add(1, 'days'),
          endDate: moment(),
          minDate: '01/01/2020',
          maxDate: moment().endOf('month'),
          showDropdowns: true,
          showWeekNumbers: true,
          timePicker: false,
          timePickerIncrement: 1,
          timePicker12Hour: true,
          ranges: {
             'Hôm nay': [moment(), moment()],
             'Hôm qua': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
             '7 ngày gần đây': [moment().subtract(6, 'days'), moment()],
             '1 tháng gần đây': [moment().subtract(1, 'month').add(1, 'days'), moment()],
             'Tháng này': [moment().startOf('month'), moment().endOf('month')],
             'Tháng trước': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
             'Năm nay': [moment().startOf('year'), moment().endOf('year')],
             'Năm trước': [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')],
             '2 năm qua': [moment().subtract(2, 'years').startOf('year'), moment().endOf('year')],
          },
          opens: 'left',
          buttonClasses: ['btn btn-default'],
          applyClass: 'btn-small btn-primary',
          cancelClass: 'btn-small',
          separator: ' đến ',
          locale: {
              format: 'DD/MM/YYYY',   // hiển thị ngày/tháng/năm
              applyLabel: 'Xem',
              fromLabel: 'Từ',
              toLabel: 'Đến',
              customRangeLabel: 'Tùy chỉnh',
              daysOfWeek: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6','T7'],
              monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
              firstDay: 1
          }
       },
       function(start, end) {
          // Hiển thị cho người dùng
          $('#reportrange span').html(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));

          // Ẩn để gửi về server (YYYY-MM-DD)
          $('#hidden_date').val(start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD'));
       }
    );

    // Khởi tạo mặc định
    $('#reportrange span').html(moment().subtract(29, 'days').format('DD/MM/YYYY') + ' - ' + moment().format('DD/MM/YYYY'));
    $('#hidden_date').val(moment().subtract(29, 'days').format('YYYY-MM-DD') + ' - ' + moment().format('YYYY-MM-DD'));
});
