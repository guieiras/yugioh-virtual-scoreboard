export default function localizedOptions(options, t) {
  return options.map((option) => ({
    key: option,
    value: option,
    text: t(option),
  }))
}
