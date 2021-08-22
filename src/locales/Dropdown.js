import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import ReactCountryFlag from 'react-country-flag'
import useTranslation, { languages } from '.'

const LocalesDropdown = ({ item, selection }) => {
  const { i18n } = useTranslation()
  const currentLanguage = languages.filter((l) => i18n.language === l.key)[0]

  return <Dropdown selection={selection} item={item} text={currentLanguage.name}>
    <Dropdown.Menu>
      { languages.map((language) => (
        <Dropdown.Item key={language.key} onClick={() => { i18n.changeLanguage(language.key) }}>
          <ReactCountryFlag countryCode={language.country} /> {currentLanguage.key === language.key ? <b>{language.name}</b> : language.name}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
}

export default LocalesDropdown
