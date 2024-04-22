import { useState } from 'react';
import { Dropdown, Label, Page } from '../../design-system';
import styled from 'styled-components';
import { useI18NContext } from '../../i18n';

type Option = {
  label: string;
  value: string;
};

export default function Settings() {
  const { _, setLocale } = useI18NContext();

  const [option, setOption] = useState<Option>({
    label: 'English',
    value: 'en',
  });

  const languageOptions: Option[] = [
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'French',
      value: 'fr',
    },
    {
      label: 'Spanish',
      value: 'es',
    },
  ];

  const handleChange = (option: Option) => {
    setOption(option);
    setLocale(option.value);
  };

  return (
    <Page title="Settings">
      <LanguageContainer>
        <Label>Language</Label>
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
