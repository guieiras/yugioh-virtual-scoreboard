import React from 'react'
import Select, { components } from 'react-select'
import ReactCountryFlag from 'react-country-flag'
import useTranslation, { languages } from '.'

const LocalesDropdown = ({ theme }) => {
  const { i18n } = useTranslation()
  const currentLanguage = languages.filter((l) => i18n.language === l.value)[0]
  const LocaleOption = ({ children, ...props }) => (
    <components.Option {...props}>
      <ReactCountryFlag countryCode={props.data.country} /> {props.data.label}
    </components.Option>
  );

  const themes = {
    default: {
      controlBackground: 'initial',
      controlBorderColor: 'rgba(34,36,38,.15)',
      valueColor: 'initial'
    },
    transparent: {
      controlBackground: 'transparent',
      controlBorderColor: 'transparent',
      valueColor: 'white'
    }
  }

  const colors = themes[theme] || themes.default

  return <Select
    styles={{
      container: (_) => ({..._, alignSelf: 'center', display: 'flex' }),
      control: (_) => ({ ..._, backgroundColor: colors.controlBackground, borderColor: colors.controlBorderColor }),
      singleValue: (_) => ({ ..._, color: colors.valueColor })
    }}
    components={{ Option: LocaleOption }}
    onChange={({ value }) => i18n.changeLanguage(value)}
    options={languages}
    value={currentLanguage}
  />
}

export default LocalesDropdown
