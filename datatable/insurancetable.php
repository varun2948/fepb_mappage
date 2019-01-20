<html>
<head>
	<title> Insurance Datatable </title>
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css">
	<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/scroller/1.5.1/css/scroller.bootstrap4.min.css">

<style>
#form_wrapper .row .col-sm-12{
min-height: .01%;
    overflow-x: auto;
}
</style>
</head>
<body>
	<div class="container">
	<table id="form" class="table table-striped table-bordered">
			<thead>
				<th>ID</th>
				<th>CompanyName</th>
				<th>Address</th>
				<th>Contact</th>
				<th>Email</th>
				<th>Website</th>
				<th>Status</th>
				<th>Remarks</th>
				<th>Latitude</th>
				<th>Longitude</th>
			</thead>
			<tbody>

				<?php
				    $conn = mysqli_connect("localhost","root","","fepbform") or die("ERROR IN CONNECTION");

				   
			    $query = mysqli_query($conn,"SELECT * FROM insurance ORDER BY CompanyName");

			    while($result=mysqli_fetch_array($query)){
			    	echo "<tr>
			    	<td>".$result['ID']."</td>
			    	<td>".$result['CompanyName']."</td>
			    	<td>".$result['Address']."</td>
			    	<td>".$result['Contact']."</td>
			    	<td>".$result['Email']."</td>
			    	<td>".$result['Website']."</td>
			    	<td>".$result['Status']."</td>
			    	<td>".$result['Remark']."</td>
			    	<td>".$result['latitude']."</td>
			    	<td>".$result['longitude']."</td>
			    	</tr>";
			    }

			?>
		</tbody>
	</table>
</div>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.js"></script>
	<script type="text/javascript" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/scroller/1.5.1/js/dataTables.scroller.min.js"></script>

	<script>
		$(document).ready(function(){
			// $("#forms").dataTable();
			 var table = $('#form').DataTable( {
		      scrollY:        "450px",
        scrollX:        true,
        scrollCollapse: true,
        // fixedColumns:   true
    } );

		})
	</script>










	</body>







</html>