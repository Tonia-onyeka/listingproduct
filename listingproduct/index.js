/*var data = [
{
    "id":5,
    "name":"Amarnath Sethi I",
    "email":"i_amarnath_sethi@watsica.net","gender":"Male","status":"Inactive","created_at":"2021-02-13T03:50:04.426+05:30","updated_at":"2021-02-13T08:53:55.074+05:30"},{"id":6,"name":"Deeptimay Khan Esq.","email":"deeptimay_khan_esq@wiza.name","gender":"Male","status":"Inactive","created_at":"2021-02-13T03:50:04.438+05:30","updated_at":"2021-02-13T03:50:04.438+05:30"},{"id":7,"name":"Rep. Aruna Ganaka","email":"aruna_rep_ganaka@auer-eeeeeeeee.name","gender":"Female","status":"Active","created_at":"2021-02-13T03:50:04.475+05:30","updated_at":"2021-02-13T06:18:36.648+05:30"},{"id":8,"name":"Ms. Gautama Nambeesan","email":"gautama_ms_nambeesan@ruecker-ritchie.io","gender":"Male","status":"Inactive","created_at":"2021-02-13T03:50:04.489+05:30","updated_at":"2021-02-13T03:50:04.489+05:30"},{"id":12,"name":"JoeBiden","email":"sen_anil_tandon@hansen-howell.com","gender":"Male","status":"Active","created_at":"2021-02-13T03:50:04.606+05:30","updated_at":"2021-02-13T12:10:22.245+05:30"},{"id":13,"name":"JoeBiden","email":"jr_bandopadhyay_abhirath@beahan.net","gender":"Male","status":"Inactive","created_at":"2021-02-13T03:50:04.623+05:30","updated_at":"2021-02-13T12:10:37.990+05:30"},{"id":14,"name":"Bhudev Ahuja","email":"bhudev_ahuja@huels.org","gender":"Female","status":"Active","created_at":"2021-02-13T03:50:04.638+05:30","updated_at":"2021-02-13T05:57:44.320+05:30"},{"id":15,"name":"JoeBiden","email":"iv_sloka_desai@wyman.info","gender":"Male","status":"Inactive","created_at":"2021-02-13T03:50:04.645+05:30","updated_at":"2021-02-13T12:11:23.743+05:30"},{"id":16,"name":"Balagopal Patil","email":"balagopal_patil@bernier.net","gender":"Female","status":"Inactive","created_at":"2021-02-13T03:50:04.663+05:30","updated_at":"2021-02-13T03:50:04.663+05:30"},{"id":17,"name":"Tushar Desai","email":"desai_tushar@hills.io","gender":"Male","status":"Inactive","created_at":"2021-02-13T03:50:04.669+05:30","updated_at":"2021-02-13T03:50:04.669+05:30"},{"id":18,"name":"Girish Singh","email":"singh_girish@mayert-cormier.info","gender":"Female","status":"Active","created_at":"2021-02-13T03:50:04.675+05:30","updated_at":"2021-02-13T03:50:04.675+05:30"},{"id":19,"name":"Chandrani Embranthiri PhD","email":"embranthiri_phd_chandrani@dickinson.io","gender":"Male","status":"Active","created_at":"2021-02-13T03:50:04.690+05:30","updated_at":"2021-02-13T03:50:04.690+05:30"},{"id":20,"name":"Opaline Nayar","email":"nayar_opaline@christiansen.biz","gender":"Male","status":"Active","created_at":"2021-02-13T03:50:04.715+05:30","updated_at":"2021-02-13T03:50:04.715+05:30"},{"id":21,"name":"Subhash Trivedi","email":"subhash_trivedi@nicolas.biz","gender":"Male","status":"Active","created_at":"2021-02-13T03:50:04.735+05:30","updated_at":"2021-02-13T03:50:04.735+05:30"},{"id":23,"name":"Anila Pothuvaal","email":"pothuvaal_anila@turner-aufderhar.com","gender":"Female","status":"Inactive","created_at":"2021-02-13T03:50:04.766+05:30","updated_at":"2021-02-13T03:50:04.766+05:30"},{"id":24,"name":"Ekaaksh Patel LLD","email":"patel_lld_ekaaksh@runolfsson.net","gender":"Male","status":"Active","created_at":"2021-02-13T03:50:04.778+05:30","updated_at":"2021-02-13T03:50:04.778+05:30"},{"id":25,"name":"TrumpDonald","email":"kapoor_kirti@welch.net","gender":"Female","status":"Inactive","created_at":"2021-02-13T03:50:04.793+05:30","updated_at":"2021-02-13T12:09:41.121+05:30"},{"id":26,"name":"Washington Luis Cabral da Silva","email":"wluissilva@live.com","gender":"Male","status":"Active","created_at":"2021-02-13T03:50:04.797+05:30","updated_at":"2021-02-13T08:32:51.188+05:30"},{"id":27,"name":"Chandrakala Nayar","email":"chandrakala_nayar@monahan.net","gender":"Male","status":"Active","created_at":"2021-02-13T03:50:04.816+05:30","updated_at":"2021-02-13T03:50:04.816+05:30"},{"id":28,"name":"Rajinder Johar CPA","email":"johar_rajinder_cpa@gorczany.com","gender":"Male","status":"Inactive","created_at":"2021-02-13T03:50:04.833+05:30","updated_at":"2021-02-13T03:50:04.833+05:30"}
];

$(document).ready(function() {
    $('#mytable').DataTable({
    data: data,
    columns: [
        { data: 'id' },
        { data: 'name' },
        { data: 'email' },
        { data: 'gender' },
        { data: 'status' },
        { data: 'created_at'},
        { data: 'updated_at'}
    ]
});
});
*/
$(document).ready(function() {
   var table = $('#mytable').DataTable({
    "columns": [
        { "data": "id" },
        {"data": "name"},
        { "data": "description" },
        { "data": "image" },
        { "data": "price" },
        { "data": "discount_amount"},
        { "data": "status"}
    ]
});


$.ajax({
    url: 'https://gorest.co.in/public-api/products',
    dataType : 'json',
    success: function (json){
        table.rows.add(json.data).draw();
    }
});
});
    



/*window.onload = async () => {
    try {
        const response = await fetch("https://gorest.co.in/public-api/users/12")
        if ( response.status == 200){
const user = await response.json();
//optionally you can console log user
console.log(user)
return user;
        }
    }catch (err){
        console.log("Error:", err)
    }
}
*/