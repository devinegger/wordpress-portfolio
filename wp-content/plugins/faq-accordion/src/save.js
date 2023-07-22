/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes }) {
	return (
		<div { ...useBlockProps.save() }>
			<h3 className="wp-block-create-block-faq-accordion__heading">
				<button 
					className="link-button"
					id={`${attributes.id}-button`} 
					aria-controls={`${attributes.id}-text`} 
					aria-expanded="false">
					{attributes.heading}
				</button>
			</h3>
			<RichText.Content
				id={`${attributes.id}-text`}
				aria-labelledby={`${attributes.id}-button`}
				className="wp-block-create-block-faq-accordion__text"
				tagName="p"
				value={attributes.text}
			/>
		</div>
	);
}
