import CMS from 'netlify-cms';
import 'netlify-cms/dist/cms.css';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('about', ContactPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
