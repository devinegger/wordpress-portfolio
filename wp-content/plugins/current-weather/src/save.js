/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

import WeatherPill from "./WeatherPill";

const numOfDays = 7;

let weatherPills = [];

for (let i = 0; i < numOfDays; i++) {
  weatherPills.push(<WeatherPill key={i} pillCount={i} />);
}


export default function save({ attributes }) {
  return (
	<div {...useBlockProps.save()}>
	  <p
		style={{
		  textAlign: "center",
		}}
		className="wp-block-create-block-current-weather__location"
		data-location={attributes.location}
		data-latitude={attributes.latitude}
		data-longitude={attributes.longitude}>
	  </p>

	  <div className="wp-block-create-block-current-weather__wrap">{weatherPills}</div>
	</div>
  );
}