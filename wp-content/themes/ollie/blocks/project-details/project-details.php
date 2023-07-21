<?php
/**
 * Testimonial Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during backend preview render.
 * @param   int $post_id The post ID the block is rendering content against.
 *          This is either the post ID currently being displayed inside a query loop,
 *          or the post ID of the post hosting this block.
 * @param   array $context The context provided to the block by the post or it's parent block.
 */

// Support custom "anchor" values.
$anchor = '';
if ( ! empty( $block['anchor'] ) ) {
    $anchor = 'id="' . esc_attr( $block['anchor'] ) . '" ';
}

// Create class attribute allowing for custom "className" and "align" values.
$class_name = 'project-details-block';
if ( ! empty( $block['className'] ) ) {
    $class_name .= ' ' . $block['className'];
}
if ( ! empty( $block['align'] ) ) {
    $class_name .= ' align' . $block['align'];
}

// Load values and assign defaults.
$project_type           = get_field( 'project_type', $post_id );
$github_url             = get_field( 'github_url', $post_id ) ?: '';
$live_url               = get_field( 'live_url', $post_id ) ?: '';

?>


<div <?php echo $anchor; ?>class="<?php echo esc_attr( $class_name ); ?>">
    <div class="type">
        <p><?php echo $project_type ?></p>
    </div>
    <div class="links">
        <?php if ( $live_url !== '' ) : ?>
            <a href="<?php echo $live_url ?>" target="_blank">View Live Site</a>
        <?php endif; ?>
        <?php if ( $github_url !== '' ) : ?>
            <a href="<?php echo $github_url ?>" target="_blank">View on GitHub</a>
        <?php endif; ?>
    </div>
</div>