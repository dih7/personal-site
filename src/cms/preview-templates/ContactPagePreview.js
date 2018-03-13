import React from 'react';
import { ContactPageTemplate } from '../../templates/about-page';

const ContactPagePreview = ({ entry, widgetFor }) => (
  <ContactPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

export default ContactPagePreview;
