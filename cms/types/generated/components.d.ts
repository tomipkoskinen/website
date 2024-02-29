import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalSocial extends Schema.Component {
  collectionName: 'components_global_socials';
  info: {
    displayName: 'Social';
    icon: 'user';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    handle: Attribute.String & Attribute.DefaultTo<'@handle'>;
    icon: Attribute.Media;
    name: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.social': GlobalSocial;
      'shared.seo': SharedSeo;
    }
  }
}
