$(document).ready(function(){
	
	/* "Places Selector" plugin search form category automatically select with respect to fixed pages */
	
	var page_id = $("#content-area article").attr('id');
	
	if( page_id == 'post-62' )
	{
		$(".wppl-category-wrapper select option").remove();
		$(".wppl-category-wrapper select").html('<option class="level-0" value="10">Towing</option>');
	}
	
	else if( page_id == 'post-64' )
	{
		$(".wppl-category-wrapper select option").remove();
		$(".wppl-category-wrapper select").html('<option class="level-0" value="8">Repairs</option>');
	}
	
	else if( page_id == 'post-66' )
	{
		$(".wppl-category-wrapper select option").remove();
		$(".wppl-category-wrapper select").html('<option class="level-0" value="1">Tires</option>');
	}
	
	else if( page_id == 'post-68' )
	{
		$(".wppl-category-wrapper select option").remove();
		$(".wppl-category-wrapper select").html('<option class="level-0" value="9">Oil Change</option>');
	}

});