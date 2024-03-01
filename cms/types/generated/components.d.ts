import type { Schema, Attribute } from '@strapi/strapi';

export interface InfoSocial extends Schema.Component {
  collectionName: 'components_info_socials';
  info: {
    displayName: 'social';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    handle: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'info.social': InfoSocial;
    }
  }
}
