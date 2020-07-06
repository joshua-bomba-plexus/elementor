import SitePart from '../molecules/site-part';
import CssGrid from 'elementor-app/ui/atoms/css-grid';
import Button from 'elementor-app/ui/molecules/button';
import ModalProvider from 'elementor-app/ui/modal/modal';

import { Context as TemplateTypesContext } from '../context/template-types';

import './site-parts.scss';

const InfoButton = ( props ) => {
	const toggleButtonProps = {
		text: __( 'Info', 'elementor' ),
		hideText: true,
		icon: 'eicon-info-circle info-toggle',
	};

	return (
		<ModalProvider toggleButtonProps={ toggleButtonProps }>
			<h1>{ props.title }</h1>
			<p>
				{ props.content } <Button text={ __( 'Learn More', 'elementor' ) } url={ props.docs } />
			</p>
			<p>
				{ __( 'Tip', 'elementor' ) } { props.tip }
			</p>
			<section>
				<h1>{ __( 'Watch Video', 'elementor' ) }</h1>
				<iframe id="ytplayer" type="text/html" width="640" height="360"
								src={ props.video_url }
								frameBorder="0"></iframe>
			</section>
		</ModalProvider>
	);
};

InfoButton.propTypes = {
	content: PropTypes.string.isRequired,
	docs: PropTypes.string.isRequired,
	tip: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	video_url: PropTypes.string.isRequired,
};

export default function SiteParts( props ) {
	const { templateTypes } = React.useContext( TemplateTypesContext );

	return (
		<CssGrid className="site-editor__site-parts">
			{ (
				templateTypes.map( ( item ) => (
					<SitePart className="site-part" actionButton={ <InfoButton { ...item.tooltip_data } /> } thumbnail={ item.urls.thumbnail } key={ item.type } { ...item }>
						{ React.createElement( props.hoverElement, item ) }
					</SitePart>
				) )
			) }
		</CssGrid>
	);
}

SiteParts.propTypes = {
	hoverElement: PropTypes.func.isRequired,
};