import { IApi } from '@umijs/types';

export default (api: IApi) => {
  api.describe({
    key: 'athena',
    config: {
      default: {
        polyfill: undefined,
        entryCodeAhead: '',
      },
      schema(joi: any) {
        const itemSchema = joi.object({
          polyfill: joi.string(),
          entryCodeAhead: joi.string(),
        });
        return itemSchema;
      },
    },
    enableBy: api.EnableBy.config,
  });

  api.addEntryCodeAhead(() => {
    const { entryCodeAhead } = api.config.athena;
    return entryCodeAhead;
  });

  api.addEntryImportsAhead(() => {
    const { polyfill } = api.config.athena;
    return polyfill ? [{ source: polyfill }] : [];
  });
};
