

/**SUBMIT FORM */
const form = document.getElementById("form-field");
form.onsubmit = async function (e) {
    e.preventDefault();
    const req = JSON.stringify({
        name: form.name.value,
        price: form.price.value,
        image: form.image.value,
        discount_amount: form.discount_amount.value,
        description: form.description.value,
        status: form.status.value,
    });
    console.log("REQ:", req)
    const response = await fetch('https://gorest.co.in/public-api/products', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: "Bearer a82aad0b82a2c378fa1d55693db33ea6279ce7312a90645d908109fd35771873",
        },
        body: req,
    })

    if (response.status == 200) {
        const result = await response.json();
        console.log(result)
    } else {
        const { message } = await response.json();
        alert(message)
    }
    this.reset();
}

$('#mytable').DataTable({
ajax:{
    url: 'https://gorest.co.in/public-api/products',
    dataSrc : "data",
  
    },
    "columns": [
      { "data": "id" },
      {"data": "name"},
      { "data": "description" },
      { "data": "image" },
      { "data": "price" },
      { "data": "discount_amount"},
      { "data": "status"}
  ],
  
  columnDefs: [
    {
      targets: 3,
      render: function (data) {
        return '<img src="' + data + '" class="image">';
      },
    },/*
    {
      targets: 7,
      render: function (data, type, row, meta) {
        return '<a href="' + row.id + '">ok</a>';
      },
    },*/
  ],
})
    



