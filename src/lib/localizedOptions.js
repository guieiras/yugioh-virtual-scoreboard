export default function localizedOptions(options, t) {
  return options.map((option) => ({
    value: option,
    label: t(option),
  }))
}
