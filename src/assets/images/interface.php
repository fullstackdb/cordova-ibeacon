<?php
	header("Access-Control-Allow-Origin: *");
	header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
	header("Cache-Control: post-check=0, pre-check=0", false);
	header("Pragma: no-cache");
	// header("Content-type: text/html; charset=ISO-8859-1");
	header("Content-Type: application/json");
	
	define("PASSPHRASE_FE", "723a1f0d-aa5e-4dc1-aa6d-f4ead5c5cd12");
	define("PASSPHRASE_BE", "88dce4ad-5733-4a37-ae82-9f5a7fdc585b");
	
	$dbuser  = "porsche-ce-dubai";
	$dbpass  = "ydAv!_F3-sC-yAFtFTpX?PRuB86AseEP";
	$db = "porsche-ce-dubai";
	$host = "localhost";

	$conn = mysql_connect($host, $dbuser, $dbpass) or die(mysql_error());
	@mysql_select_db($db, $conn) or die(mysql_error());
	
	// extract the provided passphrase
	$json = file_get_contents("php://input");
	$obj = json_decode($json, true);
	$passphrase = $obj['passphrase'];
	
	
	/* 
		Services which are called by the iPhone application
	*/
	
	
	if(checkPassphrase($passphrase, PASSPHRASE_FE) && strtolower($_GET['service']) == strtolower("registerDevice")){
		echo "TODO: ".$_GET['service'];
	}
	else if(checkPassphrase($passphrase, PASSPHRASE_FE) && strtolower($_GET['service']) == strtolower("getBeaconConfigurations")){
		$result = mysql_query("SELECT uuid, major, minor, type FROM porsche_beaconConfiguration ORDER BY id ASC") or die(mysql_error());
		$return = array();
		if(mysql_num_rows($result) > 0){
			while($row = mysql_fetch_assoc($result)){
				$return[] = $row;
			}
		}
		echo json_encode($return);
	}
	else if(checkPassphrase($passphrase, PASSPHRASE_FE) && strtolower($_GET['service']) == strtolower("reportVisit")){
		echo "TODO: ".$_GET['service'];
	}
	else if(checkPassphrase($passphrase, PASSPHRASE_FE) && strtolower($_GET['service']) == strtolower("removeVisit")){
		echo "TODO: ".$_GET['service'];
	}
	else if(checkPassphrase($passphrase, PASSPHRASE_FE) && strtolower($_GET['service']) == strtolower("getCarInformation")){
		echo "TODO: ".$_GET['service'];
	}
	else if(checkPassphrase($passphrase, PASSPHRASE_FE) && strtolower($_GET['service']) == strtolower("getEventInformation")){
		echo "TODO: ".$_GET['service'];
	}
	else if(checkPassphrase($passphrase, PASSPHRASE_FE) && strtolower($_GET['service']) == strtolower("registerForEvent")){
		echo '{
			"status" : "<success or error>"
		}';
	}
	else if(checkPassphrase($passphrase, PASSPHRASE_FE) && strtolower($_GET['service']) == strtolower("recordBeaconActivities")){
		echo "TODO: ".$_GET['service'];
	}
	
	/* 
		Services which are called by the iPad application
	*/
	
	
	function checkPassphrase($is, $should){
		if($is == $should){
			return true;
		}
		else {
			return false;
		}
	}
?>