import { useEffect, useState } from 'react';
import { Dropdown, Label, Page } from '../../design-system';
import styled from 'styled-components';
import { useI18NContext } from '../../i18n';

type Option = {
  label: string;
  value: string;
};

export default function Settings() {
  const { _, locale, setLocale } = useI18NContext();

  const [option, setOption] = useState<Option>();

  const languageOptions: Option[] = [
    {
      label: _('English'),
      value: 'en',
    },
    {
      label: _('French'),
      value: 'fr',
    },
    {
      label: _('Spanish'),
      value: 'es',
    },
  ];

  const handleChange = (option: Option) => {
    setLocale(option.value);
  };

  useEffect(() => {
    if (locale) {
      setOption({
        label:
          locale === 'en'
            ? _('English')
            : locale === 'es'
            ? _('Spanish')
            : _('French'),
        value: locale,
      });
    }
  }, [_, locale]);

  return (
    <Page title={_('Settings')}>
      <LanguageContainer>
        <Label>{_('Language')}</Label>
        <Dropdown
          value={option}
          options={languageOptions}
          onChange={handleChange}
        />
      </LanguageContainer>
    </Page>
  );
}

const LanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;
