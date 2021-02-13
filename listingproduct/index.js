
$(document).ready(function() {
   var table = $('#mytable').DataTable({
    "columns": [
        { "data": "id" },
        {"data": "name"},
        { "data": "description" },
        { "data": "image" },
        { "data": "price" },
        { "data": "discount_amount"},
        { "data": "status"},
    ],
    columnDefs: [
        {
          targets: 3,
          render: function (data) {
            return '<img src="' + data + '" class="image">';
          },
        },
        {
          targets: 7,
          render: function (data, type, row, meta) {
            return '<a href="' + row.id + '">ok</a>';
          },
        },
      ],
});


$.ajax({
    url: 'https://gorest.co.in/public-api/products',
    dataType : 'json',
    success: function (json){
        table.rows.add(json.data).draw();
    }
});
});
    



