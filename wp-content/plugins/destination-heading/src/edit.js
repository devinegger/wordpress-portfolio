/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * WordPress dependencies
 */
import {
  /**
   * React hook that is used to mark the block wrapper element.
   * It provides all the necessary props like the class name.
   *
   * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
   */
  useBlockProps,
  RichText,
} from "@wordpress/block-editor";

import { useState } from "@wordpress/element";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
  // Get the attributes and function to set attributes from props
  const { attributes, setAttributes } = props;
  // Get the Block Wrapper props
  const blockProps = useBlockProps();
  // Get the heading text and set up a local state for it
  const [heading, setHeading] = useState(attributes.heading);

  // This is a function that is passed to the RichText component.
  // It is called when the heading text is changed.
  // It sets the local state and the attributes.
  function setHeadingContent(content) {
	setAttributes({ heading: content });
	setHeading(content);
  }

  return (
	<div {...blockProps}>
	  <h2>
		<RichText
		  // This is the class name that will be added to the heading element
		  className="destination-heading-editable"
		  // This is the tag name that will be used in the editor
		  tagName="span"
		  // This is the placeholder text that will be shown in the editor
		  placeholder="Enter heading.."
		  // If there is heading text, show it, otherwise show the placeholder
		  value={heading}
		  // This is the function that will be called when the heading text is changed
		  onChange={setHeadingContent}
		/>
		<span className="to-icon">
			<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-6 h-6">
			  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
			</svg>
			<span className="visually-hidden">to</span>
		</span>
		<span className="cities">- -</span>
	  </h2>
	</div>
  );
}
