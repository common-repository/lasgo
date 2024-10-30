<?php
add_action( 'wp_ajax_lasgo_add_points', 'lasgo_points_callback' );
add_action( 'wp_ajax_nopriv_lasgo_add_points', 'lasgo_points_callback_nopriv' );
function lasgo_points_callback() {

$pointid= ($_REQUEST['pointid']==NULL || $_REQUEST['pointid']=='undefined')?'0':$_REQUEST['pointid'];

$lasgo_points_option = (get_option('lasgo_points')!='')?get_option('lasgo_points'):'0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0';    
$lasgo_points_arr = explode('|',$lasgo_points_option); $lasgo_points_arr_new = array();
$lasgo_points=0; $i=0; $lasgo_old_points =0;
foreach($lasgo_points_arr as $value){
	$lasgo_old_points = intval($lasgo_old_points) + intval($value);
 if($i==5 || $i==12 || $i==14 || $i==15)$pointVal = 2; else $pointVal=1;
	if($i!=$pointid){
		$lasgo_points_arr_new[] = $value; 
	}
	else { 
		if($value=='0'){ $lasgo_points_arr_new[] = $pointVal; } 
		else { $lasgo_points_arr_new[] = $value;  }
	}
		 
	$i++;
}
$lasgo_points=0;
foreach($lasgo_points_arr_new as $value){
	$lasgo_points = intval($lasgo_points)+intval($value); 
	
}

$pointsTestNeed ='';
if($lasgo_level==0){ $lasgo_level_word='Zero'; $lasgo_nl_points = 2; $next_level_points .= '1 point = hover over all menu items and read descriptions<br>'; $next_level_points .= '1 point = go in Pages &raquo Add New and read the Learn more part<br>';    }
if($lasgo_level==1){ $lasgo_level_word='Blog Poster'; $lasgo_nl_points = 7; $next_level_points .= '1 point = go in Posts &raquo Categories and read the Learn more part<br>';  $next_level_points .= '1 point = go in Posts &raquo Tags and read the Learn more part<br>';  $next_level_points .= '1 point = go in Posts &raquo Add New and read the Learn more part<br>'; $next_level_points .= '2 points = Post a question from any topic/category via Lasgo<br>'; }
if($lasgo_level==2){$lasgo_level_word='Customizer'; $lasgo_nl_points = 12; $next_level_points .= '1 point = read Setting &raquo General learn more part<br>'; $next_level_points .= '1 point = read Setting &raquo Writing learn more part<br>'; $next_level_points .= '1 point = read Setting &raquo Reading learn more part<br>'; $next_level_points .= '1 point = read Setting &raquo Discussion learn more part<br>'; $next_level_points .= '1 point = read Setting &raquo Permalinks learn more part<br>';  }
if($lasgo_level==3){ $lasgo_level_word='Plugin Master'; $lasgo_nl_points = 15; $next_level_points .= '1 point = read Plugins learn more part<br>'; $next_level_points .= '2 points = Post a question in the Plugins category via Lasgo<br>';}
if($lasgo_level==4){ $lasgo_level_word='Lasgo Stylist'; $lasgo_nl_points = 18; $next_level_points .= '1 point = read Appearance &raquo Themes learn more part<br>'; $next_level_points .= '2 points = Post a question in the Themes category via Lasgo<br>'; }
if($lasgo_level==5){ $lasgo_level_word='Lasgo Themer'; $lasgo_nl_points = 20;  $next_level_points .= '2 points = Post a question in the Functions category via Lasgo<br>'; }
if($lasgo_level==6){ $lasgo_level_word='Lasgo Classer'; $lasgo_nl_points = 20;  }
if($lasgo_points>=$lasgo_nl_points){ $takeTest = '';} else { $takeTest =' button-disabled ';}
if($lasgo_points<$lasgo_nl_points){ $xpointsTest= $lasgo_nl_points-$lasgo_points; $pointsTestNeed= 'You need '.$xpointsTest.' more to take the exam.';}

$newPoints =implode('|',$lasgo_points_arr_new);
if ( get_option( 'lasgo_points' ) !== false ) { update_option('lasgo_points', $newPoints ); } else {  add_option( 'lasgo_points', $newPoints);}
$lasgo_points_dif = $lasgo_points - $lasgo_old_points;

// Lasgo points tab
 $lasgo_level = (get_option('lasgo_level')!='')?get_option('lasgo_level'):0;
$lasgo_points_option = (get_option('lasgo_points')!='')?get_option('lasgo_points'):'0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0';    
$lasgo_points_arr = explode('|',$lasgo_points_option);
$lasgo_points=0;
foreach($lasgo_points_arr as $value){
	$lasgo_points = $lasgo_points + $value; 
}

if($lasgo_level==0){ $lasgo_level_word='Zero'; $lasgo_nl_points = 2; $next_level_points .= '1 point = hover over all menu items and read descriptions<br>'; $next_level_points .= '1 point = go in Pages &raquo Add New and read the Learn more part<br>';    }
if($lasgo_level==1){ $lasgo_level_word='Blog Poster'; $lasgo_nl_points = 7; $next_level_points .= '1 point = go in Posts &raquo Categories and read the Learn more part<br>';  $next_level_points .= '1 point = go in Posts &raquo Tags and read the Learn more part<br>';  $next_level_points .= '1 point = go in Posts &raquo Add New and read the Learn more part<br>'; $next_level_points .= '2 points = Post a question from any topic/category via Lasgo<br>'; }
if($lasgo_level==2){$lasgo_level_word='Customizer'; $lasgo_nl_points = 12; $next_level_points .= '1 point = read Setting &raquo General learn more part<br>'; $next_level_points .= '1 point = read Setting &raquo Writing learn more part<br>'; $next_level_points .= '1 point = read Setting &raquo Reading learn more part<br>'; $next_level_points .= '1 point = read Setting &raquo Discussion learn more part<br>'; $next_level_points .= '1 point = read Setting &raquo Permalinks learn more part<br>';  }
if($lasgo_level==3){ $lasgo_level_word='Plugin Master'; $lasgo_nl_points = 15; $next_level_points .= '1 point = read Plugins learn more part<br>'; $next_level_points .= '2 points = Post a question in the Plugins category via Lasgo<br>';}
if($lasgo_level==4){ $lasgo_level_word='Lasgo Stylist'; $lasgo_nl_points = 18; $next_level_points .= '1 point = read Appearance &raquo Themes learn more part<br>'; $next_level_points .= '2 points = Post a question in the Themes category via Lasgo<br>'; }
if($lasgo_level==5){ $lasgo_level_word='Lasgo Themer'; $lasgo_nl_points = 20;  $next_level_points .= '2 points = Post a question in the Functions category via Lasgo<br>'; }
if($lasgo_level==6){ $lasgo_level_word='Lasgo Classer'; $lasgo_nl_points = 20;  }
if($lasgo_points>=$lasgo_nl_points){ $takeTest = '';} else { $takeTest =' button-disabled ';}
if($lasgo_points<$lasgo_nl_points){ $xpointsTest= $lasgo_nl_points-$lasgo_points; $pointsTestNeed= '<p id="pointsTestNeed">You need '.$xpointsTest.' more to take the exam.</p>';}

 
 echo '
 <h3>Level<span  class="lasgo-level-number"><i class="icon-flag"></i> 
 '.$lasgo_level_word.'</span></h3>
 <p>Learning WordPress is a valuable skill, one which can open new opportunities in your life. Lasgo can help you learn faster and achieving more
 by concentrating your effort on the next level.</p>
 <p>Your current level:</p>
 <div class="lasgo_legend">
 <p><i class="icon-sign-blank lasgo_legend_blue "></i> Your current level</p><p>
 <i class="icon-sign-blank lasgo_legend_yellow "></i> Next level</p></div><ul class="lasgo_levels"><li><span>Beginner</span>
 (2 points)</li><li><span>Blog Poster</span> (7 points)</li><li><span>Customizer</span> (12 points)</li><li><span>Lasgo Stylist</span>
 (15 points)</li><li><span>Plugin Master</span> (18 points)</li><li><span>Lasgo Themer</span> (20 points)</li><li><span>Lasgo Classer</span> 
 (20 points)</li></ul><h3>Points<span class="lasgo-points-number"><i class="icon-money"></i> '.$lasgo_points.'</span></h3>
 <p>Gathering points is not very difficult, here is what you need for the next level:</p>'.$next_level_points. $pointsTestNeed.'
 <a href="javascript:void(0)" class="button button-primary button-large '.$takeTest.' lasgo-test-button" >Take the exam</a>';
}

function lasgo_points_callback_nopriv() {

$pointid= ($_REQUEST['pointid']==NULL || $_REQUEST['pointid']=='undefined')?'0':$_REQUEST['pointid'];

$lasgo_points_option = (get_option('lasgo_points')!='')?get_option('lasgo_points'):'0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0';    
$lasgo_points_arr = explode('|',$lasgo_points_option); $lasgo_points_arr_new = array();
$lasgo_points=0; $i=0; $lasgo_old_points =0;
foreach($lasgo_points_arr as $value){
		$lasgo_old_points = intval($lasgo_old_points) + intval($value); 
 if($i==5 || $i==12 || $i==14 || $i==15)$pointVal = 2; else $pointVal=1;
	if($i!=$pointid){
		$lasgo_points_arr_new[] = $value; 
	}
	else { 
		if($value=='0'){ $lasgo_points_arr_new[] = $pointVal; } 
		else { $lasgo_points_arr_new[] = $value;  }
	}
	$i++;
}
$lasgo_points=0;
foreach($lasgo_points_arr_new as $value){
	$lasgo_points = intval($lasgo_points)+intval($value); 
}

$pointsTestNeed ='';
if($lasgo_level==0){ $lasgo_level_word='Zero'; $lasgo_nl_points = 2; $next_level_points .= '1 point = hover over all menu items and read descriptions<br>'; $next_level_points .= '1 point = go in Pages &raquo Add New and read the Learn more part<br>';    }
if($lasgo_level==1){ $lasgo_level_word='Blog Poster'; $lasgo_nl_points = 7; $next_level_points .= '1 point = go in Posts &raquo Categories and read the Learn more part<br>';  $next_level_points .= '1 point = go in Posts &raquo Tags and read the Learn more part<br>';  $next_level_points .= '1 point = go in Posts &raquo Add New and read the Learn more part<br>'; $next_level_points .= '2 points = Post a question from any topic/category via Lasgo<br>'; }
if($lasgo_level==2){$lasgo_level_word='Customizer'; $lasgo_nl_points = 12; $next_level_points .= '1 point = read Setting &raquo General learn more part<br>'; $next_level_points .= '1 point = read Setting &raquo Writing learn more part<br>'; $next_level_points .= '1 point = read Setting &raquo Reading learn more part<br>'; $next_level_points .= '1 point = read Setting &raquo Discussion learn more part<br>'; $next_level_points .= '1 point = read Setting &raquo Permalinks learn more part<br>';  }
if($lasgo_level==3){ $lasgo_level_word='Plugin Master'; $lasgo_nl_points = 15; $next_level_points .= '1 point = read Plugins learn more part<br>'; $next_level_points .= '2 points = Post a question in the Plugins category via Lasgo<br>';}
if($lasgo_level==4){ $lasgo_level_word='Lasgo Stylist'; $lasgo_nl_points = 18; $next_level_points .= '1 point = read Appearance &raquo Themes learn more part<br>'; $next_level_points .= '2 points = Post a question in the Themes category via Lasgo<br>'; }
if($lasgo_level==5){ $lasgo_level_word='Lasgo Themer'; $lasgo_nl_points = 20;  $next_level_points .= '2 points = Post a question in the Functions category via Lasgo<br>'; }
if($lasgo_level==6){ $lasgo_level_word='Lasgo Classer'; $lasgo_nl_points = 20;  }
if($lasgo_points>=$lasgo_nl_points){ $takeTest = '';} else { $takeTest =' button-disabled ';}
if($lasgo_points<$lasgo_nl_points){ $xpointsTest= $lasgo_nl_points-$lasgo_points; $pointsTestNeed= 'You need '.$xpointsTest.' more to take the exam.';}

$newPoints =implode('|',$lasgo_points_arr_new);
if ( get_option( 'lasgo_points' ) !== false ) { update_option('lasgo_points', $newPoints ); } else {  add_option( 'lasgo_points', $newPoints);}
$lasgo_points_dif = $lasgo_points - $lasgo_old_points;

// Lasgo points
 $lasgo_level = (get_option('lasgo_level')!='')?get_option('lasgo_level'):0;
$lasgo_points_option = (get_option('lasgo_points')!='')?get_option('lasgo_points'):'0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0';    
$lasgo_points_arr = explode('|',$lasgo_points_option);
$lasgo_points=0;
foreach($lasgo_points_arr as $value){
	$lasgo_points = $lasgo_points + $value; 
}

if($lasgo_level==0){ $lasgo_level_word='Zero'; $lasgo_nl_points = 2; $next_level_points .= '1 point = hover over all menu items and read descriptions<br>'; $next_level_points .= '1 point = go in Pages &raquo Add New and read the Learn more part<br>';    }
if($lasgo_level==1){ $lasgo_level_word='Blog Poster'; $lasgo_nl_points = 7; $next_level_points .= '1 point = go in Posts &raquo Categories and read the Learn more part<br>';  $next_level_points .= '1 point = go in Posts &raquo Tags and read the Learn more part<br>';  $next_level_points .= '1 point = go in Posts &raquo Add New and read the Learn more part<br>'; $next_level_points .= '2 points = Post a question from any topic/category via Lasgo<br>'; }
if($lasgo_level==2){$lasgo_level_word='Customizer'; $lasgo_nl_points = 12; $next_level_points .= '1 point = read Setting &raquo General learn more part<br>'; $next_level_points .= '1 point = read Setting &raquo Writing learn more part<br>'; $next_level_points .= '1 point = read Setting &raquo Reading learn more part<br>'; $next_level_points .= '1 point = read Setting &raquo Discussion learn more part<br>'; $next_level_points .= '1 point = read Setting &raquo Permalinks learn more part<br>';  }
if($lasgo_level==3){ $lasgo_level_word='Plugin Master'; $lasgo_nl_points = 15; $next_level_points .= '1 point = read Plugins learn more part<br>'; $next_level_points .= '2 points = Post a question in the Plugins category via Lasgo<br>';}
if($lasgo_level==4){ $lasgo_level_word='Lasgo Stylist'; $lasgo_nl_points = 18; $next_level_points .= '1 point = read Appearance &raquo Themes learn more part<br>'; $next_level_points .= '2 points = Post a question in the Themes category via Lasgo<br>'; }
if($lasgo_level==5){ $lasgo_level_word='Lasgo Themer'; $lasgo_nl_points = 20;  $next_level_points .= '2 points = Post a question in the Functions category via Lasgo<br>'; }
if($lasgo_level==6){ $lasgo_level_word='Lasgo Classer'; $lasgo_nl_points = 20;  }
if($lasgo_points==$lasgo_nl_points){ $takeTest = '';} else { $takeTest =' button-disabled ';}
if($lasgo_points<$lasgo_nl_points){ $xpointsTest= $lasgo_nl_points-$lasgo_points; $pointsTestNeed= '<p id="pointsTestNeed">You need '.$xpointsTest.' more to take the exam.</p>';}

 
 echo '
 <h3>Level<span  class="lasgo-level-number"><i class="icon-flag"></i> 
 '.$lasgo_level_word.'</span></h3>
 <p>Learning WordPress is a valuable skill, one which can open new opportunities in your life. Lasgo can help you learn faster and achieving more
 by concentrating your effort on the next level.</p>
 <p>Your current level:</p>
 <div class="lasgo_legend">
 <p><i class="icon-sign-blank lasgo_legend_blue "></i> Your current level</p><p>
 <i class="icon-sign-blank lasgo_legend_yellow "></i> Next level</p></div><ul class="lasgo_levels"><li><span>Beginner</span>
 (2 points)</li><li><span>Blog Poster</span> (7 points)</li><li><span>Customizer</span> (12 points)</li><li><span>Lasgo Stylist</span>
 (15 points)</li><li><span>Plugin Master</span> (18 points)</li><li><span>Lasgo Themer</span> (20 points)</li><li><span>Lasgo Classer</span> 
 (20 points)</li></ul><h3>Points<span class="lasgo-points-number"><i class="icon-money"></i> '.$lasgo_points.'</span></h3>
 <p>Gathering points is not very difficult, here is what you need for the next level:</p>'.$next_level_points. $pointsTestNeed.'
 <a href="javascript:void(0)" class="button button-primary button-large '.$takeTest.' lasgo-test-button" >Take the exam</a>';
}
?>