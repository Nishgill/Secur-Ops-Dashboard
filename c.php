<?php
	$host = "localhost";
	$db_user="root";
	$db_password="";
	$database="bosch";
	$link = mysqli_connect($host,$db_user,$db_password,$database);

	$Query = "Select * from 
	(select uid, max(id) as 'id' from bosch.coordniates group by uid) A
	left join 
	(Select * from coordniates) B
	ON
	A.id = B.id";
	
	$Query = " 
	(select uid, max(id) as 'id' from bosch.coordniates group by uid) A
	";
	
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
