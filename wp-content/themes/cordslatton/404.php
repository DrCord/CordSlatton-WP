<?php
/** 404.php
 *
 * The template for displaying 404 pages (Not Found).
 *
 * @author		Konstantin Obenland
 * @package		The Bootstrap
 * @since		1.0.0 - 07.02.2012
 */

get_header(); ?>

<section id="primary" class="span11">

	<?php tha_content_before(); ?>
	<div id="content" role="main">
		<?php tha_content_top(); ?>
		
		<?php tha_entry_before(); ?>
		<article id="post-0" class="post error404 not-found">
			<?php tha_entry_top(); ?>
			<header class="page-header">
				<h1 class="entry-title"><?php _e( 'Sorry, the resource you requested cannot be found.', 'the-bootstrap' ); ?></h1>
			</header><!-- .page-header -->

			<div class="entry-content">
				<h2><?php _e( 'Perhaps one of the links below can help:', 'the-bootstrap' ); ?></h2>

				<?php
				#get_search_form();
				
				$args = array(
					'exclude'      => '7,8,156',
					'title_li'     => __('') 
				);
				?>
				<ul class="pageList">
				<?php
				wp_list_pages( $args );
				
				?>
				</ul>
			</div><!-- .entry-content -->
			<?php tha_entry_bottom(); ?>
		</article><!-- #post-0 .post .error404 .not-found -->
		<?php tha_entry_after(); ?>
		
		<?php tha_content_bottom(); ?>
	</div><!-- #content -->
	<?php tha_content_after(); ?>
</section><!-- #primary -->

<?php

get_footer();


/* End of file 404.php */
/* Location: ./wp-content/themes/the-bootstrap/404.php */