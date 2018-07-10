
<?php
	$host = "localhost";
	$db_user="root";
	$db_password="";
	$database="bosch";
	$link = mysqli_connect($host,$db_user,$db_password,$database);

	$Query = "select *from shapes";
	#echo $Query;
	$code =mysqli_query($link,$Query);
	$data = array();
	$i=0;

	$data = array();
	while($row = mysqli_fetch_assoc($code))
	{

		$data[] = $row;
		$i++;
	}

	echo json_encode($data);

?>
