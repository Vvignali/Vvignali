// src/components/Seo.jsx
import { Helmet } from "react-helmet-async";
import defaultSeo from "../config/seo.config";

const Seo = ({ title, description, image, url }) => {
  const meta = {
    title: title || defaultSeo.title,
    description: description || defaultSeo.description,
    image: image || defaultSeo.image,
    url: url || defaultSeo.url
  };

  return (
<Helmet>
  <title>{meta.title}</title>
  <meta name="description" content={meta.description} />

  {/* Canonical URL */}
  <link rel="canonical" href={meta.url} />

  {/* Open Graph tags */}
  <meta property="og:title" content={meta.title} />
  <meta property="og:description" content={meta.description} />
  <meta property="og:image" content={meta.image} />
  <meta property="og:url" content={meta.url} />
  <meta property="og:type" content="website" />
</Helmet>

  );
};

export default Seo;