export function withColorScheme(Story: React.ComponentType, context: any) {
  let { theme } = context.globals
  const colorSchemeClass = `color-scheme--${theme}`

  return (
    <div className={colorSchemeClass}>
      <Story />
    </div>
  )
}
