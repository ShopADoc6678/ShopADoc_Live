<?php
$action = isset( $_GET['action'] ) ? $_GET['action'] : 'listing';

if ( $action == 'edit' ) {
    if ( ! current_user_can( 'dokan_edit_auction_product' ) ) {
        dokan_get_template_part('global/dokan-error', '', array( 'deleted' => false, 'message' => __( 'You have no permission to view this page', 'dokan-auction' ) ) );
    } else {
        dokan_get_template_part( 'auction/auction-product-edit', '', array( 'is_auction' => true ) );
    }
} else {
	if(isset($_GET['mode']) && $_GET['mode']=="test"){
		//dokan_get_template_part( 'auction/auction-products-listingNewScroll', '', array( 'is_auction' => true ) );
		dokan_get_template_part( 'auction/auction-products-listing', '', array( 'is_auction' => true ) );
	}else{
    	//dokan_get_template_part( 'auction/auction-products-listing', '', array( 'is_auction' => true ) );
		dokan_get_template_part( 'auction/auction-products-listingNewScroll', '', array( 'is_auction' => true ) );
	}
}