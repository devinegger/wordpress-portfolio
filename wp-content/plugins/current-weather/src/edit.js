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
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

// get components for use in editor
import { Placeholder, TextControl } from "@wordpress/components";

// get cloud icon for use in toolbar
import { cloud } from "@wordpress/icons";

// get useState and useEffect React hooks
import { useState, useEffect } from "@wordpress/element";

/** Internal dependencies */

// get weather pill component and populateWeather function
import WeatherPill, { populateWeather } from "./WeatherPill";

// use api functions
import { getLatLon, getWeather } from "./api";

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
	  const { attributes, setAttributes } = props;
	  // Get the Block Wrapper props
	  const blockProps = useBlockProps();

	  // get the location text and set up a local state for it
	  const [location, setLocation] = useState(attributes.location || "");

	  // set boolean for whether the location is valid
	  // if attributes.location contains a value, then it has been validated
	  const [locationFound, setLocationFound] = useState(location.length >= 5);

	  // set up a local state for status message
	  const [status, setStatus] = useState(
		locationFound ? attributes.locationName || "" : "Enter a valid US Zip Code"
	  );

	  // This is a function that is passed to the Textcontrol component.
	  // It is called when the location text is changed.
	  // It sets the local state and the attributes.
	  // It may also provide some validation against notallowed zips
	  function setLocationContent(content) {
		let newZip = content;

		newZip = newZip.replace(/[^0-9]/g, "");
		// string replace with regex to remove non-numeric characters

		if (newZip.length >= 5) {
		  // if the zip code is at least 5 characters, truncate it to 5
		  newZip = newZip.substring(0, 5);

		  if (newZip != attributes.location) {
			// if the new zip code is not the same as stored in attributes, skip validation

			setStatus("loading...");

			(async () => {
			  const data = await getLatLon(newZip);
			  if (!data.error) {
				setLocationFound(true);
				setStatus(data.name);
				setAttributes({
				  location: newZip,
				  locationName: data.name,
				  latitude: Math.round(data.lat),
				  longitude: Math.round(data.lon),
				});
			  } else {
				// if we get here, we have an error
				console.log(data.error);
				setStatus("Invalid Zip Code");
				setLocationFound(false);
			  }
			})();
		  } else {
			// zip code is the same as stored in attributes
			// set reset status and bounce out
			setStatus(attributes.locationName);
			setLocationFound(true);
		  }
		} else {
		  // zip is less than 5 characters - set status and bounce out
		  setStatus("Enter a valid US Zip Code");
		  setLocationFound(false);
		}
		// set the local state for location
		setLocation(newZip);
	  }

	  function setWeatherPills(numOfDays) {
		const weatherPills = [];
		for (let i = 0; i < numOfDays; i++) {
		  weatherPills.push(<WeatherPill key={i} pillCount={i} />);
		}
		return weatherPills;
	  }

	  useEffect(() => {
		if (locationFound) {
		  (async () => {
			const daily = await getWeather(
			  attributes.latitude,
			  attributes.longitude
			);
			if (daily) {
			  populateWeather(daily);
			}
		  })();
		}
	  }, [locationFound]);

	  return (
		<div {...blockProps}>
		  <InspectorControls key="setting">
			<div id="create-block-current-weather-controls">
			  <fieldset>
				<legend className="blocks-base-control__label">
				  {__("Zip Code", "current-weather")}
				</legend>
				<TextControl
				  label={__("Zip Code", "current-weather")}
				  onChange={setLocationContent}
				  placeholder={__("Enter a valid US Zip Code", "current-weather")}
				  value={location}
				/>
				<p>{status}</p>
			  </fieldset>
			</div>
		  </InspectorControls>
		  {!locationFound ? (
			<Placeholder
			  icon={cloud}
			  instructions={__(
				"Provide a zip code for the desired location.",
				"current-weather"
			  )}
			  label={__("Set a location for the Weather Widget", "current-weather")}>
			  <div>
				<TextControl
				  label={__("Zip Code", "current-weather")}
				  onChange={setLocationContent}
				  placeholder={__("Enter a valid US Zip Code", "current-weather")}
				  value={location}
				/>
			  </div>
			</Placeholder>
		  ) : (
			<div className="wp-block-create-block-current-weather">
			  <div className="wp-block-create-block-current-weather__wrap">
				{setWeatherPills(7)}
			  </div>
			</div>
		  )}
		</div>
	  );
}
