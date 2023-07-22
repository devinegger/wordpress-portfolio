/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';

import { useEffect, useState } from '@wordpress/element';



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	// Get the attributes and function to set attributes from props
	const { attributes, setAttributes, clientId } = props;
	// Get the Block Wrapper props
	const blockProps = useBlockProps();
	// Get the heading text and set up a local state for it
	const [heading, setHeading] = useState(attributes.heading);

	// Get the image and set up a local state for it
	const [text, setText] = useState(attributes.text);

	// super work around for storing a unique id so that I can USE it 
	// on the frontend, being a good A11y
	useEffect(() => {
		setAttributes({id: clientId});
	}, [clientId]);


	// This is a function that is passed to the RichText component.
	// It is called when the heading text is changed.
	// It sets the local state and the attributes.
	function updateHeadingContent(content) {
		setAttributes({ heading: content });
		setHeading(content);
	}

	// This is a function that is passed to the RichText component.
	// It is called when the heading text is changed.
	// It sets the local state and the attributes.
	function updateTextContent(content) {
		setAttributes({ text: content });
		setText(content);
	}

	return (
		<div {...blockProps}>
			<div className="accordion">
					<RichText
						className="wp-block-create-block-faq-accordion__heading"
						tagName="h3"
						placeholder={__("Enter FAQ heading..", "cend")}
						value={heading}
						onChange={updateHeadingContent}
					/>
				{ props.isSelected && 
						<RichText
							className="wp-block-create-block-faq-accordion__text"
							tagName="p"
							placeholder={__("Enter FAQ text..." , "cend")}
							value={text}
							onChange={updateTextContent} />}
						
			</div>
		</div>
	);
}
